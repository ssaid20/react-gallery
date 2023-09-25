const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// GET Route
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM gallery_items ORDER BY id';
    pool.query(queryText)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.error('Error in GET /gallery', error);
            res.sendStatus(500);
        });
});

// POST Route
router.post('/', (req, res) => {
    const newItem = req.body;
    const queryText = `INSERT INTO gallery_items (path, description) VALUES ($1, $2)`;
    pool.query(queryText, [newItem.path, newItem.description])
        .then(() => res.sendStatus(201))
        .catch(error => {
            console.error('Error in POST /gallery', error);
            res.sendStatus(500);
        });
});

// PUT Route for likes
router.put('/like/:id', (req, res) => {
    const itemId = req.params.id;
    const queryText = 'UPDATE gallery_items SET likes = likes + 1 WHERE id = $1';
    pool.query(queryText, [itemId])
        .then(() => res.sendStatus(200))
        .catch(error => {
            console.error('Error in PUT /gallery/like', error);
            res.sendStatus(500);
        });
});

// DELETE Route
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    const queryText = 'DELETE FROM gallery_items WHERE id = $1';
    pool.query(queryText, [itemId])
        .then(() => res.sendStatus(204))
        .catch(error => {
            console.error('Error in DELETE /gallery', error);
            res.sendStatus(500);
        });
});

module.exports = router;