import CardContato from "../components/cards/CardContact"

const page = () => {
  return (

    <div className="flex flex-col">

      <div className='flex flex-col items-center justify-center mt-12 space-y-8'>
        <span className='text-5xl font-semibold md:text-6xl'>Contatos</span>
        <p className='text-center mx-5'>Se sinta a vontade para entrar em <b>contato</b> comigo, estou disponivel em
          todas as redes <b>socias</b>.  </p>
      </div>

      <div className='lg:grid lg:grid-cols-2 lg:gap-10 mt-16 flex flex-col mx-auto'>  

        <CardContato title='Email' description='rodrigoa0987@gmail.com' link='https://gmail.com'/>
        <CardContato title='Linkedln' description='linkedin.com/skrodrigo' link='https://linkedin.com/in/skrodrigo'/>
        <CardContato title='Telefone' description='+55 88 9 9274-4891' link='https://wa.me/5588992744891'/>
        <CardContato title='GitHub' description='github.com/skrodrigo' link='https://github.com/skrodrigo'/>
        
      </div>

    </div>

  )
}

export default page