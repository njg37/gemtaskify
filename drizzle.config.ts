import type { Config } from "drizzle-kit";
import { parse } from "pg-connection-string";

const configFromUrl = parse(process.env.DATABASE_URL!);

export default {
  schema: "./src/lib/drizzle/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: configFromUrl.host!,
    port: configFromUrl.port ? Number(configFromUrl.port) : undefined,
    user: configFromUrl.user,
    password: configFromUrl.password,
    database: configFromUrl.database!,
    ssl: "require",  // usually needed for Neon
  },
} satisfies Config;
