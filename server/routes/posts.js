import express from 'express';

import { getPosts , createPost, updatePost} from '../controllers/posts.js';

const router = express.Router();
//localhost:5000/posts
//yeah and a variable which can be casted into a function is crazy 
router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
export default router;