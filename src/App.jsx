import { useState } from 'react'; // Importing useState hook from React for managing component state
import './App.css'; // Importing styles for the App component
import FontSelect from './components/FontSelect'; // Importing FontSelect component from the specified location
import Search from './components/Search'; // Importing Search component from the specified location
import FetchData from './components/FetchData'; // Importing FetchData component from the specified location
import ThemeToggle from './components/ThemeToggle'; // Importing ThemeToggle component from the specified location
import logo from './assets/images/logo.svg'; // Importing logo image from the specified location

function App() {
  //State management
  const [isDarkMode, setIsDarkMode] = useState(false); // State for managing dark mode
  const [word, setWord] = useState('keyboard'); // State for managing the word input
  const [fontSelected, setFontSelected] = useState('serif'); // State for managing the selected font

  //Event handlers
  const handleFontSelected = (event) => {
    setFontSelected(() => event.target.value); // Update selected font based on user selection
  };
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode); // Toggle between light and dark mode
  };
  const handleWord = (value) => {
    setWord(() => value); // Update the word input
  };

  return (
    /* Apply dark mode class conditionally & selected font class */
    <div
      className={`App ${
        isDarkMode ? 'dark-mode' : 'light-mode'
      } ${fontSelected}`}
    >
      <div className='app-wrapper'>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='options'>
            {/* Font select dropdown */}
            <FontSelect getFont={handleFontSelected}></FontSelect>
            {/* Theme toggle button */}
            <ThemeToggle onToggle={handleToggle} />
          </div>
        </div>
        {/* Main content */}
        <main>
          {/* Search component */}
          <Search getWord={handleWord}></Search>
          {/* Component to fetch data based on the word input */}
          <FetchData word={word}></FetchData>
        </main>
      </div>
    </div>
  );
}

export default App;
