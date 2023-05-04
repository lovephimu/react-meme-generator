import './index.css';
import React, { useState } from 'react';

export default function MemeGenerator() {
  const baseUrl = 'https://api.memegen.link/images';

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  function handleSubmit() {
    setImgSrc(
      `${baseUrl.toLowerCase()}/${template.toLowerCase()}/${topText.toLowerCase()}/${bottomText.toLowerCase()}.gif`,
    );
  }

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
          <label htmlFor="bottom">Bottom text</label>
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
        {/* TEMPLATE INPUT */}
        <div className="placeHolderBox">
          <label htmlFor="template">Meme Template</label>
        </div>

        <input
          id="template"
          placeholder="buzz"
          className="inputExtra"
          value={template}
          onChange={(event) => setTemplate(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
      </div>

      {/* GENERATE BUTTON */}
      <button
        className="extraButton"
        data-test-id="generate-meme"
        onClick={() => {
          handleSubmit();
        }}
      >
        Generate meme &#x1F92A;
      </button>
      {/* START IMAGE */}
      <img
        data-test-id="meme-image"
        src={
          imgSrc
            ? imgSrc
            : "https://api.memegen.link/images/buzz/what's_with_all_the/meme_generators.gif"
        }
        alt="your meme"
      />
      <p>voilà</p>
      {/* DOWNLOAD BUTTON */}
      <button className="extraButton" data-test-id="generate-meme">
        Download meme &#x1F929;
      </button>
      <pre>{!imgSrc ? ' ' : `from: ${imgSrc}`}</pre>
    </div>
  );
}

// useEffect(() => {
//   async function fetchData() {
//     // GET request using fetch inside useEffect React hook
//     await fetch('https://api.npms.io/v2/search?q=react').then((response) =>
//       response.json(),
//     );
//   }
