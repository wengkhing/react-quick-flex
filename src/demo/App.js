import React from 'react'
import { Flex } from '../lib'
import CustomComponent from './CustomComponent'

import './App.css'

const App = () => (
  <Flex column wrap gap="20" xSize="400px" xAlign="start" className="page">
    <Flex>Lorem ipsum dolor sit amet</Flex>
    <Flex xSize="200px">Lorem ipsum dolor sit amet</Flex>
    <CustomComponent grow></CustomComponent>
    <CustomComponent xSize="200px"></CustomComponent>
  </Flex>
);

export default App;


