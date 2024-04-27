import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rznhfhojldmnudrgtowi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6bmhmaG9qbGRtbnVkcmd0b3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzODg0MjMsImV4cCI6MjAyODk2NDQyM30.Wa_lItErpY__Iw0c-Q1ztTB5H8JyfhwY57oEnSpx54Q";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
