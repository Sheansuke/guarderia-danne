export const NavBar = () => {
  return (
    <nav className="bg-green-500 p-4 h-15">
      <div className="container flex justify-between">
        <div className="flex">
          <a href="/">
            <span className="font-bold text-royal-blue-500 text-2xl">G</span>
            <span className="font-bold text-orange-500 text-2xl">U</span>
            <span className="font-bold text-dandelion-500 text-2xl">A</span>
            <span className="font-bold text-chalky-500 text-2xl">R</span>
            <span className="font-bold text-bianca-500 text-2xl">D</span>
            <span className="font-bold text-champagne-500 text-2xl">E</span>
            <span className="font-bold text-tumbleweed-500 text-2xl">R</span>
            <span className="font-bold text-dandelion-500 text-2xl">I</span>
            <span className="font-bold text-champagne-500 text-2xl">A</span>
            <span> </span>
            <span className="font-bold text-light-blue-500 text-2xl">D</span>
            <span className="font-bold text-light-blue-500 text-2xl">E</span>
            <span> </span>
            <span className="font-bold text-orange-500 text-2xl">D</span>
            <span className="font-bold text-champagne-500 text-2xl">A</span>
            <span className="font-bold text-royal-blue-500 text-2xl">N</span>
            <span className="font-bold text-tumbleweed-500 text-2xl">N</span>
            <span className="font-bold text-chalky-500 text-2xl">E</span>
          </a>
        </div>
        <div className="flex">
          <a href="/login" className="font-bold text-green-950 text-lg">
            Inicio
          </a>
          <a href="/register" className="font-bold ml-4 text-green-950 text-lg">
            Consultar Reporte
          </a>
          <a href="/register" className="font-bold ml-4 text-green-950 text-lg">
            Sobre Nosotros
          </a>
        </div>
      </div>
    </nav>
  );
};
