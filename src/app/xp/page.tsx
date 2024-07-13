import CardXp from "../components/cards/CardXp"

const page = () => {
  return (
    
    <div>

      <div className='flex flex-col items-center justify-center mt-12 space-y-8'>
        <span className='text-5xl font-semibold md:text-6xl'>Formações</span>
        <p className='text-center mx-5'>Obtenha <b>informações</b> sobre minhas formações.
        </p>
      </div>

      <div className='flex flex-col justify-center items-center  mt-16 mx-auto'>

        <CardXp title='Eeep Anop' description='Tecnico Em Informatica' date='Jan 2020 - Dez 2022' url=""/>
        <CardXp title='Uninassau' description='Bacharel em Sistemas de Informação' date='Jan 2023 - Jan 2026' url=""/>
        
      </div>

      <div className='flex flex-col items-center justify-center mt-12 space-y-8'>
        <span className='text-5xl font-semibold md:text-6xl'>Cursos</span>
        <p className='text-center mx-5'>Obtenha <b>informações</b> sobre meus cursos concluídos.
        </p>
      </div>

      <div className='flex flex-col justify-center items-center  mt-16 mx-auto'>

        <CardXp title='Rocketseat' description='NLW Journey - Nodejs' date='jul 2024' url="https://app.rocketseat.com.br/certificates/2b4c05f5-3e73-4f05-8d58-4d9955a0dd6d"/>
        <CardXp title='Rocketseat' description='NLW Journey - Reactjs' date='Jul 2024' url="https://app.rocketseat.com.br/certificates/6cff6296-055f-4a77-aa7a-aaac79669baa"/>
        
      </div>

    </div>
       
  )
}

export default page