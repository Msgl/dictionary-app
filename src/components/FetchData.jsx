/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React for managing component state and performing side effects
import Results from './Results'; // Importing Results component from the specified location

// Defining the FetchData component
export default function FetchData(props) {
  // State management for storing fetched data and loading state
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status

  // Extracting word and constructing API URL from props
  const word = props.word; // Extracting word from props
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/` + word; // Constructing API URL using the word

  // Effect hook to fetch data from the API when the URL changes
  useEffect(() => {
    // Fetching data from the API
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parsing response JSON if request is successful
        }
        throw response; // Throwing an error if response is not okay
      })
      .then((data) => {
        setData(data); // Setting fetched data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Logging error if fetch fails
      })
      .finally(() => {
        setLoading(false); // Setting loading state to false after fetch completes
      });
  }, [url]); // Effect will retrigger will retrigger useEffect() whenever the URL changes

  // Displaying loading message if data is still loading
  if (loading) return 'Loading...';

  // Rendering Results component with fetched data
  return <Results data={data}></Results>;
}
