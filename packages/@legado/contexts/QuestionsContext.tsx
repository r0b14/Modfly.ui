import React, {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from 'react';

interface QuestionsContextProps {
  questionArray: string[];
  updateArray: Dispatch<SetStateAction<string[]>>;
  questionAnsweredArray: boolean[];
  updateQuestionAnsweredArray: Dispatch<SetStateAction<boolean[]>>;
  showResult: boolean;
  updateShowResult: Dispatch<SetStateAction<boolean>>;
  feedbackShow: boolean;
  updateFeedbackShow: Dispatch<SetStateAction<boolean>>;
  hasSentAnswers: boolean;
  updateHasSentAnswers: Dispatch<SetStateAction<boolean>>;
  isQuestionAttempted: (index: number) => boolean;
  resetContext: () => void;
  currentActivity: string;
  setCurrentActivity: (activityId: string) => void;
}

const QuestionsContext = createContext<QuestionsContextProps | undefined>(undefined);

const QuestionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [questionArray, setQuestionArray] = useState<string[]>([]);
  const [questionAnsweredArray, setQuestionAnsweredArray] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [feedbackShow, setFeedbackShow] = useState<boolean>(false);
  const [hasSentAnswers, setHasSentAnswers] = useState<boolean>(false);
  const [currentActivity, setCurrentActivityState] = useState<string>('');
  const isLoadingState = useRef(false);
  const stateCache = useRef<Record<string, any>>({});

  const updateArray: Dispatch<SetStateAction<string[]>> = (newArray) => {
    setQuestionArray((prevArray) => {
      return typeof newArray === 'function' ? newArray(prevArray) : newArray;
    });
  };

  const updateQuestionAnsweredArray: Dispatch<SetStateAction<boolean[]>> = (newArray) => {
    setQuestionAnsweredArray((prevArray) => {
      return typeof newArray === 'function' ? newArray(prevArray) : newArray;
    });
  };

  const updateShowResult: Dispatch<SetStateAction<boolean>> = (value) => {
    setShowResult(value);
  };

  const updateFeedbackShow: Dispatch<SetStateAction<boolean>> = (value) => {
    setFeedbackShow(value);
  };

  const updateHasSentAnswers: Dispatch<SetStateAction<boolean>> = (value) => {
    setHasSentAnswers(value);
  };

  const resetContext = () => {
    setQuestionArray([]);
    setQuestionAnsweredArray([]);
    setShowResult(false);
    setFeedbackShow(false);
    setHasSentAnswers(false);
  };

  const isQuestionAttempted = (index: number): boolean => {
    return questionAnsweredArray[index] ?? false;
  };

  // Salvar estado na API sempre que houver mudanças
  useEffect(() => {
    if (currentActivity && !isLoadingState.current) {
      const state = {
        questionArray,
        questionAnsweredArray,
        showResult,
        feedbackShow,
        hasSentAnswers,
      };

      // Salvar no cache local
      stateCache.current[currentActivity] = state;

      // Salvar na API de forma assíncrona
      const saveState = async () => {
        try {
          const API = new window.BridgeRestApi();
          const stateKey = `activityState_${currentActivity}`;
          await API.registrarDadosGenericos(stateKey, JSON.stringify(state));
        } catch (error) {
          console.error('Erro ao salvar estado:', error);
        }
      };

      saveState();
    }
  }, [
    currentActivity,
    questionArray,
    questionAnsweredArray,
    showResult,
    feedbackShow,
    hasSentAnswers,
  ]);

  // Definir atividade atual e carregar estado salvo
  const setCurrentActivity = async (activityId: string) => {
    if (activityId === currentActivity) return;

    // Salvar estado atual antes de trocar
    if (currentActivity) {
      const currentState = {
        questionArray,
        questionAnsweredArray,
        showResult,
        feedbackShow,
        hasSentAnswers,
      };
      stateCache.current[currentActivity] = currentState;

      try {
        const API = new window.BridgeRestApi();
        const stateKey = `activityState_${currentActivity}`;
        await API.registrarDadosGenericos(stateKey, JSON.stringify(currentState));
      } catch (error) {
        console.error('Erro ao salvar estado antes de trocar:', error);
      }
    }

    setCurrentActivityState(activityId);
    isLoadingState.current = true;

    // Verificar cache primeiro
    if (stateCache.current[activityId]) {
      const cachedState = stateCache.current[activityId];
      setQuestionArray(cachedState.questionArray || []);
      setQuestionAnsweredArray(cachedState.questionAnsweredArray || []);
      setShowResult(cachedState.showResult || false);
      setFeedbackShow(cachedState.feedbackShow || false);
      setHasSentAnswers(cachedState.hasSentAnswers || false);
      isLoadingState.current = false;
      return;
    }

    // Carregar da API
    try {
      const API = new window.BridgeRestApi();
      const stateKey = `activityState_${activityId}`;
      const result = await API.obterDadosGenericos(stateKey);

      if (result.data && result.data[0] && result.data[0].valor) {
        try {
          const savedState = JSON.parse(result.data[0].valor);

          setQuestionArray(savedState.questionArray || []);
          setQuestionAnsweredArray(savedState.questionAnsweredArray || []);
          setShowResult(savedState.showResult || false);
          setFeedbackShow(savedState.feedbackShow || false);
          setHasSentAnswers(savedState.hasSentAnswers || false);

          // Salvar no cache
          stateCache.current[activityId] = savedState;
        } catch (parseError) {
          console.error(
            '❌ Parse error for',
            activityId,
            'raw:',
            result.data[0].valor,
            'error:',
            parseError,
          );
          // Nenhum estado salvo, inicializar vazio
          resetContext();
        }
      } else {
        // Nenhum estado salvo, inicializar vazio
        resetContext();
      }
    } catch (error) {
      resetContext();
    } finally {
      isLoadingState.current = false;
    }
  };

  return (
    <QuestionsContext.Provider
      value={{
        questionArray,
        updateArray,
        showResult,
        updateShowResult,
        questionAnsweredArray,
        updateQuestionAnsweredArray,
        feedbackShow,
        updateFeedbackShow,
        hasSentAnswers,
        updateHasSentAnswers,
        isQuestionAttempted,
        resetContext,
        currentActivity,
        setCurrentActivity,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

const useQuestionsContext = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error('useQuestionsContext must be used within a QuestionsProvider');
  }
  return context;
};

export { QuestionsProvider, useQuestionsContext };
