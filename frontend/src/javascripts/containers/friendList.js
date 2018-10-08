import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Utils from '../utils'
import classNames from 'classnames'
import { fetchFriendsDataList, fetchCurrentUser } from '../actions/action_users'
import { updateOpenChatId } from '../actions/action_messages'
import { destroyFriendship, updateLastAccess } from '../actions/action_friendships'

class FriendList extends Component {
  componentWillMount() {
    this.props.fetchFriendsDataList()
    this.props.fetchCurrentUser()
  }

  onClickUserListItem(toUserId) {
    this.props.updateLastAccess(toUserId)
    this.props.updateOpenChatId(toUserId)
  }

  onClickDestroyButton(toUserId) {
    if (window.confirm('本当に友達解除しますか？')) this.props.destroyFriendship(toUserId)
  }

  // 友達リストを作成して返す
  renderFriendList(data) {
    // date, isMessage, statusIconの設定
    const lastMessage = data.messages[data.messages.length - 1]
    let date
    let isNewMessage = false
    let statusIcon
    if (lastMessage !== void 0) {
      date = Utils.getNiceDate(lastMessage.timestamp)
      if (data.lastAccess.currentUser < lastMessage.timestamp) {
        isNewMessage = lastMessage.user_id === data.friend.id
        statusIcon = <i className='fa fa-circle user-list__item__icon' />
      }
      if (lastMessage.user_id === this.props.currentUser.id) {
        statusIcon = <i className='fa fa-reply user-list__item__icon' />
      }
    }

    const itemClasses = classNames({
        'user-list__item'        : true,
        'user-list__item--new'   : isNewMessage,
        'user-list__item--active': this.props.openChatId === data.friend.id,
      })

    return(
      <li key = { data.friend.id } className={ itemClasses }>
        <div className = 'user-list__item__picture'><img src = { data.friend.image_name.url }/></div>
        <div className = 'user-list__item__details' onClick = {this.onClickUserListItem.bind(this, data.friend.id)}>
          <span className = 'user-list__item__name'>{ data.friend.name }</span>
          <div><p className='user-list__item__timestamp'>{ date }</p></div>
          {lastMessage ? <span className='user-list__item__message'>{ statusIcon } { lastMessage.content }</span> : null}
        </div>
        <span
          className = 'user-list__item__deletefriend'
          onClick={this.onClickDestroyButton.bind(this, data.friend.id)}
        >
          <i className = 'fas fa-times-circle'></i>
        </span>
      </li>
    );
  }

  render() {
    this.props.friendsDataList.sort((a, b) => {
      if (b.messages[b.messages.length -1] && a.messages[a.messages.length -1]) {
        return b.messages[b.messages.length -1].timestamp - a.messages[a.messages.length -1].timestamp
      }
    })

    return(
      <div className="col-xs-3 user-list">
        <ul className="user-list__list">
          {this.props.friendsDataList.map(this.renderFriendList.bind(this))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ friendsDataList, openChatId, currentUser }) {
  return { friendsDataList, openChatId, currentUser }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchFriendsDataList, updateOpenChatId, fetchCurrentUser, updateLastAccess, destroyFriendship }
  , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
