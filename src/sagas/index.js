/**
 * Created by Administrator on 2017/4/4.
 */
import { fork } from 'redux-saga/effects';
import exampleSaga from './example';
export default function* rootSaga () {
  yield [
    fork(exampleSaga)
  ]
}