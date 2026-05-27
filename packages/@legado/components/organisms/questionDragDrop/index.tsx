import React, { useState, useEffect, useRef } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useQuestionsContext } from "../../../contexts/QuestionsContext";

// Componente de card arrastável
interface DraggableCardProps {
  id: string;
  children: React.ReactNode;
  isUsed?: boolean;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ id, children, isUsed }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
    disabled: isUsed,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : isUsed ? 0.3 : 1,
    cursor: isUsed ? "not-allowed" : "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
        className={`px-4 py-2 bg-blue-100 rounded-lg text-center transition-all hover:shadow-lg shadow-md ${
          isUsed ? "pointer-events-none opacity-30" : ""
        }`}
    >
      {children}
    </div>
  );
};

// Componente de área de soltar
interface DroppableSlotProps {
  id: string;
  children?: React.ReactNode;
  showResult?: boolean;
  isCorrect?: boolean;
}

const DroppableSlot: React.FC<DroppableSlotProps> = ({ 
  id, 
  children, 
  showResult, 
  isCorrect 
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  let shadowClass = "shadow-inner";
  let bgColor = "bg-blue-50";

  if (showResult && children) {
    shadowClass = "shadow-inner";
    bgColor = isCorrect ? "bg-green-100" : "bg-red-100";
  } else if (isOver) {
    shadowClass = "shadow-inner";
    bgColor = "bg-blue-50";
  } else if (children) {
    shadowClass = "shadow";
    bgColor = "bg-blue-100";
  }

  return (
    <div
      ref={setNodeRef}
      className={`inline-block min-w-[100px] px-3 py-2 mx-1 rounded-lg transition-all ${shadowClass} ${bgColor}`}
    >
      {children || <span className="text-gray-400">...</span>}
    </div>
  );
};

// Componente principal da questão
interface QuestionDragDropProps {
  moduleNow: number;
  slideNow: number;
  number: number;
  indicator?: number;
  text: Array<any>; // Texto da questão/enunciado
  exampleSentence?: string; // Frase exemplo (opcional)
  sentence: string; // Frase a ser completada com placeholders {0}, {1}, etc.
  options: { id: string; text: string }[];
  correctAnswers: { [key: string]: string }; // { "slot-0": "option-1" }
  feedbackArray: [string, string]; // [feedback quando acerta tudo, feedback quando erra algo]
  children?: React.ReactNode;
}

let showResultFlag = false;

export const QuestionDragDrop: React.FC<QuestionDragDropProps> = ({
  moduleNow,
  slideNow,
  number,
  indicator,
  text,
  exampleSentence,
  sentence,
  options,
  correctAnswers,
  feedbackArray,
  children,
}) => {
  const {
    questionArray,
    updateArray,
    questionAnsweredArray,
    updateQuestionAnsweredArray,
    showResult,
  } = useQuestionsContext();

  const [slots, setSlots] = useState<{ [key: string]: string }>({});
  const [usedCards, setUsedCards] = useState<Set<string>>(new Set());
  const useEffectFlag = useRef(0);

  // Conta quantos slots existem
  const totalSlots = Object.keys(correctAnswers).length;

  // Processa a frase e substitui placeholders por slots
  const renderSentence = (sentenceToRender: string, isExample: boolean = false) => {
    const parts = sentenceToRender.split(/(\{\d+\})/g);
    return parts.map((part, index) => {
      const match = part.match(/\{(\d+)\}/);
      if (match) {
        const slotIndex = parseInt(match[1]);
        const slotId = `slot-${slotIndex}`;
        
        if (isExample) {
          return (
            <span 
              key={index} 
              className="inline-block min-w-[100px] px-3 py-2 mx-1 bg-gray-100 rounded-lg shadow-sm"
            >
              <span className="text-gray-500">...</span>
            </span>
          );
        }
        
        const cardId = slots[slotId];
        const cardText = cardId ? options.find((opt) => opt.id === cardId)?.text : null;
        const isCorrect = cardId === correctAnswers[slotId];

        return (
          <span key={index}>
            <DroppableSlot 
              id={slotId} 
              showResult={showResult}
              isCorrect={isCorrect}
            >
              {cardText && (
                <span className="text-black font-medium">{cardText}</span>
              )}
            </DroppableSlot>
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const draggedCardId = active.id as string;
      const targetSlotId = over.id as string;

      // Remove o card do slot anterior se já estava em algum
      const previousSlot = Object.keys(slots).find(
        (key) => slots[key] === draggedCardId
      );
      if (previousSlot) {
        setSlots((prev) => {
          const newSlots = { ...prev };
          delete newSlots[previousSlot];
          return newSlots;
        });
      }

      // Remove o card que estava no slot de destino
      if (slots[targetSlotId]) {
        setUsedCards((prev) => {
          const newSet = new Set(prev);
          newSet.delete(slots[targetSlotId]);
          return newSet;
        });
      }

      // Adiciona o novo card ao slot
      const newSlots = {
        ...slots,
        [targetSlotId]: draggedCardId,
      };
      setSlots(newSlots);
      setUsedCards((prev) => new Set(prev).add(draggedCardId));

      // Salva no localStorage
      LocalStorageSave(newSlots);

      // Verifica se todas as respostas estão corretas
      checkAnswers(newSlots);
    }
  };

  const checkAnswers = (currentSlots: { [key: string]: string }) => {
    const allSlotsFilled = Object.keys(correctAnswers).every(
      (slotId) => currentSlots[slotId]
    );

    if (allSlotsFilled) {
      // Marca a questão como respondida
      let auxQuestionAnsweredArray = [...questionAnsweredArray];
      auxQuestionAnsweredArray[number - 1] = true;
      updateQuestionAnsweredArray(auxQuestionAnsweredArray);

      // Verifica se está tudo correto
      const allCorrect = Object.keys(correctAnswers).every(
        (slotId) => currentSlots[slotId] === correctAnswers[slotId]
      );

      if (allCorrect) {
        const auxArray = [...questionArray];
        const found = auxArray.find((tag) => tag === `${number}`);
        if (found === undefined) {
          auxArray.push(`${number}`);
          updateArray(auxArray);
        }
      } else {
        let auxArray = [...questionArray];
        auxArray = auxArray.filter((tag) => tag !== `${number}`);
        updateArray(auxArray);
      }
    }
  };

  const resetQuestion = () => {
    setSlots({});
    setUsedCards(new Set());
    localStorage.removeItem(
      `PRQuestionStorageDragDrop${moduleNow}${slideNow}${number}`
    );
  };

  function LocalStorageSave(currentSlots: { [key: string]: string }) {
    const key = `PRQuestionStorageDragDrop${moduleNow}${slideNow}${number}`;
    localStorage.setItem(key, JSON.stringify(currentSlots));
  }

  function LocalStorageLoad() {
    const key = `PRQuestionStorageDragDrop${moduleNow}${slideNow}${number}`;
    const storedData = localStorage.getItem(key);
    
    if (storedData) {
      const loadedSlots = JSON.parse(storedData) as { [key: string]: string };
      setSlots(loadedSlots);
      
      // Marca cards como usados
      const used = new Set<string>(Object.values(loadedSlots));
      setUsedCards(used);
      
      // Verifica respostas
      checkAnswers(loadedSlots);
    }
  }

  // Verifica se todas as respostas estão corretas
  const isAllCorrect = () => {
    return Object.keys(correctAnswers).every(
      (slotId) => slots[slotId] === correctAnswers[slotId]
    );
  };

  // Verifica se todos os slots estão preenchidos
  const isAllFilled = () => {
    return Object.keys(correctAnswers).every((slotId) => slots[slotId]);
  };

  useEffect(() => {
    if (useEffectFlag.current === 0) {
      setTimeout(() => {
        LocalStorageLoad();
      }, 10);
      useEffectFlag.current = 1;
    }
  }, []);

  useEffect(() => {
    if (showResult) {
      showResultFlag = true;
    }
  }, [showResult]);

  return (
    <div className="question-main">
      {children}
      <div className="question mt-3">
        <div className="question-titleAndAdvice">
          <div>
            {text.map((paragraph, index) => {
              return (
                <p key={index} className="question-text">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        <div className="answersDiv">
          {/* Frase exemplo (opcional) */}
          {exampleSentence && (
            <div className="mb-6 flex justify-center items-center">
              <p className="text-xl leading-relaxed text-center">{renderSentence(exampleSentence, true)}</p>
            </div>
          )}

          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            {/* Área com cards para arrastar */}
            <div className="mb-8 items-center">
              <div className="flex flex-wrap gap-3 justify-center">
                {options.map((option) => (
                  <DraggableCard
                    key={option.id}
                    id={option.id}
                    isUsed={usedCards.has(option.id)}
                  >
                    {option.text}
                  </DraggableCard>
                ))}
              </div>
            </div>

            {/* Frase com slots para soltar */}
            <div className="mb-6 items-center">
              <div className="w-full h-px mb-3" style={{ backgroundColor: '#4A90E2' }} />
              <div className="flex justify-center items-center p-6">
                <p className="text-lg leading-relaxed text-center">{renderSentence(sentence)}</p>
              </div>
              <div className="w-full h-px mt-3" style={{ backgroundColor: '#4A90E2' }} />
            </div>
          </DndContext>

          {/* Feedback geral (exibido apenas com showResult) */}
          {showResult && isAllFilled() && (
            <div
              className={`w-full p-4 rounded-lg ${
                isAllCorrect()
                  ? "bg-[#93EABA] text-black border-2 border-black"
                  : "bg-[#FFF394] text-black border-2 border-black"
              }`}
            >
              <p>{isAllCorrect() ? feedbackArray[0] : feedbackArray[1]}</p>
            </div>
          )}

          {/* Botão de reset (apenas se não estiver em showResult) */}
          {!showResult && (
            <button
              onClick={resetQuestion}
              className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Reiniciar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDragDrop;
