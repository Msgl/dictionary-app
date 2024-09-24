/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import playIcon from '../assets/images/icon-play.svg';
import linkIcon from '../assets/images/icon-link.svg';

// Defining the Results component
export default function Results(props) {
  // Extracting data from props

  const data = props.data;
  console.log(data);

  //Get the word

  const heading = data[0].word;

  //Get the source

  const source = data[0].sourceUrls[0];

  //Get the phonetic

  const phonetic = data[0].phonetic;

  //Get audio mp3
  const audio = getAudio(data);
  function getAudio(data) {
    const audio = [];
    for (const key in data) {
      if ((key === 'audio') & (data[key] !== '')) {
        audio.push(data[key]);
      } else if (typeof data[key] === 'object') {
        audio.push(...getAudio(data[key]));
      }
    }
    return audio;
  }
  // console.log(audio);

  const mp3 = audio[0];

  //Get the meaning
  const meanings = getMeanings(data);
  function getMeanings(data) {
    const meanings = [];
    for (const key in data) {
      if (key === 'meanings') {
        meanings.push(data[key]);
      } else if (typeof data[key] === 'object') {
        meanings.push(...getMeanings(data[key]));
      }
    }
    return meanings;
  }

  // Function to play MP3 audio
  function playMP3() {
    document.getElementById('audio').play();
  }

  // Rendering the Results component
  return (
    <div className='results'>
      <div className='heading'>
        <div>
          <h1>{heading}</h1>
          <p className='phonetic'>{phonetic}</p>
        </div>

        {/* Audio player -  Conditional Rendering using && operator*/}
        {mp3 && mp3.length > 0 && (
          <div className='audio'>
            <audio id='audio' src={mp3}></audio>
            <button className='audio-button' onClick={playMP3}>
              {/* Play icon */}
              <img
                src={playIcon}
                width='48'
                height='48'
                alt='play button icon'
              />
            </button>
          </div>
        )}
      </div>

      <div className='meaning'>
        {/* Mapping through meanings */}
        {meanings[0].map((data, id) => (
          <div key={id}>
            <h2>{data.partOfSpeech}</h2>
            <p className='subtitle'>Meaning:</p>
            <ul>
              {/* Mapping through definitions */}
              {data.definitions.map((definitions, i) => (
                <li key={i}>
                  {definitions.definition}
                  {/* Check if example is defined */}
                  {definitions.example ? (
                    <ul className='example'>
                      {/* Example */}
                      <li>"{definitions.example}"</li>
                    </ul>
                  ) : (
                    ''
                  )}
                </li>
              ))}
            </ul>
            {/* Synonyms -  Conditional Rendering using && operator */}
            {data.synonyms && data.synonyms.length > 0 && (
              <div className='synonym-wrapper'>
                <p className='subtitle'>Synonyms</p>
                <p className='synonyms'>{data.synonyms.join(', ')}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div></div>
      {/* Source */}
      <div className='source'>
        <h3>Source</h3>
        <div>
          <a href={source} target='_blank' rel='noreferrer'>
            {source}
            <img src={linkIcon} width='14' height='14' alt='link icon' />
          </a>
        </div>
      </div>
    </div>
  );
}
