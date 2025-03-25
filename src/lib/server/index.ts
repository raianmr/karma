import { OpenAPIHono } from "@hono/zod-openapi"
import { todoRouter } from "./routes/todos"
import { swaggerUI } from "@hono/swagger-ui"

const app = new OpenAPIHono()

app.get("/", c => {
	return c.json({ message: "All systems nominal." })
})

app.route("/api/todos", todoRouter)

app.doc("/doc", {
	info: {
		title: "An API",
		version: "v1",
	},
	openapi: "3.1.0",
})

app.get(
	"/ui",
	swaggerUI({
		url: "/doc",
	}),
)

export default app
export type App = typeof app // for hono rpc
