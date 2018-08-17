import * as React from 'react'

export interface Props {
  id: string
}

class Gauges extends React.Component<Props> {
  public componentDidMount() {
    const t = document.createElement('script')
    t.type = 'text/javascript'
    t.async = true
    t.id = 'gauges-tracker'
    t.setAttribute('data-site-id', this.props.id)
    t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif')
    t.src = 'https://d2fuc4clr7gvcn.cloudfront.net/track.js'

    document.body.appendChild(t)
  }

  public render() {
    return null
  }
}

export default Gauges
