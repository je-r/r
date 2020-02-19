import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 
import Button from 'react-bootstrap/Button';

class App extends React.Component {	
  render() {
    return (
      <div className="App">
     
      test 2
          <Button variant="light" className="mr-1">
     test button
     
          </Button>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
