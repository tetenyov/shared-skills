import React, { FormEventHandler } from "react";
import { Question } from "../constants";

export type TestFormProps = {
  onChange: FormEventHandler<HTMLFormElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  testQuestion: Question;
};

export const TestForm = ({
  onChange,
  onSubmit,
  testQuestion,
}: TestFormProps) => {
  const { question, questionId, variants } = testQuestion;

  return (
    <form action="" onSubmit={onSubmit} onChange={onChange}>
      <h4>{question}</h4>
      <div>
        {variants?.map(({ id, variant }) => {
          return (
            <p key={id}>
              <input
                type="radio"
                id={`${questionId}${id}`}
                name={questionId}
                value={id}
              />
              <label htmlFor={`${questionId}${id}`}>{variant}</label>
            </p>
          );
        })}
      </div>
      <button type="submit">Complete test</button>
    </form>
  );
};
