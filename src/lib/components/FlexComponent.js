import React, { Component } from 'react'

class FlexComponent extends Component {

  constructor(props) {
    super(props)

    const {
      children,
      className,
      style,
      row,
      column,
      wrap,
      grow,
      gap,
      margin,
      mSize,
      xSize,
      mAlign,
      xAlign
    } = props

    let childrenWithProps

    let mergedStyle = {
      ...!!(row || column) && { 'display': 'flex' },
      ...!!(wrap) && { 'flexWrap': wrap === 'reverse'? 'wrap-reverse' : 'wrap' },
      ...!!mSize && { 'flexBasis': mSize },
      ...!!margin && { 'margin': `${margin}px` },
      'flex': grow? '1 1 auto' : '0 1 auto',
      ...style
    }

    if (row) {
      mergedStyle['flexDirection'] = 'row'
    } else if (column) {
      mergedStyle['flexDirection'] = 'column'
    }

    switch (mAlign) {
      case 'start':
        mergedStyle['justifyContent'] = 'flex-start'
        break
      case 'end':
        mergedStyle['justifyContent'] = 'flex-end'
        break
      case 'between':
        mergedStyle['justifyContent'] = 'space-between'
        break
      case 'around':
        mergedStyle['justifyContent'] = 'space-around'
        break
      default:
        mergedStyle['justifyContent'] = mAlign
    }

    if (wrap) {
      switch (xAlign) {
        case 'start':
          mergedStyle['alignContent'] = 'flex-start'
          mergedStyle['alignItems'] = 'flex-start'
          break
        case 'end':
          mergedStyle['alignContent'] = 'flex-end'
          mergedStyle['alignItems'] = 'flex-end'
          break
        case 'between':
          mergedStyle['alignContent'] = 'space-between'
          break
        case 'around':
          mergedStyle['alignContent'] = 'space-around'
          break
        default:
          mergedStyle['alignContent'] = xAlign
          mergedStyle['alignItems'] = xAlign
      }
    } else {
      switch (xAlign) {
        case 'start':
          mergedStyle['alignItems'] = 'flex-start'
          break
        case 'end':
          mergedStyle['alignItems'] = 'flex-end'
          break
        default:
          mergedStyle['alignItems'] = xAlign
      }
    }


    if (!!gap) {
      childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { 'margin': `${gap/2}`}))
    }

    this.state = { mergedStyle };
    console.log(this.state);
  }

  // render() {


  //   return (
  //     <div className={className} style={mergedStyle}>
  //       {gap? childrenWithProps : children}
  //     </div>
  //   )
  // }
}

export default FlexComponent;
