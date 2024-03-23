interface INavigationOption {
  tittle: string;
  path: string;
  icon: string;
}

export const navigationOptions: INavigationOption[] = [
  {
    tittle: "Inicio",
    path: "/",
    icon: "/icons/home_icon.svg",
  },
  {
    tittle: "Consultar Reporte",
    path: "/contultar-reporte",
    icon: "/icons/consultar_reporte_icon.svg",
  },
  {
    tittle: "Sobre Nosotros",
    path: "/sobre-nosotros",
    icon: "/icons/sobre_nosotros_icon.svg",
  },
];
