import type { Kana } from "../../hooks";
import type { ReducerHandler } from "../../types";

type CardsDealerReducerState = {
    count: number,
    kanasList: Kana[],
};
type CardsDealerReducerEvents = {
    'add-kana': {newKana: Kana};
    'remove-first-kana': undefined;
};

export const cardDealerReducer: ReducerHandler<CardsDealerReducerState, CardsDealerReducerEvents> = (state, event) => {
    switch (event.type) {
        case 'add-kana':
            return {
                count: state.count+1,
                kanasList: [...state.kanasList, event.data.newKana],
            };
        case 'remove-first-kana':
            return {
                count: state.count,
                kanasList: state.kanasList.slice(1),
            };
    }
}