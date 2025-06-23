'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <p>Welcome! You are signed in.</p>
        <UserButton />
        <Link href="/dashboard" className="text-blue-600 underline">
          Go to Dashboard
        </Link>
      </SignedIn>
    </main>
  );
}
