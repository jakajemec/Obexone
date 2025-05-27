import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/somepage">Some Page</Link>
      {/* other links */}
    </nav>
  );
}
