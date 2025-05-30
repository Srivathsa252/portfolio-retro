import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  (import.meta as any).env.VITE_SUPABASE_URL!,
  (import.meta as any).env.VITE_SUPABASE_ANON_KEY!
);

export default supabase;
