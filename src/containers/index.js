/**
 * Created by Administrator on 2017/4/4.
 */
import React, {Component} from 'react';
import Example from '../components/Example'

export default class App extends Component {
  constructor(props, context) {
   super(props, context);
   this.state = {
     isOpen: false
   }
  }
  render() {
    return (
      <div>
        <div>基于create-react-app搭建的react骨架</div>
        <Example/>
      </div>
    );
  }
}