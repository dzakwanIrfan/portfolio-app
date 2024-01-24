import Link from 'next/link';
import './not-found.css';
 
export default function NotFound() {
  return (
    <main>
      <h2>404 Not Found</h2>
      <p>Could not find the page.</p>
      <Link
        href="/"
      >
        Go Back
      </Link>
    </main>
  );
}