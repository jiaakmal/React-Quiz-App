import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Questions({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswers,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeOut={onSkipAnswers} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
