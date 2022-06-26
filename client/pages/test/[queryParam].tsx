import React, { useState, ReactNode } from "react";
import {
  CommonLayout,
  TestQuestion,
  TestQuestionProps,
  TestResultSubmitForm,
  TestResultSubmitFormProps,
} from "../../components";
import { weldingTest } from "../../constants";
import { useRouter } from "next/router";

export type Answers = Record<string, boolean>;
export default function TestPage() {
  const [answers, setAnswers] = useState<Answers>({});

  const { query } = useRouter();
  const { queryParam } = query;
  const isSubmitResultPage = queryParam === "submit";
  const question = !isSubmitResultPage && weldingTest.get(queryParam);

  const handleAnswer: TestQuestionProps["onChange"] = (evt) => {
    if (evt.target instanceof HTMLInputElement) {
      const answer = evt.target.value;
      const isCorrect =
        answer === weldingTest.get(evt.target.name)?.correctVariant;
      console.log(answer);
      console.log(weldingTest.get(evt.target.name)?.correctVariant);

      setAnswers({
        ...answers,
        [evt.target.name]: isCorrect,
      });
    }
  };

  const handleTestResultSubmit: TestResultSubmitFormProps["onSubmit"] = (
    evt
  ) => {
    evt.preventDefault();
  };

  if (!question && !isSubmitResultPage) {
    return <div>Some error UI</div>;
  }

  return (
    <>
      {isSubmitResultPage && (
        <TestResultSubmitForm
          onSubmit={handleTestResultSubmit}
          answers={answers}
        />
      )}
      {question && (
        <TestQuestion onChange={handleAnswer} testQuestion={question} />
      )}
    </>
  );
}

TestPage.getLayout = function getLayout(page: ReactNode): ReactNode {
  return <CommonLayout>{page}</CommonLayout>;
};
