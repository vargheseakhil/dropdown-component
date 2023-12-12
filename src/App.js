import { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './dropdown/components/DropDown';

function App() {

    const [options, setOptions] = useState([]);
    //Hook to fetch movies
    useEffect(() => {
      // TODO: Move to secrets
      const apiKey = '1c27e642d8cedef632716f85732ec043';
      const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      // Fetch data from MovieDB API on component mount
      const fetchMovies = async () => {
        try {
          const response = await fetch(apiURL);
          if (response.ok) {
            const data = await response.json();
            setOptions(data.results);
          } else {
            throw new Error('Failed to fetch movies');
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
  
      fetchMovies();
    }, []);

  return (
    <div className="App">
      {/* Pass any options to dropdown as props */}
      <Dropdown options={options} />
    </div>
  );
}

export default App;
