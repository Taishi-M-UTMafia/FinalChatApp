import React, { Component } from 'react';
import _ from 'lodash'
import classNames from 'classnames'
import Utils from '../utils'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReplyBox from './replyBox';

class MessageBox extends Component {
  render() {
    // データが返ってきてない時のエラー回避＆メッセージ表示
    if (this.props.friendsDataList == ![]) {
      return <div className="col-xs-9 message-box">You can make friends at searchform!</div>
    }
    const friendData = _.find(this.props.friendsDataList, (data) => {return data.friend.id === this.props.openChatId})

    if (friendData === void 0) {
      return <div className="col-xs-9 message-box">Click your friend to start chatting!</div>
    }
    const messages = friendData.messages

    // メインのメッセージリスト
    const renderMessages = messages.map((message) => {
      const messageClasses = classNames({
        'message-box__item': true,
        'message-box__item--from-current': message.user_id === this.props.currentUser.id,
      })

      // message_typeをtypeにリネーム
      const isText = (message.message_type === 'text')
      return (
        <li key={message.id} className={ messageClasses }>
          <div className = 'user-list__item__picture'>
            <img className = 'icon_by_message' src = { friendData.friend.image_name.url }/>
          </div>
          <p>{ friendData.friend.name }</p>
          <div className = 'message-box__item__contents'>
            { isText ? <span>{ message.content }</span> : <img className = 'image_message' src = { 'message_images/' + message.content } /> }
          </div>
        </li>
      );
    })

    // 必要に応じて既読表示
    const lastMessage = messages[messages.length - 1]
    const lastAccess = friendData.lastAccess
    if (lastMessage !== void 0 && lastMessage.user_id === this.props.currentUser.id) {
      if (lastAccess !== void 0 && lastAccess.recipient >= lastMessage.timestamp) {
        const date = Utils.getShortDate(lastMessage.timestamp)
        renderMessages.push(
          <li key='read' className='message-box__item message-box__item--read'>
            <div className='message-box__item__contents'>
              Read { date }
            </div>
          </li>
        )
      }
    }

    return (
      <div className="message-box col-xs-9">
        <ul className="message-box-list">
          { renderMessages }
        </ul>
        <ReplyBox />
      </div>
    );
  }
}

function mapStateToProps({openChatId, friendsDataList, currentUser}) {
  return { openChatId, friendsDataList, currentUser };
}

export default connect(mapStateToProps)(MessageBox)
