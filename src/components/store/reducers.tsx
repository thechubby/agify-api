import { ACTION_CHANGE_INPUT } from "../Agify";

let initialState = {
    input: ''
};

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_CHANGE_INPUT:
            return {
                ...state, input: action.payload
            }
    }
    return state;
};