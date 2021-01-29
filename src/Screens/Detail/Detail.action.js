import {SETTER_DATA} from '../../Redux';

const setData = (data) => (dispatch) => {
  dispatch({
    type: SETTER_DATA,
    payload: data,
  });
};

export {setData};