import moon from '../assets/images/icon-moon.svg'; // Importing moon icon image from the specified location

// Defining the ThemeToggle component
export default function ThemeToggle(props) {
  // const { isDarkMode, onToggle } = props;

  // Rendering the ThemeToggle component
  return (
    <div className='toggle-wrapper'>
      {/* Toggle switch */}
      <label className='toggle'>
        {/* Input checkbox for toggling theme */}
        <input
          className='toggle-checkbox'
          type='checkbox'
          // eslint-disable-next-line react/prop-types
          onClick={props.onToggle}
        />
        {/* Slider for visual representation of toggle */}
        <span className='toggle-span'></span> {/* Moon icon for dark mode */}
        <img src={moon} alt='dark mode icon' />
      </label>
    </div>
  );
}
