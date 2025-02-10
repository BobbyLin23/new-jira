import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { loginFormSchema } from '../schema'

const app = new Hono()
  .post('/login', zValidator('json', loginFormSchema), (c) => {
    return c.json({
      success: 'ok',
    })
  })

export default app
