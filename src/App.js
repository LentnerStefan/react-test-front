import { LargeLoader, Typography } from '@ornikar/kitt';
import React, { useEffect, useState } from 'react';
import QuestionStep from './components/questionsStep/questionsStep';
import './App.css';

// Series content can be fetched with:
// import('./data.json');
// import(file: string): Promise<{ default: Serie }>

// kitt storybook: http://kitt.ornikar.com

// <img src={`https://assets.barnsdale.org/onkmedia/questions/1266/${question.question_image_1}.jpg`} />

const Loader = () => (
  <div className="loader">
    <LargeLoader />
  </div>
);

/* version classes */
// export default class OrnikarTest extends Component {
//   render() {
//     return (
//       <Typography.div base="body" className="App">
//         <Loader />
//       </Typography.div>
//     );
//   }
// }

/* version hooks */

export default function OrnikarTest() {
  const [questionsData, setQuestionsData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const loadData = async () => {
    const data = await import('./data.json');
    console.log(data.default);
    setQuestionsData(data.default);
    setLoaded(true);
  };
  const onValid = (e) => {
    setCurrentQuestion((current) => current + 1);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Typography.div base="body" className="App">
      {isLoaded ? (
        <QuestionStep
          question={questionsData[currentQuestion]}
          onClick={onValid}
        />
      ) : (
        <Loader />
      )}
    </Typography.div>
  );
}
