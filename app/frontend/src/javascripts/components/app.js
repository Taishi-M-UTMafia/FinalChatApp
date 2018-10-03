import React, { Component } from 'react';
import FriendList from '../containers/friendList';
import FriendListItem from './friendListItem';
import MessageBox from '../containers/messageBox';

export default class App extends Component {
  render() {
    return (
      <div>
        <FriendList />
        <MessageBox />
      </div>
    );
  }
}
