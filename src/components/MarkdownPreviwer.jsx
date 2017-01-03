import React from 'react'
import marked from 'marked'
import defaultText from './constants/defaultText'

class MarkdownPreviewer extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      text: defaultText
    }

    this.handleTextareaChange = this.handleTextareaChange.bind(this)
  }

  handleTextareaChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <textarea className='form-control' rows={25} onChange={this.handleTextareaChange} value={this.state.text} />
        </div>
        <div className='col-md-6'>
          <div dangerouslySetInnerHTML={{ __html: marked(this.state.text) }} />
        </div>
      </div>
    )
  }

}

export default MarkdownPreviewer
