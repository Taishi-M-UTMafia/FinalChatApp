import React, { Component } from 'react';
import ReplyBox from './replyBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions/action_messages'

class MessageBox extends Component {
  componentWillMount() {
    this.props.fetchMessages()
  }

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
    return (
      <div className="col-xs-9 message-box">
        <ul className="message-box-list">
          {this.props.messages.map(this.renderMessages)}
        </ul>
        <ReplyBox />
      </div>
    );
  }
}

function mapStateToProps({messages}) {
  return { messages };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)
