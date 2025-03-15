import { z } from 'zod';
import { serverPB } from '../../../hooks.server.js';
import { APIResponse } from '$lib/tools/APITools.js';

const UserSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(12, 'Password must be at least 12 characters long')
});

export const POST = async (event) => {
	const { email, password } = await event.request.json();

	// Validate the request body
	const parsedBody = UserSchema.safeParse({ email, password });
	if (!parsedBody.success) {
		return APIResponse({
			errors: parsedBody.error.errors.map((err) => err.message),
			status: 400
		});
	}

	const existing = await serverPB
		.collection('users')
		.getOne(`email="${email}"`)
		.catch(() => null);
	if (existing) {
		return APIResponse({
			errors: ['Email already exists'],
			status: 409
		});
	}

	const createdUser = await serverPB.collection('users').create(parsedBody.data);

	return APIResponse({
		message: 'User registered successfully',
		status: 201
	});
};
