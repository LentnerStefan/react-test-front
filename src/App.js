import { LargeLoader, Typography } from '@ornikar/kitt';
import React, { Component } from 'react';
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
export default class OrnikarTest extends Component {
  render() {
    return (
      <Typography.div base="body" className="App">
        <Loader />
      </Typography.div>
    );
  }
}

/* version hooks */

// export default function OrnikarTest() {
//   return (
//     <Typography.div base="body" className="App">
//       <Loader />
//     </Typography.div>
//   );
// }
