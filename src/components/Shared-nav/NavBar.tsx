import React from 'react'
import { ModeToggle } from '../mode-toggle'
import { Link } from 'react-router'

export default function NavBar() {
    const navLinks = [
        <Link to="/" className='bg-gray-950 text-white px-4 py-2 rounded-lg cursor-pointer'>Home</Link>,
        <Link to="/tasks" className='bg-gray-950 text-white px-4 py-2 rounded-lg cursor-pointer'>Tasks</Link>,
        <Link to="/users" className='bg-gray-950 text-white px-4 py-2 rounded-lg cursor-pointer'>Users</Link>
    ]
    return (
        <div className='flex justify-between items-center py-4 bg-blue-950 text-white px-10'>
            <div>
                <ul className='flex gap-5'>
                    {navLinks}
                </ul>
            </div>
            <ModeToggle />
        </div>
    )
}
