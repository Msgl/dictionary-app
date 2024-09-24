/* eslint-disable react/prop-types */
import { useState } from 'react'; // Importing useState hook from React for managing component state
import searchIcon from '../assets/images/icon-search.svg';

// Defining the Search component
export default function Search(props) {
  // State management for search input text
  const [text, setText] = useState(''); // State to store search input text
  const [isFocused, setIsFocused] = useState(false); //State to track input focus

  // Event handler for input change
  function handleChange(event) {
    setText(event.target.value); // Update search input text state
  }

  // Event handler for form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    props.getWord(text); // Pass search input text to parent component
  }

  //Event handler for input focus
  function handleFocus() {
    setIsFocused(true);
  }

  //Event handler for input blur
  function handleBlur() {
    setIsFocused(false);
  }

  // Rendering the Search component
  return (
    <div className='search'>
      {/* Form for search input */}
      <form onSubmit={handleSubmit} className='search-form'>
        {/* Search input field & handle input change, focus, and blur */}
        <input
          className='search-input'
          type='text'
          value={text}
          placeholder={isFocused ? '' : 'Search for any word...'}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button type='submit' className='search-submit'>
          <img src={searchIcon} alt='search icon' />
        </button>
      </form>
    </div>
  );
}
