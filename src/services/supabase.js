import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rbupsxdvjbadgeziqpon.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJidXBzeGR2amJhZGdlemlxcG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5ODQxNzcsImV4cCI6MjA3MTU2MDE3N30.8gSsOVN3dcnAC8h2tkD0Z8mpvvL3nJFpoJhVXQcOpyw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
