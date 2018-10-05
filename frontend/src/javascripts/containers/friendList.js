import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Utils from '../utils'
import { fetchFriendsDataList } from '../actions/action_users'
import { updateOpenChatId } from '../actions/action_messages'

class FriendList extends Component {
  componentWillMount() {
    this.props.fetchFriendsDataList()
  }

  onClickUserListItem(id) {
    this.props.updateOpenChatId(id)
  }

  renderFriendList(data) {
    const lastMessage = data.messages[data.messages.length - 1]
    var date
    if (lastMessage !== void 0) date = Utils.getNiceDate(lastMessage.timestamp)

    return(
      <li
        key = { data.friend.id }
        className="user-list__item"
        onClick = {this.onClickUserListItem.bind(this, data.friend.id)}
      >
        <div className = 'user-list__item__picture'><img src = { data.friend.image_name.url }/></div>
        <div className = 'user-list__item__details'>
          <h4 className = 'user-list__item__name'>
            { data.friend.name }
          </h4>
          <p className='user-list__item__timestamp'>{ date }</p>
          <span className = 'user-list__item__deletefriend'>
            <div><i className = 'fas fa-times-circle'></i></div>
          </span>
          {lastMessage ? <span className='user-list__item__message'>{ lastMessage.content }</span> : null}
        </div>
      </li>
    );
  }

  render() {
    return(
      <div className="col-xs-3 user-list">
        <ul className="user-list__list">
          {this.props.friendsDataList.map(this.renderFriendList.bind(this))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ friendsDataList, openChatId }) {
  return { friendsDataList, openChatId }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFriendsDataList, updateOpenChatId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
