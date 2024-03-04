import React, { useState, useEffect } from "react";

const GetUserLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Your location is:</h1>
      <p>
        Latitude: {location.latitude} Longitude: {location.longitude}
      </p>
    </div>
  );
};

export default GetUserLocation;
