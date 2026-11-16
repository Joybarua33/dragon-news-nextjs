import Image from 'next/image';
import Link from 'next/link';
import userAvatar from "@/assets/user.png"
import NavLink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto gap-3 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            <div className='flex justify-between items-center gap-3'>
                <Image src={userAvatar} alt="user avatar" width={60} height={60}/>
                <button className='btn bg-purple-500 text-white'><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;