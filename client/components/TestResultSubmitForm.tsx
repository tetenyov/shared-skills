import React, { FormEventHandler } from "react";
import { Answers } from "../pages/test";

export type TestResultSubmitFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  answers: Answers;
};

export const TestResultSubmitForm = ({
  onSubmit,
  answers,
}: TestResultSubmitFormProps) => {
  const testResult = calculateScore(answers);

  return (
    <form onSubmit={onSubmit}>
      <p>You've scored {testResult}&nbsp;points</p>
      <p>Upload you result to&nbsp;the blockchain for 0.1eth</p>
      <div>
        <input type="text" placeholder="Your wallet address 0x..." />
        <button type="submit">Upload</button>
      </div>
    </form>
  );
};

const calculateScore = (testAnswers: Answers): number => {
  const answers = Object.entries(testAnswers);
  const correctAnswersQty = answers.reduce(
    (qty, answer) => qty + Number(answer[1]),
    0
  );
  return Math.round((100 / answers.length) * correctAnswersQty);
};
