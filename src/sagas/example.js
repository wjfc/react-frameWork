/**
 * Created by Administrator on 2017/4/4.
 */
import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import * as actions from '../actions/example';
function getBalanceDate (data) {
  if(data.username === 'jww') {
    return {
      code: 0,
      data: {
        name: 'an example for react',
        time: new Date().toLocaleString()
      }
      }
  }else {
    return {
      code: 1,
      data: {
        msg: 'error'
      }
    }
  }
  
}
function* getExample(action) {
  // 这里的action即是requested的信息
  // console.log(action)
  try {
    // 这里将是替换后端接口的地方
    const info = yield call(getBalanceDate,action.payload);
     yield put(actions.getExampleSucceeded(info.data))
  }
  catch (e) {
    yield put(actions.getExampleFailed(e))
  }
}
export default function* exampleSaga () {
  yield* takeEvery(String(actions.getExampleRequested), getExample);
}