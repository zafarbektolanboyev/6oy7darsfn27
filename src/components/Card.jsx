import React, { useEffect, useState } from 'react';
import './Card.css';

function Card() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setPhotos(data.slice(0, 10)); // Load first 10 photos
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  function handleImageLoad (id){
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="Cards">
      {loading ? (
        <p>Loading...</p>
      ) : (
        photos.map(photo => (
          <div key={photo.id} className="Card">
            {!loadedImages[photo.id] && <p>Loading image...</p>}
            <img 
              src={photo.url} 
              alt={photo.title} 
              onLoad={() => handleImageLoad(photo.id)} 
              style={{ display: loadedImages[photo.id] ? 'block' : 'none' }} 
            />
            <h2>{photo.title}</h2>
            <h2>Price: ${photo.id}</h2>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
