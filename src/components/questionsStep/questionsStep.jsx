import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { Button } from '@ornikar/kitt';
// <img src={`https://assets.barnsdale.org/onkmedia/questions/1266/${question.question_image_1}.jpg`} />

const questionMapper = (question) => ({
  question: [question.question_1, question.question_2],
  thumbs: [question.question_image_1, question.question_image_2],
  answers: [
    { key: 'a', value: question.answer_a },
    { key: 'b', value: question.answer_b },
    { key: 'c', value: question.answer_c },
    { key: 'd', value: question.answer_d },
  ],
});

// Selectionné : <Button type="primary">...</Button/>
// Non-Selectionné : <Button type="tertiary">...</Button/>

export const QuestionStep = ({ question, onClick }) => {
  const questionData = useMemo(() => questionMapper(question), [question]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, updateAnswers] = useState(
    questionData.answers.filter((v) => v.value),
    [questionData],
  );

  const [selectedAnswers, updateSelectedAnswers] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });

  const handleClick = useCallback(onClick, [onClick]);

  const checkIfanswered = () => {
    for (const key in answers) {
      if (answers.hasOwnProperty(key) && answers[key] === true) {
        setIsAnswered(true);
        return;
      }
    }
    setIsAnswered(false);
  };
  useEffect(checkIfanswered, [selectedAnswers]);
  const onAnswerClick = (key) => {
    updateSelectedAnswers((values) => {
      return {
        ...values,
        [key]: !values[key],
      };
    });
  };
  return (
    <div className="questionBox">
      <img
        src={`https://assets.barnsdale.org/onkmedia/questions/1266/${
          questionData.thumbs[0]
        }.jpg`}
      />
      <h2 className="questionTitle">{questionData.question[0]}</h2>
      <div>
        {answers.map(({ value, key }) => (
          <div key={key}>
            <Button
              type={selectedAnswers[key] ? 'primary' : 'tertiary'}
              onClick={() => onAnswerClick(key)}
            >
              {key}
            </Button>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <Button onClick={handleClick} disabled={!isAnswered}>
        Valider
      </Button>
    </div>
  );
};
export default QuestionStep;
