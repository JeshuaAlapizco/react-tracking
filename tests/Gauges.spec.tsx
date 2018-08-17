import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Gauges from '../src/Gauges'

it('renders', () => {
  const div = ReactDOM.render(
    <Gauges id="foo" />,
    document.createElement('div')
  )
})
