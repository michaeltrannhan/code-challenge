import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import { PostInput, PostQuery } from '../types/post';

const prisma = new PrismaClient();

export const createPost = async (req: Request<{}, {}, PostInput>, res: Response) => {
    try {
        const { title, content, } = req.body;
        const post = await prisma.post.create({
            data: {
                title,
                content,
            },
        });
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create post' });
    }
};

export const getPosts = async (req: Request<{}, {}, {}, PostQuery>, res: Response) => {
    try {
        const { searchString, skip, take, orderBy } = req.query;
        const where: Prisma.PostWhereInput = {
            ...(searchString ? {
                OR: [
                    { title: { contains: searchString } },
                    { content: { contains: searchString } },
                ],
            } : {}),
        };

        const posts = await prisma.post.findMany({
            where,
            take: Number(take) || 10,
            skip: Number(skip) || undefined,
            orderBy: {
                updatedAt: (orderBy as Prisma.SortOrder) || 'desc',
            },
        });
        console.log(posts);
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

export const getPost = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const post = await prisma.post.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
};

export const updatePost = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const post = await prisma.post.update({
            where: { id: Number(req.params.id) },
            data: req.body,
        });
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to update post' });
    }
};

export const deletePost = async (req: Request<{ id: string }>, res: Response) => {
    try {
        await prisma.post.delete({
            where: { id: Number(req.params.id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};
