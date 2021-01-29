import {combineReducers} from 'redux';
import {home_store} from '../Screens/Home/Home.reducer';
import {detail_store} from '../Screens/Detail/Detail.reducer';

export default combineReducers({
  home_store,
  detail_store,
});