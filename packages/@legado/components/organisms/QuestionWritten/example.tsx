import { QuestionWritten } from "components/organisms/QuestionWritten";

export default function ExamplePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Exemplo de Questão Dissertativa
      </h1>

      {/* Exemplo conforme a imagem fornecida */}
      <QuestionWritten
        number={1}
        indicator={1}
        moduleNow={5}
        slideNow={16}
        text={[
          "Com base nesta aula, complete a frase abaixo:"
        ]}
        answersContent={[
          "A base da avaliação é um bom processo de",
          ", que permite a",
          "de dados e a",
          "."
        ]}
        correctAnswer={[
          "coleta",
          "análise",
          "interpretação"
        ]}
        feedbackContent={[
          "Perfeito! A coleta de dados é a base do processo avaliativo.",
          "Excelente! A análise dos dados coletados é fundamental.",
          "Muito bem! A interpretação completa o ciclo de avaliação."
        ]}
      />
    </div>
  );
}
