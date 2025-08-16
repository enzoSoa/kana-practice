import { useState } from "react";

export function useDebouncedState<T>(initialValue: T, debounceTime: number): [T, (newValue: T) => void] {
    const debounceTimeoutsList: number[] = [];
    const [currentValue, setCurrentValue] = useState<T>(initialValue);

    const changeCurrentValue = (newValue: T) => {
        debounceTimeoutsList.forEach(() => clearTimeout(debounceTimeoutsList.pop()));
        setCurrentValue(newValue);
        debounceTimeoutsList.push(setTimeout(() => setCurrentValue(initialValue), debounceTime))
    };

    return [currentValue, changeCurrentValue];
}