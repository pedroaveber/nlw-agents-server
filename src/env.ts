import { z } from 'zod/v4'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  GEMINI_API_KEY: z.string(),
  DATABASE_URL: z.string().startsWith('postgresql://').url(),
})

export const env = envSchema.parse(process.env)
