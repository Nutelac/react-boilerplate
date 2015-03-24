jest.autoMockOff()

import React from 'react/addons'
import App from '../app.jsx'

var TestUtils = React.addons.TestUtils

describe('#components.app', () => {
  it('should write "Hello world!" in h1 tag', () => {
    var app = TestUtils.renderIntoDocument(<App />)
    var text = TestUtils.findRenderedDOMComponentWithTag(app, 'h1')
    expect(text.props.children).toBe('Hello world!')
  })
})
