import Link from 'next/link'

const page = () => {
  return (
    <>
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
                  <Link href='/xp' className='text-[#2563EB] '>XP/educação</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
    </div>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </>
  )
}

export default page