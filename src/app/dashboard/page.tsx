import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const authData = await auth(); // 👈 get the object
  const userId = authData.userId;

  if (!userId) {
    return <div>You are not authorized.</div>;
  }

  const user = await currentUser();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Welcome, {user?.firstName} 👋</h1>
      <p>Your Clerk user ID: <code>{userId}</code></p>
    </div>
  );
}
