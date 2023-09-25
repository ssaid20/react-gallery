import React, { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({ item, fetchGalleryItems }) {
    const [isDescriptionShown, setIsDescriptionShown] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionShown(!isDescriptionShown);
    };

    const incrementLikes = () => {
        axios.put(`/gallery/like/${item.id}`)
        .then(response => {
            fetchGalleryItems();  // refresh likes count
        })
        .catch(err => {
            alert("Error incrementing likes");
            console.log(err);
        });
    };

    const deleteItem = () => {
        axios.delete(`/gallery/${item.id}`)
        .then(response => {
            fetchGalleryItems();  // refresh gallery
        })
        .catch(err => {
            alert("Error deleting item");
            console.log(err);
        });
    };

    return (
        <div className="gallery-item">
            <div className={`card ${isDescriptionShown ? 'flipped' : ''}`} onClick={toggleDescription}>
                {!isDescriptionShown ? (
                    <img src={item.path} alt={item.description} />
                ) : (
                    <div className="card-description">
                        {item.description}
                        <button onClick={deleteItem}>Delete</button>
                    </div>
                )}
            </div>
            <div className="card-actions">
                <button onClick={incrementLikes}>Like</button>
                <p>{item.likes} likes</p>
            </div>
        </div>
    );
}

export default GalleryItem;

