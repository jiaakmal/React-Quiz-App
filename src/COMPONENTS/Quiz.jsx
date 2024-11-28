import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [answerState , setAnswerState] = useState('')
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const activeQuestionIndex = answerState === ''? userAnswer.length : userAnswer.length - 1
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setAnswerState('answered');
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
      setTimeout(() => {
        if(selectedAnswer == QUESTIONS[activeQuestionIndex].answers[0]){
          setAnswerState('correct');
        }
        else
        {setAnswerState('wrong');}
        
      }, 1000);
      setTimeout(() => {
        setAnswerState('');
        
      }, 2000);
  },
  [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            let cssClass = '';
            const isSelected = userAnswer[userAnswer.length-1] === answer
            if(answerState === 'answered' && isSelected){
              cssClass = 'selected'
            }

            return   <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>
              {answer}
            </button>
          </li>

          }
          )}
        </ul>
      </div>
    </div>
  );
}
