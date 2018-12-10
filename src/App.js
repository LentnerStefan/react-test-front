import React, { Component } from "react";
import { LargeLoader, Typography, Button, Highlight } from "@ornikar/kitt";
import "./App.css";

// Series content can be fetched at:
// import('./data.json');
// import: Promise<{ default: Serie }>

// kitt storybook: https://kitt.ornikar.com

// <img src={`https://onkmedia.blob.core.windows.net/questions/1266/${currentQuestion.question_image_1}.jpg`} />

const Loader = () => (
  <div className="loader">
    <LargeLoader />
  </div>
);

export default class OrnikarTest extends Component {
  render() {
    return (
      <Typography.div base="body" className="App">
        <Loader />
      </Typography.div>
    );
  }
}
