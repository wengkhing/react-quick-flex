import React from 'react'
import { FlexComponent } from '../lib'

class CustomComponent extends FlexComponent {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div style={{
        ...this.state.mergedStyle,
        'padding': '24px',
        'border': '1px solid #444'}}>
        Custom Component
      </div>
    )
  }
}

export default CustomComponent