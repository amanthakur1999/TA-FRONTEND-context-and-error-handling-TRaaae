import React, { useContext } from 'react';
import userContext from '../userContext';

export default function SwitchButton() {
  let user = useContext(userContext);
  let isDarkMode = user.data.isDarkMode;
  let changeMode = user.changeMode;
  console.log(changeMode);
  console.log(user);
  return (
    <button
      className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
      onClick={changeMode}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
