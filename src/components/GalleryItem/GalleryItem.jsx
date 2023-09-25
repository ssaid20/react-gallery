import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';


function GalleryList({ galleryItems, fetchGalleryItems }) {
    return (
        <div className="gallery-list">
            <h2 className="gallery-title">Gallery</h2>
            {galleryItems.map(item => (
                <GalleryItem key={item.id} item={item} fetchGalleryItems={fetchGalleryItems} />
            ))}
        </div>
    );
}

export default GalleryList;

