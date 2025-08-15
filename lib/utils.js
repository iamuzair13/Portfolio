import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const dbConnection ="mongodb+srv://"+username+":"+password+"@programmerssquad.4ceonbi.mongodb.net/BlogsDb?retryWrites=true&w=majority&appName=ProgrammersSquad"