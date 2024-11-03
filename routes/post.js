const router = require('express').Router();
const Post = require('../models/Post');
const multer = require('multer');
const path = require('path');

// File upload setup
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// Create a post
router.post('/create', upload.single('image'), async (req, res) => {
    try {
        const newPost = new Post({
            userId: req.body.userId,
            imageUrl: `/uploads/${req.file.filename}`,
            caption: req.body.caption,
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all posts
router.get('/all', async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'username');
        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
