/* eslint-disable react/prop-types */

// Defining the FontSelect component
export default function FontSelect(props) {
  // Rendering the font selection dropdown
  return (
    <div>
      {/* Label and select element for font selection */}
      <label className=''>
        <select value={props.fontSelected} onChange={props.getFont}>
          <option value='serif'>Serif</option>
          <option value='sans'>Sans Serif</option>
          <option value='mono'>Mono</option>
        </select>
      </label>
    </div>
  );
}
