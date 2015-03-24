jest.autoMockOff()

import React from 'react/addons'
import App from '../app.jsx'

let TestUtils = React.addons.TestUtils

describe('#components.app', () => {
  it('should write "Hello world!" in h1 tag', () => {
    let app = TestUtils.renderIntoDocument(<App />)
    let text = TestUtils.findRenderedDOMComponentWithTag(app, 'h1')
    expect(text.props.children).toBe('Hello world!')
  })
})
