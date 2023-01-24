import './App.css';
import React from 'react';


class NoMatch extends React.Component {
  render() {
    return (
    <div className="position-absolute top-50 start-50 translate-middle fs-1">
        Страница не найдена!
    </div>
    );
  }
}
export default NoMatch;
