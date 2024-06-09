import Link from 'next/link'
import Footer from '../components/footer/Footer'


const page = () => {
  return (
    
    <div className='min-h-screen flex flex-col justify-between'>

    <div className="md:mt-8 sticky top-2 z-20">
            <header className='m-auto w-[320px] md:w-[608px] h-[70px] rounded-[30px] bg-[#131313] backdrop-blur bg-opacity-85'>
            
                <div className='flex justify-between items-center w-full h-full px-2'>

                    <div className='flex items-center font-semibold text-sm'>
                    <Link href='/' >skrodrigo</Link>
                    </div>
                    <div className='flex items-center font-semibold md:space-x-8 text-sm justify-center'>
                        <ul className="flex justify-end space-x-4 md:space-x-8 ">
                            <li>
                            <Link href='/projetos' className='text-[#2563EB] '>Projetos</Link>
                            </li>
                            <li>
                            <Link href='/contatos'>Contato</Link>
                            </li>
                            <li>
                            <Link href='/xp'>XP/Educação</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            
            </header>
    </div>

    <div>
        <div className='flex items-center justify-center'>
            em breve...
        </div>
    </div>
      
    <Footer />
    
    </div>
    
  )
}

export default page