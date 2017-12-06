import React from 'react'
import { Flex } from '../lib'
import CustomComponent from './CustomComponent'

import './App.css'

const App = () => (
  <Flex row wrap gap="20" xSize="400px" xAlign="stretch" className="page">
    <Flex>Lorem ipsum dolor sit amet</Flex>
    <Flex>Lorem ipsum dolor sit amet</Flex>
    <CustomComponent grow></CustomComponent>
    <CustomComponent mSize="300px"></CustomComponent>
  </Flex>
);

export default App;


