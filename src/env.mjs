import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    REDIRECT_URL: z.string().url(),
  },
  client: {
  },
  runtimeEnv: {
    REDIRECT_URL: process.env.REDIRECT_URL,
  },
});