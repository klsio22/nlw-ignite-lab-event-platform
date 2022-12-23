export function Footer() {
  return (
    <footer
      className='w-full py-5 flex items-center justify-between bg-blur  
    border-b border-gray-600 p-6 text-xs'
    >
      <div className='flex gap-3 items-center'>
        <img src='/src/assets/logo-rockeat.svg' alt='logo rocketseat' />
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>
      <span>Políticas de privacidade</span>
    </footer>
  );
}
