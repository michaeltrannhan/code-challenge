import { Router, Request, Response, RequestHandler } from 'express';
import {
    createPost,
    getPosts,
    updatePost,
    getPost,
    deletePost,
} from '../controllers/post.controller';

const router = Router();

// Type assertion to RequestHandler
router.post('/', createPost as RequestHandler);
router.get('/', getPosts as RequestHandler);
router.get('/:id', getPost as any);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
