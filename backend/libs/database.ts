import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

interface Props {
  text: string;
  params?: (string | number | boolean | null | Date)[];
}

const { Pool } = pkg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: process.env.NODE_ENV === "production" ? true : false,
  },
});

export const query = async ({ text, params }: Props) => {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (err) {
    console.error("Database query error:", err);
    throw new Error("Database query failed");
  }
};

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(1);
});

export { pool };
