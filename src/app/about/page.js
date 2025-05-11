import Link from 'next/link';

export default function AboutPage() {
    return (
        <main>
        <div className='flex flex-row justify-center content-around flax gap-4'>
        <h1>About Us</h1>
        <Link href="/" className="font-medium text-sky-500">Go back to Home</Link>
        </div>
        </main>
    );
}