/* globals describe, beforeEach, it */
import assert from 'assert'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import MarkdownPreviewer from '../../../src/client/components/MarkdownPreviewer'

describe('MarkdownPreviewer', function () {
  beforeEach(() => {
    this.component = ReactTestUtils.renderIntoDocument(<MarkdownPreviewer />)
  })

  it('should render a div', () => {
    assert.equal(ReactDOM.findDOMNode(this.component).tagName, 'DIV')
  })
  it('should contains a textarea', () => {
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(this.component, 'textarea'))
  })
  it('should call handleTextareaChange callback on change', () => {
    let textarea = ReactTestUtils.findRenderedDOMComponentWithTag(this.component, 'textarea')
    ReactTestUtils.Simulate.change(textarea)
  })
})
