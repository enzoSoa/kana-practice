import { useState, type ChangeEventHandler, type FormEvent } from 'react';
import { HoverEffect } from '..';
import './Card.css';

type CardProps = {
  kata: string;
  target: string;
	onGoodGuess: () => void;
}

export function Card({kata, target, onGoodGuess}: CardProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isGuessed, setIsGuessed] = useState<boolean>(false);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if(inputValue === target) {
			setIsGuessed(true);
			onGoodGuess();
		}
	}

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setInputValue(event.currentTarget.value.trim());
	}

  return (
    <div className={`card ${isGuessed ?'card--completed':''}`}> 
      <HoverEffect/>
      <form 
        className='card__form'
        onSubmit={handleSubmit}
      >
        <span className='card__kana'>
          {kata}
        </span>
        <div className='card__footer'>
          <input 
            className='card__input'
            maxLength={3}
            onChange={handleInputChange}
          />
          <span className='card__label'>
            romaji ?
          </span>
        </div>
      </form>
    </div>
  )
}