import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';
import { Footer } from '../components/Footer';
import { ReactJsIcon } from '../components/ReactJsIcon';
import { CodeMockup } from '../components/CodeMockup';
import { LogoMobile } from '../components/LogoMobile';
import { TypesLogos } from '../components/TypesLogos';

export default function Subscriber() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscriber(event: FormEvent) {
    event.preventDefault();

    //console.log(name, email);
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event/lesson/abertura-do-evento-ignite-lab');
  }

  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto z-10 lg:flex-col lg:gap-8 md:flex-col md:gap-8'>
        <div className='max-w-[640px] lg:text-center lg:px-5 md:text-center md:px-5 '>

          <div className='flex lg:justify-center md:justify-center'>
            <TypesLogos />
          </div>

          <h1 className='mt-8 text-[2.5rem] leading-tight md:text-2xl'>
            Construa uma{' '}
            <strong className='text-blue-500'>aplicação completa</strong> , do
            zero, com <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className='p-8 bg-gray-700 border border-gray-500 rounded lg:w-3/4 md:w-full'>
          <strong className='text-2xl mb-6 block'>
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscriber}
            className='flex flex-col gap-2 w-full'
          >
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Seu nome completo'
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='email'
              placeholder='Digite seu e-mail'
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type='submit'
              disabled={loading}
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-slate-700 transition-colors disabled:opacity-50'
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <div className='absolute mt-5 z-0'>
        <ReactJsIcon />
      </div>

      <CodeMockup />

      <Footer />
    </div>
  );
}
