import React, { useState, useEffect } from "react";

function App() {
  // State to hold the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to indicate whether data is loading
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data from the API
  useEffect(() => {
    // Fetch dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update state with the received dog image URL
        setDogImage(data.message);
        // Set loading to false once data is received
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        // Set loading to false in case of an error
        setLoading(false);
      });
  }, []); // Empty dependency array ensures that useEffect runs only once (on component mount)

  return (
    <div>
      {/* Display loading message while data is being fetched */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Display dog image once data is received
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
