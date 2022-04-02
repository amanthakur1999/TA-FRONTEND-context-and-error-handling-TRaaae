import userContext from '../userContext';
import { useContext } from 'react';

function Header() {
  var user = useContext(userContext);
  let isDarkMode = user.data.isDarkMode;

  return (
    <h1 className={`heading ${isDarkMode ? 'heading-dark' : 'heading-light'}`}>
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </h1>
  );
}

export default Header;
