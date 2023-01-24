import './App.css';
import React from 'react';
import TopPanel from './TopPanel';
import MainArea from './MainArea';


class App extends React.Component {
  render() {
    return (
      <div>
        <TopPanel />
        <MainArea />
      </div>
    );
  }
}
export default App;
