'use server'
 
import { redirect } from 'next/navigation'
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createUser() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    redirect('/dashboard');
  }