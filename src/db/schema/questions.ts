import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { rooms } from './rooms.ts'

export const questions = pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(),
  question: text().notNull(),
  answer: text(),
  createdAt: timestamp().notNull().defaultNow(),
  roomId: uuid()
    .notNull()
    .references(() => rooms.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
})
