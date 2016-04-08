// Dependencies
import React from 'react';
import ReactDom from 'react-dom';
import Component from './component.jsx';

// Module definitions
class App extends React.Component {

  render () {
    return <Component />;
  }

}

// Render module
ReactDom.render(<App/>, document.getElementById('root'));
