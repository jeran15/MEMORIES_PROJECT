import express from 'express';
import { getPosts,createPost } from '../controllers/posts.js';  

const router = express.Router();

//It's work on localhost:5000/posts because we addeda predix (/posts)
router.get('/', getPosts)
router.post('/',createPost)
export default router;