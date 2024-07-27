import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="h-screen flex flex-col text-center justify-center bg-slate-50">
      <h1 className="text-8xl text-gray-900 font-bold">404</h1>
      <p className="text-4xl text-gray-900 font-medium">Page Not Found</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
}
