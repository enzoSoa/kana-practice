import { useReducer } from 'react'
import { Card } from '..'
import { useRandomKana } from '../../hooks';
import './CardDealer.css'
import { cardDealerReducer } from './reducer';


export function CardDealer() {
    const {hiraganaToRomanji, getRandomKana} = useRandomKana();
    const [{count, kanasList}, dispatch] = useReducer(
        cardDealerReducer, 
        {
            count: 1,
            kanasList: [getRandomKana()],
        },
    );

    const handleGoodGuess = () => {
        dispatch({ type: 'add-kana', data: {newKana: getRandomKana()}});
        setTimeout(() => dispatch({type: 'remove-first-kana', data: undefined}), 300);
    }

    return <div className='card-dealer'>
        {kanasList.map((kana, index) => 
            <Card 
                key={`${count - (kanasList.length - index) + 1}-${kana}`} 
                kana={kana} 
                target={hiraganaToRomanji[kana]} 
                onGoodGuess={handleGoodGuess}
            />
        )}
    </div>
}