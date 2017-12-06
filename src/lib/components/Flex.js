import React from 'react';

const Flex = ({ children, className, style, ...props }) => {

  // xAlign accepts:
  // 'stretch', 'start', 'end', 'center', 'baseline', 'between', 'around'

  const {
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

  const mergedStyle = {
    ...!!(row || column) && { 'display': 'flex' },
    ...!!(wrap) && { 'flexWrap': wrap === 'reverse'? 'wrap-reverse' : 'wrap' },
    ...!!margin && { 'margin': `${margin}px` },
    'flex': grow? '1 1' : '0 1',
    ...style
  }

  mergedStyle['flex'] += mSize? ` ${mSize}` : ' auto'

  if (row) {
    mergedStyle['flexDirection'] = 'row'
    mergedStyle['height'] = xSize
  } else if (column) {
    mergedStyle['flexDirection'] = 'column'
    mergedStyle['width'] = xSize
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

  return (
    <div className={className} style={mergedStyle}>
      {gap? childrenWithProps : children}
    </div>
  )
};

export default Flex;
