import { useMemo, useState } from 'react'
import { Card } from './components'
import { useRandomKana } from './hooks';
import './App.css'



function App() {
  const {hiraganaToRomanji, getRandomKana} = useRandomKana();
  const [currentKana, setCurrentKana] = useState(getRandomKana());
  const targetRomaji = useMemo(() => hiraganaToRomanji[currentKana], [currentKana, hiraganaToRomanji])

  return <Card kana={currentKana} target={targetRomaji} onGoodGuess={() => setTimeout(() => setCurrentKana(getRandomKana()), 300)}/>
}

export default App
