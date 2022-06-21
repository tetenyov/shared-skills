type Variant = {
  id: string;
  variant: string;
};
export type Question = {
  question: string;
  questionId: string;
  variants: Variant[];
  correctVariant: string;
};

export const weldingTest = new Map<string | string[], Question>();
weldingTest.set("1", {
  question: "Which of the following is an advantage of MIG welding?",
  questionId: "advantageOfMIG",
  variants: [
    {
      id: "1",
      variant: "It works well in the wind",
    },
    {
      id: "2",
      variant: "You can safely weld in wet conditions with it",
    },
    {
      id: "3",
      variant: "It takes less operator skill than other weld types",
    },
    {
      id: "4",
      variant: "It is slow and accurate which is good for very thin metal",
    },
  ],
  correctVariant: "3",
});
