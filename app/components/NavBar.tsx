import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
        <nav>
            <Link className="logo" href='/'>
                <Image src={"/icons/logo.png"} alt="Logo" height={24} width={24} />
                <p>DevEvent</p>
            </Link>
            <ul>
                <Link href={'/'}>Home</Link>
                <Link href={'/events'}>Events</Link>
                <Link href={'/create'}>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar