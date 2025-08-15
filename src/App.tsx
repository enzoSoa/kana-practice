import { useState, useReducer } from 'react'
import './App.css'

const hiraganaToRomanji = {
  'あ': 'a',
  'い': 'i',
  'う': 'u',
  'え': 'e',
  'お': 'o',
  'か': 'ka',
  'き': 'ki',
  'く': 'ku',
  'け': 'ke',
  'こ': 'ko',
  'さ': 'sa',
  'し': 'shi',
  'す': 'su',
  'せ': 'se',
  'そ': 'so',
  'た': 'ta',
  'ち': 'chi',
  'つ': 'tsu',
  'て': 'te',
  'と': 'to',
  'な': 'na',
  'に': 'ni',
  'ぬ': 'nu',
  'ね': 'ne',
  'の': 'no',
  'ん': 'n',
  'は': 'ha',
  'ひ': 'hi',
  'ふ': 'fu',
  'へ': 'he',
  'ほ': 'ho',
  'ま': 'ma',
  'み': 'mi',
  'む': 'mu',
  'め': 'me',
  'も': 'mo',
  'や': 'ya',
  'ゆ': 'ya',
  'よ': 'yo',
  'ら': 'ra',
  'り': 'ri',
  'る': 'ru',
  'れ': 're',
  'ろ': 'ro',
}
const hiraganas = Object.keys(hiraganaToRomanji);

function randomIndexSelector(_, dispatchedEvent) {
  switch(dispatchedEvent) {
    case 'randomizeIndex':
      return {selectedIndex: Math.floor(Math.random()*hiraganas.length)};
    default:
      return {selectedIndex: 0};
  }
}

function App() {
  const [kana, setKana] = useState<string>('');
  const [{selectedIndex}, dispatch] = useReducer(randomIndexSelector, {selectedIndex:Math.floor(Math.random()*hiraganas.length)});


  return (
    <div className='question-card'> 
      <div className='question-card__hover-detector'>
        <div className='question-card__hover-detector__top-left'/>
        <div className='question-card__hover-detector__top'/>
        <div className='question-card__hover-detector__top-right'/>
        <div className='question-card__hover-detector__left'/>
        <div/>
        <div className='question-card__hover-detector__right'/>
        <div className='question-card__hover-detector__bottom-left'/>
        <div className='question-card__hover-detector__bottom'/>
        <div className='question-card__hover-detector__bottom-right'/>
      </div>
      <form 
        className='question-card__form'
        onSubmit={(e) => {
          e.preventDefault();
          if(kana === hiraganaToRomanji[hiraganas[selectedIndex]])
          dispatch('randomizeIndex')
        }}
      >
        <span className='question-card__kana'>
          {hiraganas[selectedIndex]}
        </span>
        <div className='question-card__footer'>
          <input 
            className='question-card__input'
            maxLength={3}
            onChange={(v) => setKana(v.currentTarget.value)}
          />
          <span className='question-card__label'>
            romaji ?
          </span>
        </div>
      </form>
    </div>
  )
}

export default App
