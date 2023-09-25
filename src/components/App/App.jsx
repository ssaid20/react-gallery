import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        fetchGalleryItems();
    }, []);

    const fetchGalleryItems = () => {
        axios.get('/gallery')
            .then(response => {
                setGalleryItems(response.data);
            })
            .catch(err => {
                alert("Error fetching gallery items");
                console.log(err);
            });
    };

    return (
        <div className="App">
            <h1>My Gallery</h1>
            <GalleryForm fetchGalleryItems={fetchGalleryItems} />
            <GalleryList galleryItems={galleryItems} fetchGalleryItems={fetchGalleryItems} />
        </div>
    );
}

export default App;




