import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Friend from '../models/Friend';
import * as Yup from 'yup';

export default {
    async index(request: Request, response: Response) {
        const friendRepository = getRepository(Friend);
        const friends = await friendRepository.find();
        return response.json(friends);
    },

    async create(request: Request, response: Response) {
        const { name, email, friend } = request.body;
        const friendRepository = getRepository(Friend);
        const data = {
            name,
            email,
            friend
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            friend: Yup.string()
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const friendCreate = friendRepository.create(data);
        await friendRepository.save(friendCreate);
        return response.status(201).json(friendCreate);
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const friendRepository = getRepository(Friend);
        await friendRepository.delete(id);
        return response.status(400);
    },

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, friend } = request.body;
        const friendRepository = getRepository(Friend);
        const newfriend = await friendRepository.findOneOrFail(id);
        await friendRepository.save({
            name,
            email,
            friend
        });
    }
}