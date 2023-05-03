import './index.css';
import React, { useState } from 'react';

export default function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <div className="wrapper">
      <h1 className="title">React Meme Generator</h1>
      {/* USER INPUT */}
      <div className="structureBox">
        {/* LABELS */}
        <div className="placeHolderBox">
          <label htmlFor="top">Top text</label>
        </div>
        <div className="placeHolderBox">
          <label htmlFor="top">Bottom text</label>
        </div>
        {/* TOP AND BOTTOM TEXT */}
        <input
          id="top"
          placeholder="what's with all the"
          className="input"
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
        <input
          id="bottom"
          placeholder="meme generators"
          value={bottomText}
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
      </div>
      {/* GENERATE BUTTON */}
      <button className="extraButton" data-test-id="generate-meme">
        Generate meme &#x1F92A;
      </button>
      {/* START IMAGE */}
      <img src="./logo.svg" alt="your meme" />
      {/* DOWNLOAD BUTTON */}
      <button className="extraButton" data-test-id="generate-meme">
        Download meme &#x1F929;
      </button>
    </div>
  );
}
