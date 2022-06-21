import React, { useState, ReactNode } from "react";
import { CommonLayout, TestForm, TestFormProps } from "../../components";
import { weldingTest } from "../../constants";
import { useRouter } from "next/router";

export default function TestPage() {
  const [answerVariants, setAnswerVariants] = useState({
    advantageOfMIG: "",
  });
  const { query } = useRouter();
  const { questionNumber } = query;
  const question = questionNumber && weldingTest.get(questionNumber);

  const handleTestFormChange: TestFormProps["onChange"] = (evt) => {
    if (evt.target instanceof HTMLInputElement) {
      setAnswerVariants({
        ...answerVariants,
        [evt.target.name]: evt.target.value,
      });
    }
  };

  const handleTestFormSubmit: TestFormProps["onSubmit"] = (evt) => {
    evt.preventDefault();
  };

  if (!question) {
    return <div>Some UI when there is no question</div>;
  }

  return (
    <TestForm
      onChange={handleTestFormChange}
      onSubmit={handleTestFormSubmit}
      testQuestion={question}
    />
  );
}

TestPage.getLayout = function getLayout(page: ReactNode): ReactNode {
  return <CommonLayout>{page}</CommonLayout>;
};
