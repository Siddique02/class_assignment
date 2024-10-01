import Link from 'next/link'

export default function Header(){
    return(
        <div className="header">
            <ul className="h-12 bg-black text-white text-xl font-bold flex justify-center items-center gap-6">
                <Link href="/"><li>Home</li></Link>
                <Link href="/portfolio"><li>Portfolio</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contact-us"><li>Contact us</li></Link>
            </ul>
        </div>
    )
}