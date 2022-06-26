type Variant = {
  variantNumber: number;
  variant: string;
};
export type Question = {
  question: string;
  questionNumber: number;
  variants: Variant[];
  correctVariant: string;
  isLast: boolean;
};

export const weldingTest = new Map<string | string[] | undefined, Question>();
weldingTest
  .set("1", {
    question: "Which of the following is an advantage of MIG welding?",
    questionNumber: 1,
    variants: [
      {
        variantNumber: 1,
        variant: "It works well in the wind",
      },
      {
        variantNumber: 2,
        variant: "You can safely weld in wet conditions with it",
      },
      {
        variantNumber: 3,
        variant: "It takes less operator skill than other weld types",
      },
      {
        variantNumber: 4,
        variant: "It is slow and accurate which is good for very thin metal",
      },
    ],
    correctVariant: "3",
    isLast: false,
  })
  .set("2", {
    question: "What treatment is recommended after welding stainless steel?",
    questionNumber: 2,
    variants: [
      {
        variantNumber: 1,
        variant: "No treatment required for stainless",
      },
      {
        variantNumber: 2,
        variant: "Apply pickling paste",
      },
      {
        variantNumber: 3,
        variant: "Quench in water to remove oxvariantNumberes",
      },
      {
        variantNumber: 4,
        variant: "Oil to stop rust",
      },
    ],
    correctVariant: "2",
    isLast: true,
  });
