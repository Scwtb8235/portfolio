const express = require('express');
const router = express.Router();
const Blog = require('./blog.model');

router.get('/', async (req, res) => {
    try{
        const posts = await Blog.find({ published: true }).sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error'  }); 
   }    
});

router.get('/:slug', async (req, res) => {
    console.log('Blog route hit');
    try {
        const post = await Blog.findOne({ slug: req.params.slug, published: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;