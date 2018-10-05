import React, { Component } from 'react';
import ReplyBox from './replyBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash'

class MessageBox extends Component {
  renderMessages(message) {
    return (
      <li key={message.id} className="message-box__item">
        <div className="message-box__item__contents">
          {message.content}
        </div>
      </li>
    );
  }

  render() {
    if (this.props.friendsDataList === []) {
      return <div className="col-xs-9 message-box">You can make friends at searchform!</div>
    }
    const friendData = _.find(this.props.friendsDataList, (data) => {return data.friend.id === this.props.openChatId})

    if (friendData === void 0) {
      return <div className="col-xs-9 message-box">Click your friend to start chatting!</div>
    }
    const messages = friendData.messages

    return (
      <div className="col-xs-9 message-box">
        <ul className="message-box-list">
          {messages.map(this.renderMessages)}
        </ul>
        <ReplyBox />
      </div>
    );
  }
}

function mapStateToProps({openChatId, friendsDataList}) {
  return { openChatId, friendsDataList };
}

// function mapDispatchToProps(dispatch) {
// }

export default connect(mapStateToProps)(MessageBox)
