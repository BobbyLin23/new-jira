import type { RequestHandler } from '@sveltejs/kit'
import { api } from '$lib/api'

export const GET: RequestHandler = ({ request }) => api.fetch(request)
export const POST: RequestHandler = ({ request }) => api.fetch(request)
