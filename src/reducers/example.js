/**
 * Created by Administrator on 2017/4/4.
 */
import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import * as actions from '../actions/example';
const initialState = Immutable.fromJS({
  data: {
  },
  loading: false,
  loaded: false
});
/* reducer */
var hd = handleActions({
  [actions.getExampleRequested] (state, action) {
    return state.set('loading',true)
  },
  [actions.getExampleSucceeded] (state, action) {
    return state.set('loaded',true).update('data',v => v.merge(Immutable.fromJS(action.payload)));

  },
}, initialState);
export default hd;