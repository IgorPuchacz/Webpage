import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else if (import.meta.env.DEV) {
  console.warn(
    'Supabase environment variables are not configured. Contact form submissions will be disabled.'
  );
}

export { supabase };
export const isSupabaseConfigured = Boolean(supabase);

export interface ContactSubmission {
  full_name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  gdpr_consent: boolean;
}
