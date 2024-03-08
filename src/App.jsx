import React, { useState, useEffect } from "react";
import DisplayFetch from "./components/DisplayFetch";
import { FidgetSpinner } from "react-loader-spinner";

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting current geolocation:", error);
      }
    );
  }, [click]);

  const updateLocation = (lat, long) => {
    setLatitude(lat);
    setLongitude(long);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-darkSlate">
      <div className="flex flex-col items-center relative">
        {latitude !== null && longitude !== null ? (
          <DisplayFetch
            latitude={latitude}
            longitude={longitude}
            updateLocation={updateLocation}
            click={click}
            setClick={setClick}
          />
        ) : (
          <>
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            />
          </>
        )}
      </div>
    </div>
  );
}
