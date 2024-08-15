/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://Ur own.supabase.co";
const supabaseKey =
  "Ur own";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
