import Link from 'next/link'
import Footer from '../components/footer/footer'

const page = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <div className="md:mt-8 sticky top-2 z-20">
        <header className='m-auto w-[300px] md:w-[608px] h-[70px] rounded-[30px] bg-[#131313] backdrop-blur-md bg-opacity-60'>
          <div className='flex md:justify-between justify-center items-center w-full h-full space-x-4'>
            <div className='flex items-center font-semibold text-sm md:ml-4 md:mr-4'>
              <Link href='/' className=''>skrodrigo</Link>
            </div>
            <div className='flex items-center font-semibold md:space-x-8 space-x-4 text-sm justify-center '>
              <ul className="flex justify-end pr-4 space-x-4 md:space-x-8 ">
                <li>
                  <Link href='/contatos'>Contato</Link>
                </li>
                <li>
                  <Link href='/xp' className='text-[#2563EB] '>XP/Educação</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>

      <div className='flex flex-col items-center justify-center mt-12 space-y-8'>
        <span className='text-5xl font-semibold md:text-6xl'>Educação</span>
        <p className='text-center'>Obtenha <b>informações</b> sobre minhas formações e <b>experiencias</b><br />
        como <b>desenvolvedor</b>.
        </p>
      </div>

      <div className='flex flex-col justify-center items-center  mt-16 mx-auto'>
        
        <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl 
        w-[320px] md:w-[600px] lg:w-[900px] xl:w-[1216px] px-7 py-4 space-y-2 font-semibold ">
        <span>Eeep Anop</span>
        <span className='text-[#2563EB]'>Tecnico Em Informatica</span>
        <span className='text-[#6F6F6F] font-medium'>Jan 2020 - Dez 2022</span>
        </div>

        <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl 
        w-[320px] md:w-[600px] lg:w-[900px] xl:w-[1216px] px-7 py-4 space-y-2 font-semibold ">
        <span>Uninassau</span>
        <span className='text-[#2563EB]'>Bacharel em Sistemas de Informação</span>
        <span className='text-[#6F6F6F] font-medium'>Jan 2023 - Jan 2026</span>
        </div>

      </div>

      <Footer />
    </div>
    </>
  )
}

export default page