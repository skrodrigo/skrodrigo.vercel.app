import Link from 'next/link'
import Footer from '../components/footer/footer'

const page = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col justify-between'>
      <div className="md:mt-8 sticky top-2 z-20">
        <header className='m-auto w-[300px] md:w-[608px] h-[70px] rounded-[30px] bg-[#131313] backdrop-blur bg-opacity-85'>
          <div className='flex md:justify-between justify-center items-center w-full h-full space-x-4'>
            <div className='flex items-center font-semibold text-sm md:ml-4 md:mr-4'>
              <Link href='/' className=''>skrodrigo</Link>
            </div>
            <div className='flex items-center font-semibold md:space-x-8 space-x-4 text-sm justify-center '>
              <ul className="flex justify-end pr-4 space-x-4 md:space-x-8 ">
                <li>
                  <Link href='/projetos' className='text-[#2563EB]'>Projetos</Link>
                </li>
                <li>
                  <Link href='/contatos' >Contato</Link>
                </li>
                <li>
                  <Link href='/xp'>XP/Educação</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>

    <section>
        <div className='flex items-center justify-center'>
            em breve...
        </div>
    </section>
      
      <Footer />
    </div>
    </>
  )
}

export default page