import Link from 'next/link'

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
                  <Link href='/contatos' className='text-[#2563EB] '>Contato</Link>
                </li>
                <li>
                  <Link href='/xp'>XP/educação</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>

      <div className='flex flex-col items-center justify-center mt-12 space-y-8'>
        <span className='text-6xl font-semibold'>Contatos</span>
        <p className='text-center'>Se sinta avontade para entrar em <b>contato</b> comigo, estou disponivel em <br />
          todas as redes <b>socias</b>.  </p>
        <button className="bg-white text-black rounded-3xl text-xs font-bold px-6 py-3 w-[120px] h-[40px] lg:w-40 lg:h-12 lg:text-base">
          Dowload CV  
        </button> 
      </div>

      <div className='md:flex md:flex-col lg:grid lg:grid-cols-2 justify-center items-center w-[320px] lg:w-[760px] mt-16 mx-auto'>
        
        <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[320px] px-3 py-3 space-y-2 font-semibold ">
        <span>Email</span>
        <span className='underline  text-[#2563EB]'>rodrigoa0987@gmail.com</span>
        </div>

        <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[320px] px-3 py-3 space-y-2 font-semibold ">
        <span>Linkedln</span>
        <span className='underline  text-[#2563EB]'>linkedin.com/in/skrodrigo</span>
        </div>
        
        <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[320px] px-3 py-3 space-y-2 font-semibold ">
        <span>Telefone</span>
        <span className='underline  text-[#2563EB]'>+55 88 9 9274-4891</span>
        </div>

        <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[320px] px-3 py-3 space-y-2 font-semibold ">
        <span>GitHub</span>
        <span className='underline  text-[#2563EB]'>github.com/skrodrigo</span>
        </div>

      </div>

      <footer className="flex items-center justify-center mb-3 mt-auto">
        <span className="font-normal text-sm">skrodrigo © 2024</span>
      </footer> 
    </div>
    </>
  )
}

export default page