import { useNavigate } from 'react-router-dom';
import { useCreateSubscriberMutation } from '../graphql/generated';
import { Footer } from '../components/Footer';
import { ReactJsIcon } from '../components/ReactJsIcon';
import { CodeMockup } from '../components/CodeMockup';
import { TypesLogos } from '../components/TypesLogos';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormValues = {
  name: string;
  email: string;
};

export default function Subscriber() {
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createSubscriber({
        variables: {
          name: data.name,
          email: data.email,
        },
      });

      navigate('/event/lesson/abertura-do-evento-ignite-lab');
    } catch (error) {
      setAlert(true);
    }
  });

  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      {alert && (
        <span className='absolute w-full h-[1000px] bg-zinc-700 opacity-70 z-40'></span>
      )}
      {alert && (
        <div className='flex items-center justify-center'>
          <div className='bg-gray-700 absolute z-50 top-1/4 w-1/3 h-1/3 rounded-lg flex justify-center items-center flex-col gap-10 p-3 text-center lg:w-2/4 md:w-80 md:top-[60%]'>
            <span className='text-2xl'>
              Email ou nome já existe no cadastrado
            </span>
            <button
              className='bg-green-500 mt-2 p-2 font-bold text-xl'
              onClick={() => setAlert(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
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

          <form onSubmit={onSubmit} className='flex flex-col gap-2 w-full'>
            <input
              className='bg-gray-900 rounded px-5 h-14'
              {...register('name', {
                required: true,
              })}
              placeholder='Seu nome completo'
            />
            {errors.name?.type === 'required' && (
              <span className='text-red-500'>Por favor insira seu nome</span>
            )}

            <div className='flex flex-col gap-4'>
              <input
                className='bg-gray-900 rounded px-5 h-14'
                placeholder='Digite seu e-mail'
                {...register('email', {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
              />
              {errors.email?.type === 'required' && (
                <span className='text-red-500'>Por favor insira o email</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className='text-red-500'>Email inválido</span>
              )}
            </div>

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
