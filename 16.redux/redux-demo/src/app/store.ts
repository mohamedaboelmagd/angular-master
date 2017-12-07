import { tassign } from 'tassign';
import { IAppState } from './store';
import { INCREMENT } from './actions';
export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0
};
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT:
            // return Object.assign( {}, state, { counter: state.counter + 1, isOnline: true } );
            return tassign(state, { counter: state.counter + 1 });
            // return { counter: state.counter + 1 };
    }
    return state;
}