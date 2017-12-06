import React from 'react'
import { FlexComponent } from '../lib'

class CustomComponent extends FlexComponent {
  componentWillMount() {
    this.setState({
      render: (
        <div style={{
          'padding': '24px',
          'border': '1px solid #444'}}>
          Custom Component
        </div>
      )
    })
  }
}

export default CustomComponent