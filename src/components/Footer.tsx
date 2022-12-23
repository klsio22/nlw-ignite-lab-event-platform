export function Footer() {
  return (
    <footer
      className='w-full bg-transparent text-xs'
    >
      <div className='p-6 flex items-center justify-between border-gray-600 border-t-2 mx-6'>
        <div className='flex gap-5 items-center'>
          <img src='/src/assets/logo-rockeat.svg' alt='logo rocketseat' />
          <span>Rocketseat - Todos os direitos reservados</span>
        </div>
        <span>Políticas de privacidade</span>
      </div>
    </footer>
  );
}
