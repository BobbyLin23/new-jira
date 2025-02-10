import auth from '$lib/features/auth/server/route'
import { Hono } from 'hono'

export const router = new Hono().route('/auth', auth)

export const api = new Hono().route('/api', router)

export type Router = typeof router
