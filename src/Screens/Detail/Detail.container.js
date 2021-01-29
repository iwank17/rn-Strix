import {connect} from 'react-redux';
import DetailScreen from './Detail.screen.component';
import {setData} from './Detail.action';

const mapStateToProps = (state) => ({
  person: state.detail_store.person,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);