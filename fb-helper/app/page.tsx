import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to FB-Helper</h2>
        <h5 className="text-center mb-6">By Vivek Mishra</h5>
        <p className="mt-2 text-center text-sm text-gray-600">
          <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
          {' '}or{' '}
          <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            create an account
          </Link>
        </p>
      </div>
    </div>
    </main>
  );
}
