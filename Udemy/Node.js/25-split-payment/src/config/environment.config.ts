import "dotenv/config";

export const environments = {
  PORT: Number(process.env.PORT || 3000),
  MONGO_URI: process.env.MONGO_URI as string,
  TOKEN_SECRET: process.env.TOKEN_SECRET as string,
  TOKEN_EXPIRE_TIME: process.env.TOKEN_EXPIRE_TIME as string,
  PAYZE_API_KEY: process.env.PAYZE_API_KEY as string,
  PAYZE_API_SECRET: process.env.PAYZE_API_SECRET as string,
  PAYZE_API_URL: process.env.PAYZE_API_URL as string,
  PAYZE_HOOK_API_URL: process.env.PAYZE_HOOK_API_URL as string,
};
