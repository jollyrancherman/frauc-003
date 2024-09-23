// import { useState, useEffect } from 'react';

// export const useGeoLocation = () => {
//   const [location, setLocation] = useState(null);
//   const [userIP, setUserIP] = useState(null);
//   const [city, setCity] = useState(null);
//   const [region, setRegion] = useState(null);
//   const [error, setError] = useState(null);

//   // Only run on mount and unmount
//   useEffect(() => {
//     const setValues = (json) => {
//       console.log(json);
//       // setLocation(json);
//       // setUserIP(json.ip);
//       // setCity(json.city);
//       // setRegion(json.region);
//     };

//     const onError = (err) => {
//       console.log(err);
//       setError(err);
//     };

//     navigator.geolocation.getCurrentPosition(setValues, onError);
//     // fetch("https://ipapi.co/json")
//     //   .then(data => data.json())
//     //   .then(json => {
//     //     setValues(json);
//     //   })
//     //   .catch(err => console.log(err));
//   }, []);

//   return {
//     location,
//     setLocation,
//     userIP,
//     city,
//     region,
//     error,
//   };
// };
