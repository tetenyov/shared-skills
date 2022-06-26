import React, { useEffect, FormEventHandler, useRef } from "react";
import Link from "next/link";
import { Question } from "../constants";

export type TestQuestionProps = {
  onChange: FormEventHandler<HTMLFormElement>;
  testQuestion: Question;
};

export const TestQuestion = ({ onChange, testQuestion }: TestQuestionProps) => {
  const { question, questionNumber, variants, isLast } = testQuestion;
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef?.current) {
      formRef.current.reset();
    }
  }, [testQuestion]);

  const href = `/test/${isLast ? "submit" : `${questionNumber + 1}`}`;

  return (
    <form ref={formRef} onChange={onChange}>
      <h4>{question}</h4>
      <div>
        {variants?.map(({ variantNumber, variant }) => {
          const inputId = `${variant}${variantNumber}`;

          return (
            <p key={variantNumber}>
              <input
                type="radio"
                id={inputId}
                name={String(questionNumber)}
                value={String(variantNumber)}
              />
              <label htmlFor={inputId}>{variant}</label>
            </p>
          );
        })}
      </div>
      <Link href={href}>{isLast ? "Finish test" : "Next question"}</Link>
    </form>
  );
};
