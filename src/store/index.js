/**
 * Created by Administrator on 2017/4/4.
 */
import {createStore, applyMiddleware} from 'redux';
// redux-saga (异步action) 主要负责匹配到action，然后调用相应方法，将这个action发起到store上。
// createSagaMiddleware： 将sagas和redux的store建立连接。
import createSagaMiddleware, {END} from 'redux-saga';
import rootReducer from '../reducers/index'
export default function configure (initialState) {
  // createStore,函数接受另一个函数（reducer）作为参数，返回新生成的 Store 对象。
  const create = (typeof window !== 'undefined' && window.devToolsExtension)
    ? window.devToolsExtension()(createStore)
    : createStore;
  const sagaMiddleware = createSagaMiddleware();
  // applyMiddleware 这个api用来加载自定义中间件。applyMiddleware返回值是一个函数，这个函数接收的参数为createStore
  // createStoreWithMiddleware已经加载了sagas中间件的createStore函数。
  const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(create)
  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    /* 热加载 */
    module.hot.accept('../reducers/index', () => {
      store.replaceReducer(require('../reducers/index'))
    })
  }
  store.runSaga = sagaMiddleware.run// 为了动态执行sagas,把run方法添加到store上暴露出去
  store.close = () => store.dispatch(END) // 停止store
  return store;
}