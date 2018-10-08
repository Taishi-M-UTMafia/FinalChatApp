import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/action_users';
import { createFriendship } from '../actions/action_friendships'


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  updateValue(e) {
    this.setState({ value: e.target.value })
    this.props.fetchUsers(e.target.value)
  }

  onClickUserName(userId) {
    this.props.createFriendship(userId)
    location.href = '/'
  }

  renderSearchUsers(user) {
    return(
      <div
        key={ user.id }
        className='search_user_list_result'
        onClick={this.onClickUserName.bind(this,user.id)}
      >
        { user.name }
      </div>
    );
  }

  render() {
    return(
      <div className='searchform-wrapper'>
        <input
          className='searchform'
          type='text'
          autoFocus={ true }
          placeholder="Set your friend's name..."
          value={this.state.value}
          onChange={this.updateValue.bind(this)}
        />
        <div className='search_user_list'>
          {this.props.searchUsers.map(this.renderSearchUsers.bind(this))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({searchUsers}) {
  return { searchUsers }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers, createFriendship }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
