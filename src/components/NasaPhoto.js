



import React, { useState, useEffect } from "react";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
                // we'll update the KEYHERE soon!
        `https://api.nasa.gov/planetary/apod?api_key=02bfdm6ZIZWUyDHHgrlGcOMeoGPOKulsYCA3iCYc`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="nasa-photo">
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </div>
  );
}





// const NasaPhoto = props => {
//     const [photoData, setPhotoData] = useState([])

//     useEffect(() => {
//         axios.get(`https://api.nasa.gov/planetary/apod?api_key=02bfdm6ZIZWUyDHHgrlGcOMeoGPOKulsYCA3iCYc`)  
//         .then(res => {
//             console.log(res.data)
//             setPhotoData(res.data)
//         })
//         .catch(err => console.log(err))
        
//     }, [])

//     return (
//       <div>
//             <h1>{photoData.title}</h1>
//             <p className="date">{photoData.date}</p>
//             <p className="explanation">{photoData.explanation}</p>
//         </div>

 
//     )
// }

