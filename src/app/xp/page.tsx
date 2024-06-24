import CardXp from "../components/cards/CardXp"

const page = () => {
  return (
    
    <div>

      <div className='flex flex-col items-center justify-center mt-12 space-y-8'>
        <span className='text-5xl font-semibold md:text-6xl'>Educação</span>
        <p className='text-center mx-5'>Obtenha <b>informações</b> sobre minhas formações e <b>experiencias</b> como <b>desenvolvedor</b>.
        </p>
      </div>

      <div className='flex flex-col justify-center items-center  mt-16 mx-auto'>

        <CardXp title='Eeep Anop' description='Tecnico Em Informatica' date='Jan 2020 - Dez 2022'/>
        <CardXp title='Uninassau' description='Bacharel em Sistemas de Informação' date='Jan 2023 - Jan 2026'/>
        
      </div>

    </div>
       
  )
}

export default page