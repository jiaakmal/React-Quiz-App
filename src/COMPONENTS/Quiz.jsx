import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([0]);
  const activeQuestionIndex = userAnswer.length;

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
    </div>
  );
}
