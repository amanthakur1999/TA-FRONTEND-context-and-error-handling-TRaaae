import React from 'react';
import SwitchButton from './Button';
import Header from './Header';
import Main from './Main';
import userContext from '../userContext';

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
        <userContext.Provider
          value={{ data: this.state, changeMode: this.changeMode }}
        >
          <Header />
          <Main />
          <SwitchButton />
        </userContext.Provider>
      </div>
    );
  }
}

export default App;
