/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hnkoqgcfyderpaztebuy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhua29xZ2NmeWRlcnBhenRlYnV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4MDA0MjAsImV4cCI6MjAzODM3NjQyMH0.d9AM4oJR3uzX17kqaLOb-98PKofaeZWuXmjELCpmpfE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
