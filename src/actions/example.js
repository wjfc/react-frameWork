/**
 * Created by Administrator on 2017/4/4.
 */
// createAction 生成action的纯函数
import { createAction } from 'redux-actions'

export const getExampleRequested = createAction('example/GET_REQUESTED')
export const getExampleSucceeded = createAction('example/GET_SUCCEEDED')
export const getExampleFailed = createAction('example/GET_FAILED')


