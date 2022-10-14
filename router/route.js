import express from 'express';
import * as postController from '../controller/post.js'

const router = express.Router()

router.get('/post', postController.getPosts)

router.get('/post/:id', postController.getPost)

router.post('/create', postController.createPost);

router.put('/post/:id', postController.updatePost);

router.delete('/post/:id', postController.deletePost);

export default router;