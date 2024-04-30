import { NavBarItems } from "@/components/molecule/NavBarItems";

export const NavBar = () => {
  return (
    <nav className="bg-green-500 navbar h-[75.96px]">
      <div className="md:container flex-1 ">
        <div className="flex-1 relative">
          <a href="/" className="mr-10">
            <span className="font-bold text-royal-blue-500 text-lg sm:text-2xl">G</span>
            <span className="font-bold text-orange-500 text-lg sm:text-2xl">U</span>
            <span className="font-bold text-dandelion-500 text-lg sm:text-2xl">A</span>
            <span className="font-bold text-chalky-500 text-lg sm:text-2xl">R</span>
            <span className="font-bold text-bianca-500 text-lg sm:text-2xl">D</span>
            <span className="font-bold text-champagne-500 text-lg sm:text-2xl">E</span>
            <span className="font-bold text-tumbleweed-500 text-lg sm:text-2xl">R</span>
            <span className="font-bold text-dandelion-500 text-lg sm:text-2xl">I</span>
            <span className="font-bold text-champagne-500 text-lg sm:text-2xl">A</span>
            <span> </span>
            <span className="font-bold text-light-blue-500 text-lg sm:text-2xl">D</span>
            <span className="font-bold text-light-blue-500 text-lg sm:text-2xl">E</span>
            <span> </span>
            <span className="font-bold text-orange-500 text-lg sm:text-2xl">D</span>
            <span className="font-bold text-champagne-500 text-lg sm:text-2xl">A</span>
            <span className="font-bold text-royal-blue-500 text-lg sm:text-2xl">N</span>
            <span className="font-bold text-tumbleweed-500 text-lg sm:text-2xl">N</span>
            <span className="font-bold text-chalky-500 text-lg sm:text-2xl">E</span>
          </a>
        </div>
        <div className="flex-none">
          <NavBarItems />
        </div>
      </div>
    </nav>
  );
};

