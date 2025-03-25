import { desc } from "drizzle-orm"
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { stat } from "fs"

export const status = ["inbox", "doing", "done"] as const
export type Status = typeof status[number]

export const todoTable = sqliteTable("todo", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	description: text("description").notNull(),
	status: text("status", { enum: status }).notNull(),
})

