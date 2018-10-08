import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postMessage, postImage } from '../actions/action_messages'
import { updateLastAccess } from '../actions/action_friendships'


class ReplyBox extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  updateValue(e) {
    this.setState({value: e.target.value})
  }

  postMessage(e) {
    if (e.keyCode === 13) {
      this.props.postMessage(this.props.openChatId, e.target.value)
      this.setState({ value: '' })
    }
  }

  postImage(e) {
    this.props.postImage(this.props.openChatId, e.target.files[0])
  }

  render() {
    return(
      <div className = 'reply-box'>
        <input
          className = 'reply-box__input'
          placeholder = 'Type message to reply..'
          autoFocus = { true }
          value = {this.state.value}
          onKeyDown = {this.postMessage.bind(this)}
          onChange = {this.updateValue.bind(this)}
        />
        <span className='reply-box__tip'>
          Press <span className='reply-box__tip__button'>Enter</span> to send
        </span>
        <input
          className="reply-box__image_input"
          type='file'
          name='image'
          accept='image/*'
          onChange = {this.postImage.bind(this)}
        />
       </div>
    );
  }
}

function mapStateToProps({ openChatId }) {
  return { openChatId }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postMessage, postImage, updateLastAccess },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyBox)
