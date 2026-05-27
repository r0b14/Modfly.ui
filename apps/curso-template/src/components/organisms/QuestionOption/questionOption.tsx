import { useEffect, useRef, useState } from 'react';
import { useQuestionsContext } from 'contexts/QuestionsContext';
import './styles.css';

export const QuestionOption: React.FC<QuestionOptionProps> = ({
  number,
  indicator,
  answersContent = [],
  correctAnswer = [],
  moduleNow,
  slideNow,
  feedbackContent,
  onShowFeedback, // callback
  onSelectAnswer,
}) => {
  const {
    questionArray,
    updateArray,
    questionAnsweredArray,
    updateQuestionAnsweredArray,
    showResult,
  } = useQuestionsContext();

  const useEffectFlag = useRef(0);
  const [currentValue, setCurrentValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [confirmedCorrect, setConfirmedCorrect] = useState(false);

  // Função removida - não é mais necessária sem QuestionOptionHeader

  // Sanitizes HTML before injecting with dangerouslySetInnerHTML
  function sanitizeHTML(dirty: string) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(dirty, 'text/html');
      // Remove dangerous elements
      const forbidden = doc.querySelectorAll('script, iframe, object, embed');
      forbidden.forEach((n) => n.remove());
      // Remove event handlers and javascript: in attributes
      const all = doc.querySelectorAll('*');
      all.forEach((el) => {
        Array.from(el.attributes).forEach((attr) => {
          const name = attr.name.toLowerCase();
          const value = String(attr.value || '');
          if (name.startsWith('on') || /javascript:\s*/i.test(value)) {
            el.removeAttribute(attr.name);
          }
        });
      });
      return doc.body.innerHTML;
    } catch (e) {
      // fallback escape
      return String(dirty)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  }

  // Função para re-validar o estado no contexto sem interagir com DOM ou LocalStorage (Pure Logic)
  // Essencial para restaurar o "check" verde ao tentar novamente ou recarregar
  function revalidateAnswerState(value: string) {
    if (!value) return;

    // Atualiza array de questões respondidas
    updateQuestionAnsweredArray((prev) => {
      const aux = [...prev];
      aux[indicator - 1] = true;
      return aux;
    });

    // Atualiza corretude
    if (correctAnswer.some((answer) => answer === value)) {
      updateArray((prev) => {
        const aux = [...prev];
        if (!aux.includes(`${indicator}`)) {
          aux.push(`${indicator}`);
        }
        return aux;
      });
    } else {
      updateArray((prev) => prev.filter((tag) => tag !== `${indicator}`));
    }
  }

  function handleSelectChange(value: any, number: number, indicator: number, isLoading = false) {
    if (!isLoading) {
      LocalStorageSave({
        id: `#optionAnswer${slideNow}${number}`,
        value,
        number,
      });
    }

    setCurrentValue(value || '');
    setConfirmedCorrect(false);

    // Notifica componente pai sobre a seleção atual
    if (onSelectAnswer) {
      try {
        onSelectAnswer(number, value);
      } catch (e) {
        console.error('onSelectAnswer callback error', e);
      }
    }

    // Chama a lógica pura de validação
    revalidateAnswerState(value);
  }

  // Função baseada na nova arquitetura Client-Server (Persistence Init)
  async function initPersistence() {
    try {
      // 1. Carrega estado visual do LocalStorage (UX Imediata)
      LocalStorageLoad();

      // 2. Consulta a API para validar o estado real (Autoridade)
      if (window.BridgeRestApi) {
        const api = new window.BridgeRestApi();
        const activityId = `moduloAvaliativo_S${slideNow}M${moduleNow}`;

        const response = await api.obterRespostaAtividade(activityId);

        if (response && response.data) {
          const { situacao, questoesUsuario, nota } = response.data;

          // Critério unificado de sucesso (Avaliada ou Nota Máxima)
          const isFinished = situacao === 'AVALIADA' || (nota !== undefined && nota >= 10);

          if (isFinished) {
            // Valida se esta questão específica está correta na API
            const myQuestionId = `S${slideNow}M${moduleNow}_${number}`;
            const apiQuestion = questoesUsuario?.find(
              (q: any) => q.questao.identificador === myQuestionId,
            );

            if (apiQuestion && apiQuestion.respostas) {
              const isCorrect = apiQuestion.respostas.some(
                (r: any) => r.chave === '1' && r.valor === '1',
              );

              if (isCorrect) {
                // Se a API diz que está certa, força atualização do Contexto
                updateArray((prev) => {
                  const aux = [...prev];
                  if (!aux.includes(`${indicator}`)) {
                    aux.push(`${indicator}`);
                  }
                  return aux;
                });
                // Força visualização de correta
                setConfirmedCorrect(true);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('❌ Erro na persistência (QuestionOption):', error);
    }
  }

  // Carregar estado salvo ao montar o componente
  useEffect(() => {
    if (useEffectFlag.current === 0) {
      initPersistence();
    }
    useEffectFlag.current = 1;
  }, [moduleNow, slideNow, number]);

  useEffect(() => {
    if (isLoading) return;

    const answerOption = document.querySelector(
      `#optionAnswer${slideNow}${number}`,
    ) as HTMLSelectElement;

    if (!answerOption) return;

    if (showResult) {
      // Mostra feedback visual das respostas
      const isCorrect = correctAnswer.some((answer) => answer === answerOption.value);

      if (isCorrect) {
        answerOption.classList.remove('iddleOptionAnswer', 'incorrectOptionAnswer');
        answerOption.classList.add('correctOptionAnswer');
        if (!confirmedCorrect) setConfirmedCorrect(true);
      } else {
        answerOption.classList.remove('iddleOptionAnswer', 'correctOptionAnswer');
        answerOption.classList.add('incorrectOptionAnswer');
        if (confirmedCorrect) setConfirmedCorrect(false);
      }

      if (feedbackContent && onShowFeedback) {
        const isCorrect = correctAnswer.includes(currentValue);
        const feedbackHtml = isCorrect
          ? sanitizeHTML(feedbackContent[0])
          : sanitizeHTML(feedbackContent[1]);
        onShowFeedback(feedbackHtml, isCorrect);
      }
    } else {
      // Quando TENTAR NOVAMENTE é clicado
      // Persistir respostas corretas visualmente APENAS se já foram confirmadas

      if (confirmedCorrect) {
        // Mantém visual de correto para as que foram acertadas e confirmadas
        answerOption.classList.remove('iddleOptionAnswer', 'incorrectOptionAnswer');
        answerOption.classList.add('correctOptionAnswer');
      } else {
        // Reseta visual
        answerOption.classList.remove('correctOptionAnswer', 'incorrectOptionAnswer');
        if (currentValue) {
          answerOption.classList.add('iddleOptionAnswer');
        }
      }
    }
  }, [showResult, isLoading, currentValue, confirmedCorrect]);

  // Guardian Effect: Garante que o Contexto receba a resposta mesmo se houver recarga/race-condition
  // Se tenho um valor local, mas o Contexto diz que não respondi, forço a atualização.
  useEffect(() => {
    if (currentValue && questionAnsweredArray && !questionAnsweredArray[indicator - 1]) {
      revalidateAnswerState(currentValue);
    }
  }, [questionAnsweredArray, currentValue, indicator]);

  // Use !bg- (Tailwind Important) para vencer CSS legado com background
  // Cor padrão (#faefcf) quando nada selecionado, #F5B76C quando selecionado
  const bgClass = currentValue ? '!bg-[#F5B76C]' : '!bg-[#faefcf]';

  return (
    <span className="relative inline-block">
      <span
        id={`noAnswerMarkedAdvice${indicator - 1}`}
        style={{
          display: 'none',
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'max-content',
          maxWidth: '200px',
          backgroundColor: 'rgba(255, 83, 83, 0.9)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 10,
          textAlign: 'center',
          pointerEvents: 'none',
          marginBottom: '5px',
        }}
      >
        Selecione uma opção
      </span>
      <select
        className={`QuestionOptionSelect mx-2 text-center text-paragraph-normal p-1 rounded-lg text-[#4C4C4C] font-medium border-none ${bgClass} ${
          showResult ? 'pointer-events-none' : ''
        }`}
        name="select"
        id={`optionAnswer${slideNow}${number}`}
        onChange={(e) => handleSelectChange(e.target.value, number, indicator)}
        value={currentValue}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {answersContent.map((answer) => (
          <option key={answer} value={answer}>
            {answer}
          </option>
        ))}
      </select>
    </span>
  );

  function LocalStorageLoad() {
    setTimeout(() => {
      const key = `SACQuestionStorageQuestionOption${moduleNow}${slideNow}${number}`;
      let optionAnswers: Array<any> = [];

      try {
        const stored = localStorage.getItem(key);
        if (stored) {
          optionAnswers = JSON.parse(stored);
        }
      } catch (error) {
        console.error('Erro ao ler do localStorage:', error);
      }

      if (optionAnswers.length > 0) {
        optionAnswers.forEach((optionAnswer: any) => {
          // Apenas atualiza estado React, sem chamada DOM direta excessiva
          setCurrentValue(optionAnswer.value || '');

          // ATENÇÃO: Ao navegar entre slides, o DOM do select é recriado.
          // Precisamos forçar o valor no elemento DOM explicitamente para garantir que o usuário VEJA a seleção
          const selectElement = document.querySelector(
            `#optionAnswer${slideNow}${number}`,
          ) as HTMLSelectElement;

          if (selectElement) {
            selectElement.value = optionAnswer.value || '';
          }

          // Chama handleSelectChange marcando como carregamento (evita loop de save)
          handleSelectChange(optionAnswer.value, number, indicator, true);
        });
      }
      setIsLoading(false);
    }, 50); // Aumentado timeout para garantir renderização do DOM
  }

  function LocalStorageSave(optionAnswer: any) {
    const key = `SACQuestionStorageQuestionOption${moduleNow}${slideNow}${number}`;
    let existingItems: Array<any> = [];

    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        existingItems = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Erro ao ler do localStorage:', error);
    }

    existingItems = existingItems.filter((item: any) => item.id !== optionAnswer.id);
    const updatedItems = [...existingItems, optionAnswer];

    try {
      localStorage.setItem(key, JSON.stringify(updatedItems));
    } catch (e) {
      console.error('Erro ao salvar no localStorage:', e);
    }
  }
};

interface QuestionOptionProps {
  number: number;
  indicator: number;
  correctAnswer: Array<string>;
  answersContent: Array<string>;
  feedbackContent?: Array<string>;
  slideNow: number;
  moduleNow: number;
  onShowFeedback?: (feedbackHtml: string, isCorrect: boolean) => void;
  onSelectAnswer?: (questionNumber: number, selectedAnswer: string) => void;
}
