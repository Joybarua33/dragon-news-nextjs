"use client"
import Image from 'next/image';
import Link from 'next/link';
import userAvatar from "@/assets/user.png"
import NavLink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='flex justify-between container mx-auto gap-3 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            {isPending ? "Loading...." : user ? (
                <div className='flex justify-between items-center gap-3'>
                    <h2>Hello, {user.name}</h2>
                    <Image src={user.image || userAvatar} alt="user avatar" width={60} height={60}/>
                    <button onClick={async () => await authClient.signOut()} className='btn bg-purple-500 text-white'>Logout</button>
                    
                </div>
            ) : (
                <button className='btn bg-purple-500 text-white'><Link href="/login">Login</Link></button>
            )}   
        </div>
    );
};

export default Navbar;