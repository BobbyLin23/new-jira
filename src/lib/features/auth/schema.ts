import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(256),
})

export const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(256),
  name: z.string().min(1),
})

export type LoginFormSchema = typeof loginFormSchema
export type RegisterFormSchema = typeof registerFormSchema
