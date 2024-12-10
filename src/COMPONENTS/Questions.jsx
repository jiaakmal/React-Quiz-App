import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from '../questions'
export default function Questions({
  key,
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswers,
}) {
  [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  const handleSelectAnswer = (answer) => {
    setAnswer({ selectedAnswer: answer, isCorrect: null });
  };
  setTimeout(() => {
    setAnswer({ selectedAnswer: answer, isCorrect: QUESTIONS[key].answers[0] === answer });

  }, 1000);
  let answerState = '';
  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? 'correct' : 'wrong'
  }
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeOut={onSkipAnswers} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
