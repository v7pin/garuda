import React, { useEffect, useRef } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';

const LiveVideoFeed = ({ setActiveComponent }) => {
  const videoRef = useRef(null); // Create a ref for the video element

  useEffect(() => {
    // Access user's webcam
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          // Assign the video stream to the video element
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(console.error); // Handle errors, e.g., user denied camera access
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="relative">
      <button 
        onClick={() => setActiveComponent("")}
        className="absolute top-5 left-5 flex items-center text-lg font-semibold text-blue-700 hover:text-blue-900 bg-slate-200 hover:bg-blue-200 rounded-full shadow-md transition duration-300 ease-in-out p-2"
      >
        <IoArrowBackCircle className="mr-2 text-1xl" />
        <span className="hidden sm:inline">Back</span>
      </button>
      <h1 className="text-2xl font-semibold text-center">Live Video Feed</h1>
      {/* Video element where the webcam feed will be shown */}
      <video ref={videoRef} autoPlay playsInline className="w-full"></video>
    </div>
  );
};

export default LiveVideoFeed;
