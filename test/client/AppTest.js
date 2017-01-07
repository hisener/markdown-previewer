/* globals describe, beforeEach, it */
import assert from 'assert'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import App from '../../src/client/App'
import MarkdownPreviewer from '../../src/client/components/MarkdownPreviewer'

describe('App', function () {
  beforeEach(() => {
    this.renderer = ReactTestUtils.createRenderer()
    this.renderer.render(<App />)
  })

  it('should render a div with MarkdownPreviewer component', () => {
    let result = this.renderer.getRenderOutput()

    assert.equal(result.type, 'div')
    assert.deepEqual(result.props.children[0],
      <MarkdownPreviewer />
    )
  })
})
