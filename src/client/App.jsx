import React from 'react'
import MarkdownPreviewer from './components/MarkdownPreviewer'

class App extends React.Component {

  render () {
    return (
      <div>
        <MarkdownPreviewer />
        <footer className='row'>
          <a href='https://github.com/hisener/markdown-previewer' target='_blank'>
            GitHub repository
          </a>
        </footer>
      </div>
    )
  }

}

export default App
