import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postMessage } from '../actions/action_messages'


class ReplyBox extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  postMessage(e) {
    if (e.keyCode === 13) {
      this.props.postMessage(e.target.value)
      this.setState({ value: '' })
    }
  }

  postImage(e) {
    this.props.postImage(e.target.value[0])
  }

  updateValue(e) {
    this.setState({value: e.target.value})
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postMessage },dispatch)
}

export default connect(null, mapDispatchToProps)(ReplyBox)
