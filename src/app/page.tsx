import Card from '@/app/components/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="home min-h-[200px] flex flex-wrap items-center justify-center bg-blue-200">
      <Link href="/blog1"> <Card/> </Link>
      <Link href="/blog2"> <Card/> </Link>
      <Link href="/blog3"> <Card/> </Link>
      <Link href="/blog4"> <Card/> </Link>
      <Link href="/blog5"> <Card/> </Link>
      <Link href="/blog6"> <Card/> </Link>
    </div>
  );
}
