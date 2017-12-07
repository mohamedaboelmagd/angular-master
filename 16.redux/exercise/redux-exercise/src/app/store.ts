import { ADDED_ITEM, UPDATED_ITEM, REMOVED_ITEM } from './actions';
import { tassign } from 'tassign';
export interface AppState {
    numberOfItems: number;
    timeOfUpdated: string;
}

export const INITIAL_STATE = {
    numberOfItems: 0,
    timeOfUpdated: ''
};

export function rootReducer(state: AppState, action): AppState {
    switch (action.type) {
        case ADDED_ITEM: return tassign(state, { numberOfItems: state.numberOfItems + 1, timeOfUpdated: new Date().toDateString() } );
        case UPDATED_ITEM: return tassign(state, { timeOfUpdated: new Date().toDateString() } );
        case REMOVED_ITEM: return tassign(state, { numberOfItems: state.numberOfItems - 1 } );
    }
    return state;
}