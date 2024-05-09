import Link from "next/link";

export default function Home() {
  return (
  <>

    <div className="md:mt-8 sticky top-2 z-20">
        <header className='m-auto w-[300px] md:w-[608px] h-[70px] rounded-[30px] bg-[#131313] backdrop-blur-md bg-opacity-60'>
          <div className='flex md:justify-between justify-center items-center w-full h-full space-x-4'>
            <div className='flex items-center font-semibold text-sm md:ml-4 md:mr-4'>
              <Link href='/' className='text-[#2563EB] '>skrodrigo</Link>
            </div>
            <div className='flex items-center font-semibold md:space-x-8 space-x-4 text-sm justify-center '>
              <ul className="flex justify-end pr-4 space-x-4 md:space-x-8 ">
                <li>
                  <Link href='/contatos'>contato</Link>
                </li>
                <li>
                  <Link href='/xp'>Xp/educação</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
    </div>
      
    <div className="flex justify-center items-center mx-auto xl:max-w-[1216px] lg:max-w-[912px]">
      <section className="flex flex-col lg:flex-row-reverse items-center text-center space-y-7 mt-16">
        <img src="./../../foto.png" alt="Foto do Portfolio Rodrigo Carvalho" className="w-[192px] h-[195px] lg:w-[384px] lg:h-[390px]" />
        <div className="flex flex-col">
          <span className="font-semibold text-3xl lg:self-start lg:text-justify lg:text-5xl ">Olá, Eu sou <br />Rodrigo</span>
          <p className="text-justify lg:ml-0  mx-12 mt-7">Admirador de tecnologia, desenvolvimento Web e UI/UX, 
             brasileiro e nascido em 2005. Sou estudante de Sistemas
             de Informação. Tenho buscado conhecimento e 
             aprendizado para sempre entregar o melhor para meus 
             trabalhos e projetos.</p>
          <div className="mt-9 space-y-3 flex flex-col lg:flex-row lg:justify-start items-center lg:space-x-8">
            <button className="bg-white text-black rounded-3xl text-xs font-bold px-6 py-3 w-[120px] h-[40px] lg:w-40 lg:h-14 lg:text-base">
              Dowload CV  
            </button> 
            <Link href='/contatos' className="text-[#2563EB] underline text-xs lg:text-base lg:ml-8">
                Veja minha XP
            </Link>
          </div>
        </div>
      </section>
    </div>

    <div className="flex justify-center items-center mx-auto ">
      <section className="flex flex-col items-center text-center mt-24 lg:mt-40">
        <span className="text-xl lg:text-3xl  font-light mb-16">Projetos em destaque</span>
        <div className="lg:flex xl:space-x-14 lg:space-x-4">

          <div className="bg-[#C4D365] px-3 py-3 w-[320px] h-[200px] mb-14 flex flex-col space-y-3 justify-between rounded-3xl">

            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">random-letters</span>
              <Link href='/'>
              <img src="./../../icons/Link.svg" alt=""/>
              </Link>
            </div>

            <p className="text-[#272727] font-semibold text-justify">Projeto Front-end em que o usuário 
              clica na tela e é renderizado letras
              aleatorias de diferentes cores</p>
            <img src="./../../icons/React.svg" alt="" width={32} height={32} className="mt-auto" />

          </div>

          <div className="bg-[#7565D3] px-3 py-3 w-[320px] h-[200px] mb-14 flex flex-col space-y-3 justify-between rounded-3xl">

            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">tabuada-js</span>
              <Link href='/'>
              <img src="./../../icons/Link.svg" alt="" />
              </Link>
            </div>

            <p className="text-[#272727] font-semibold text-justify">Projeto em que o usuário escolhe
            um numero e a operação matemática
            des ejada e é imprido na tela a 
            tabuado de sse número</p>
            <img src="./../../icons/JavaScript.svg" width={32} height={32} alt="" />

          </div>

          <div className="bg-[#D36565] px-3 py-3 w-[320px] h-[200px] mb-14 flex flex-col space-y-3  justify-between rounded-3xl"> 

            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">read.me</span>
              <Link href='/'>
              <img src="./../../icons/Link.svg" alt="" />
              </Link>
            </div>
            <p className="text-[#272727] font-semibold text-justify">minha read.me no github</p>
            <img src="./../../icons/TXT.svg" alt="" width={32} height={32} className="" />
          </div>

        </div>
      </section>
    </div>

    <div className="flex justify-center items-center mx-auto ">
      <section className="flex flex-col items-center text-center mt-24 lg:mt-40">
        <span className="text-xl lg:text-3xl  font-light mb-16">Algumas tecnologias que<br />
        venho utilizando</span>
        <div className="lg:flex xl:space-x-14 lg:space-x-12">

        <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-5 py-7">
            <span className="text-base font-light mb-10">
            Front-End Engineer
            </span>
            <div className="flex flex-col justify-start items-start space-y-10">
              <div className="flex gap-3 justify-center items-center">
                <img src="./../../icons/React.svg" alt="" />
                <span>React JS</span>
              </div>  
              <div className="flex gap-3 justify-center items-center">
                <img src="./../../icons/Next.svg" alt="" />
                <span>Next JS</span>
              </div>  
              <div className="flex gap-3 justify-center items-center">
                <img src="./../../icons/Figma.svg" alt="" />
                <span>Figma JS</span>
              </div>  
              <div className="flex gap-3 justify-center items-center">
                <img src="./../../icons/Tailwind.svg" alt="" />
                <span>Tailwind JS</span>
              </div>  
            </div>
        </div>

        <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-5 py-7">
          <span className="text-base font-light mb-10">
          Linguagens 
        </span>
        <div className="flex flex-col justify-start items-start space-y-10">
          <div className="flex gap-3 justify-center items-center">
            <img src="./../../icons/Typescript.svg" alt="" />
            <span>Typescript</span>
          </div>  
          <div className="flex gap-3 justify-center items-center">
            <img src="./../../icons/JavaScript.svg" alt="" />
            <span>Javascript</span>
          </div>   
        </div>
        </div>

        <div className="flex flex-col items-start justify-start border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-5 py-7">
        <span className="text-base font-light mb-10">
         Outros 
        </span>
        <div className="flex flex-col justify-start items-start space-y-10">
          <div className="flex gap-3 justify-center items-center">
            <img src="./../../icons/Github.svg" alt="" />
            <span>Github</span>
          </div>  
        </div>
        </div>
    </div>  
  </section>
    </div>
    
    <footer className="flex flex-col items-center justify-center mb-3">
      <span className="font-normal text-sm">skrodrigo © 2024</span>
    </footer>

  </>
    
  );
}
