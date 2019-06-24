import React from 'react';
import './App.css';
import Exercise  from './components/exercise1';
import Exercise2  from './components/exercise2';
import { Container } from 'reactstrap';

function App() {
  return (
      <Container>
          <Exercise />
          <Exercise2 />
      </Container>
  );
}

export default App;
