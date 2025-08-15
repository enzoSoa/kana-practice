import { useState, useReducer } from 'react'
import { Card } from './components'
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
  const [{selectedIndex}, dispatch] = useReducer(randomIndexSelector, {selectedIndex:Math.floor(Math.random()*hiraganas.length)});

  return <Card kata={hiraganas[selectedIndex]} target={hiraganaToRomanji[hiraganas[selectedIndex]]} onGoodGuess={() => setTimeout(() => dispatch('randomizeIndex'), 300)}/>
}

export default App
