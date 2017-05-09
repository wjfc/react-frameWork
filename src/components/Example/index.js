/**
 * Created by Administrator on 2017/4/4.
 */
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as exampleActions from '../../actions/example';
import './style.css';
class Example extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      isShow: false
    }
  }
  componentDidMount() {
    this.props.actions.getExampleRequested({
      username: 'jww'
    });
  }
  render() {
    const { info } = this.props;
    //info.get('data').get('name') && console.log(info.get('data'));
    return (
      <div>
        <p>{info.get('data').get('name') && info.get('data').get('name')}</p>
       <p>{info.get('data').get('time') && info.get('data').get('time')}</p>
      </div>
    );
  }
}
export default connect(
  state => ({
  info: state.exampleInfo
}),
  dispatch => ({
    actions: bindActionCreators(exampleActions, dispatch)
  })
)(Example);