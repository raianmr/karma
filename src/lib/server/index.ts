import { OpenAPIHono } from '@hono/zod-openapi'
import { todoRouter } from './routes/todos'

const app = new OpenAPIHono()

// DB Model

app.get('/', (c) => {
  return c.json({ message: 'All systems nominal.' })
})

app.route('/api/todos', todoRouter)

export default app
