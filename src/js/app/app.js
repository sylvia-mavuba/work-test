import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './container';
import '../../scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false
    };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(){
    debugger
    this.setState({isOpenMenu: !this.state.isOpenMenu})
  };

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.openMenu} className={this.state.isOpenMenu ? 'menu menu__open' : 'menu menu__close'}>
          x
          <span>1</span>
          <span>2</span>
        </button>
        <div className="menu">
          <button>close</button>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
   <App />,
  document.getElementById('root')
);
