import React from 'react';
// import Example from '../lib';
// import { SecondExample } from '../lib';
import { Flex } from '../lib';

import './App.css'

const App = () => (
  <Flex row wrap gap="20" xAlign="baseline" className="page">
    <Flex>Lorem ipsum dolor sit amet</Flex>
    <Flex>Lorem ipsum dolor sit amet</Flex>
  </Flex>
);

export default App;
