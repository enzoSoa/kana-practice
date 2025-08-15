import { useReducer } from 'react'
import { Card } from './components'
import { useRandomKana } from './hooks';
import './App.css'


function App() {
  const {hiraganaToRomanji, getRandomKana} = useRandomKana();
  const [kanaList, dispatch] = useReducer((state, data) => {
    switch (data) {
      case 'add-kana':
        return [...state, getRandomKana()];
      case 'remove-first-kana':
        return state.slice(1)
    }
  }, [getRandomKana()]);

  const handleGoodGuess = () => {
    dispatch('add-kana');
    setTimeout(() => dispatch('remove-first-kana'), 300);
  }

  return <div className='app'>
    {kanaList.map(kana => 
      <Card key={kana} kana={kana} target={hiraganaToRomanji[kana]} onGoodGuess={handleGoodGuess}/>
    )}
  </div>
}

export default App
