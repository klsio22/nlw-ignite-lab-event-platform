import { Link } from "react-router-dom";

export function UserNoAuth() {
  return (
    <div className="flex flex-col center gap-5 p-2">
      <h1 className='text-5xl md:text-2xl lg:text-3xl'> Não há registro de usuário para acessar essa página</h1>
      <Link to='/' className="text-center text-2xl text-blue-500 md:text-lg lg:text-xl">Clique aqui para voltar para página de registro</Link>
    </div>
  );
}
