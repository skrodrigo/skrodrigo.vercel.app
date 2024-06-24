'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="md:mt-8 sticky top-2 z-20">
        <header className='m-auto w-[320px] md:w-[608px] h-[70px] rounded-[30px] bg-[#131313] backdrop-blur bg-opacity-85'>
        
            <div className='flex justify-between items-center w-full h-full px-2'>

                <div className='flex items-center font-semibold text-sm'>
                <Link href='/' className={pathname === '/' ? 'text-[#2563EB]' : ''}>skrodrigo</Link>
                </div>
                <div className='flex items-center font-semibold md:space-x-8 text-sm justify-center'>
                    <ul className="flex justify-end space-x-4 md:space-x-8 ">
                        <li>
                        <Link href='/projetos' className={pathname === '/projetos' ? 'text-[#2563EB]' : ''}>Projetos</Link>
                        </li>
                        <li>
                        <Link href='/contatos' className={pathname === '/contatos' ? 'text-[#2563EB]' : ''}>Contato</Link>
                        </li>
                        <li>
                        <Link href='/xp' className={pathname === '/xp' ? 'text-[#2563EB]' : ''}>XP/Educação</Link>
                        </li>
                    </ul>
                </div>

            </div>
        
        </header>
        </div>
)}