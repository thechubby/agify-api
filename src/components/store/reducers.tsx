import { ACTION_CHANGE_INPUT } from "../Agify";

interface StateInterface {
    input: string
}

const initialState: StateInterface = {
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