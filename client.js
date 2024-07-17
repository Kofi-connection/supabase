import {createClient} from '@supabase/supabase-js'

const url = 'https://etmkmivwbbfgakdnjfot.supabase.co';
const APIKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bWttaXZ3YmJmZ2FrZG5qZm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyMzIxNzcsImV4cCI6MjAzNjgwODE3N30.D3fC6LCGMWf_Eal2SA1u6lFprxJRAOA6bI8G-3soLDM'
export const supabase = createClient(url, APIKEY);