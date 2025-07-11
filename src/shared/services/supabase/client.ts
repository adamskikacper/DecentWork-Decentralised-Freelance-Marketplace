import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://bjuwqgruztfiydgqebto.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdXdxZ3J1enRmaXlkZ3FlYnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MDQ4NTcsImV4cCI6MjA1ODQ4MDg1N30.g7MY4SXSo_f6WxBWkPFMCZYGevCIF14vNhJR7Qn68P8";

export const supabase = createClient<Database>(
 SUPABASE_URL,
 SUPABASE_PUBLISHABLE_KEY,
 {
  auth: {
   storage: localStorage,
   persistSession: true,
   autoRefreshToken: true,
  },
 }
);
