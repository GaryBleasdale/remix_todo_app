import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import favicon from "../../public/favicon.ico";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
      <img src={favicon} alt="favicon" />
      <div className="gap-4 flex flex-col items-center h-auto">
        <h1>Welcome To Gary&apos;s Notes App built with Remix</h1>
        <p>Click the Link below to access the better way to take notes:</p>
        <Link to="/notes" className="text-blue-800">
          About
        </Link>
      </div>
    </div>
  );
}
