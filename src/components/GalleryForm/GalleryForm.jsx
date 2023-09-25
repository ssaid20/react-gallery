import React, { useState } from 'react';
import axios from 'axios';
import './GalleryForm.css';

function GalleryForm({ fetchGalleryItems }) {
    const [newImagePath, setNewImagePath] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/gallery', {
            path: newImagePath,
            description: newDescription
        })
        .then(response => {
            fetchGalleryItems();  // refresh the gallery
            setNewImagePath(''); // clear the form
            setNewDescription(''); // clear the form
        })
        .catch(err => {
            alert("Error adding new gallery item");
            console.log(err);
        });
    };

    return (
        <div className="gallery-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="imagePath">Image URL:</label>
                <input 
                    id="imagePath"
                    type="url"
                    value={newImagePath} 
                    onChange={e => setNewImagePath(e.target.value)} 
                    placeholder="Image URL" 
                    required 
                />

                <label htmlFor="description">Description:</label>
                <input 
                    id="description"
                    type="text"
                    value={newDescription} 
                    onChange={e => setNewDescription(e.target.value)} 
                    placeholder="Description" 
                    required 
                />

                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}

export default GalleryForm;
