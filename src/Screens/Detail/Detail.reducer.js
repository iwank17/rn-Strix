import type {ActionDefaultProp} from '../../Types/DefaultTypes';
import {SETTER_DATA} from '../../Redux';

type State = {
    person : {
      nama: string,
      age: number, 
    },
};

const initialState: State = {
    person: {
      name: '',
      age: 0, 
    },
};

export const detail_store = (state = initialState, action: ActionDefaultProp) => {
  switch (action.type) {
    case SETTER_DATA:
      return {
        ...state,
        person: action.payload,
      };
    default:
      return {...state};
  }
};