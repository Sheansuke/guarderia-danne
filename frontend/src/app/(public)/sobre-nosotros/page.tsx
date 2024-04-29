export default async function SobreNosotros() {
  return (
    <section className="container p-8 mt-4 md:mt-16">
      <article>
        <QuienesSomos />
      </article>

      <article className="mt-24">
        <Horarios />
      </article>

      <article className="mt-24">
        <QueHaceMiPeque />
      </article>

      <article className="mt-24">
        <PuedoEscribirFrecuentemente />
      </article>

      <article className="mt-24">
        <IncluyeComida />
      </article>
    </section>
  );
}

const QuienesSomos = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 ">
    <div className="md:w-1/2">
      <h1 className="md:text-start text-center text-orange-950 font-bold text-[2rem] text-opacity-90 mb-2">Quienes Somos</h1>
      <p className="text-orange-800 font-bold text-opacity-90 text-[1.5rem] md:text-start text-center ">
        Somos una guarderia con espacios preparados para favorecer el desarrollo fisico, cognitivo y social de tu peque
      </p>
    </div>

    <div className="skeleton w-full md:w-[570px] h-[380px]"></div>
  </div>
);

const Horarios = () => (
  <div className="flex flex-col-reverse  md:flex-row items-center md:items-start gap-8 md:gap-16 ">
    <div className="skeleton w-full md:w-[570px] h-[380px]"></div>

    <div className="md:w-1/2">
      <h2 className="md:text-start text-center text-orange-950 font-bold text-[2rem] text-opacity-90 mb-2">Horario y Ubicacion</h2>

      <div className="flex flex-col md:flex-row gap-2">
        <strong className="text-orange-900 font-bold text-opacity-90 text-[1.5rem] md:text-start text-center">Horario: </strong>
        <p className="text-orange-800 font-bold text-opacity-90 text-[1.5rem] md:text-start text-center">Lunes a Viernes | 7:20AM - 6:00PM</p>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <strong className="text-orange-900 font-bold text-opacity-90 text-[1.5rem] md:text-start text-center">Ubicacion: </strong>
        <p className="text-orange-800 font-bold text-opacity-90 text-[1.5rem] md:text-start text-center">
          Ensanche Quisqueya | Calle Doctor Defillo #111, calle sin salida en medio del chin chin y la plaza
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <strong className="text-orange-900 font-bold text-opacity-90 text-[1.5rem] md:text-start text-center">Numeros: </strong>
        <p className="text-orange-800 font-bold text-opacity-90 text-[1.5rem] md:text-start text-center">829-830-0448</p>
      </div>
    </div>
  </div>
);

const QueHaceMiPeque = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 ">
    <div className="md:w-1/2">
      <h2 className="md:text-end text-center text-orange-950 font-bold text-[2rem] text-opacity-90 mb-2">¿Qué hace mi peque en la guardería?</h2>
      <p className="text-orange-800 font-bold text-opacity-90 text-[1.5rem] md:text-end text-center ">
        Tu peque juega, duerme, come, conoce nuevos amigos, ve peliculas educativas, entre otras cosas para ayudar a su desarrollo.
      </p>
    </div>

    <div className="skeleton w-full md:w-[570px] h-[380px]"></div>
  </div>
);

const PuedoEscribirFrecuentemente = () => (
  <div className="flex flex-col-reverse  md:flex-row items-center md:items-start gap-8 md:gap-16 ">
    <div className="skeleton w-full md:w-[570px] h-[380px]"></div>

    <div className="md:w-1/2">
      <h2 className="md:text-start text-center text-orange-950 font-bold text-[2rem] text-opacity-90 mb-2">Puedo escribir frecuentemente y pedir fotos y videos de mi bebe?</h2>
      <p className="text-orange-800 font-bold text-opacity-90 text-[1.5rem] md:text-start text-center ">
        Si, incluso si no la pides estaremos al pendiente de mandarte el dia a dia de tu bebe para que estes tranquilo
      </p>
    </div>
  </div>
);

const IncluyeComida = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 ">
    <div className="md:w-1/2">
      <h2 className="text-center md:text-end text-orange-950 font-bold text-[2rem] text-opacity-90 mb-2">¿Incluye las comidas?</h2>
      <p className="text-orange-800 font-bold text-opacity-90 text-[1.5rem] md:text-end text-center ">Si, si asi lo deseas tu bebe tendra almuerzo todos los dias</p>
    </div>

    <div className="skeleton w-full md:w-[570px] h-[380px]"></div>
  </div>
);
