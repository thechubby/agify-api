import { ACTION_CHANGE_INPUT } from '../Agify';

export const changeInput = (newInput: string) :object => {
    return {
        type: ACTION_CHANGE_INPUT,
        payload: newInput
    }
}