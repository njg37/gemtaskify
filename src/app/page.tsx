'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <p>Welcome! You are signed in.</p>
        <UserButton />
      </SignedIn>
    </main>
  );
}
