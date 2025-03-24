import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

const todoSchema = z.object({
	id: z.number().int().min(1).positive(),
	text: z.string().min(3).max(100),
	done: z.boolean().optional().default(false)
});

const createTodoSchema = todoSchema.omit({ id: true });
const updateTodoSchema = todoSchema.omit({ id: true, text: true });

type Todo = z.infer<typeof todoSchema>;

export const todoRouter = new Hono()
	.get('/', (c) => {
		return c.json({ todos: fakeTodos });
	})
	.post('/', zValidator('json', createTodoSchema), (c) => {
		const todo = c.req.valid('json');
		fakeTodos.push({ ...todo, id: fakeTodos.length + 1 });
		return c.json(todo);
	})
	.get('/:id{[0-9]+}', (c) => {
		const id = Number.parseInt(c.req.param('id'));
		const todo = fakeTodos.find((t) => t.id === id);
		if (!todo) return c.notFound();
		return c.json(todo);
	})

	.put('/:id{[0-9]+}', zValidator('json', updateTodoSchema), (c) => {
		const id = Number.parseInt(c.req.param('id'));
		const todo = c.req.valid('json');
		const index = fakeTodos.findIndex((t) => t.id === id);
		if (index === -1) return c.notFound();
		// fakeTodos[index] = { ...todo, id };
		fakeTodos[index]['done'] = todo.done;
		return c.json(todo);
	})
	.delete('/:id{[0-9]+}', (c) => {
		const id = Number.parseInt(c.req.param('id'));
		const index = fakeTodos.findIndex((t) => t.id === id);
		if (index === -1) return c.notFound();
		fakeTodos.splice(index, 1);
		return c.json({ message: 'Todo deleted' });
	});
