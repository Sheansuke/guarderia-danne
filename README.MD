Guardería de Danne
==================

Este proyecto consta de un frontend y un backend para una aplicación de guardería. El frontend está construido con Next.js y el backend está construido con Strapi, que se conecta a una base de datos alojada en Supabase.

Estructura del Proyecto
-----------------------
guarderia-danne/
-   frontend/: Contiene el código fuente del frontend construido con Next.js.
-   backend/: Contiene el código fuente del backend construido con Strapi.

Instrucciones de Uso
--------------------

### Frontend (Next.js)

1.  Instalación de Dependencias: Desde la raíz del proyecto, navega a la carpeta `frontend` y ejecuta el siguiente comando para instalar las dependencias:
    
    `cd frontend npm install or yarn install`

2.  Ejecución del Servidor de Desarrollo: Una vez que las dependencias se hayan instalado correctamente, puedes iniciar el servidor de desarrollo local ejecutando:

    `npm run dev or yarn dev`

    Esto iniciará el servidor de desarrollo de Next.js y podrás acceder a la aplicación en `http://localhost:3000`.

### Database (Docker)

1. Antes de iniciar el backend, asegurese de tener instalado Docker en su equipo, si no lo tiene instalado puede descargarlo desde el siguiente enlace: https://www.docker.com/products/docker-desktop posteriormente posicionese en la carpeta principal 'cd guarderia-danne' y ejecute el siguiente comando para iniciar la base de datos en un contenedor de Docker:

    `docker-compose up`

    Esto iniciará el contenedor de Docker con la base de datos de postgres y podrá acceder a la base de datos en `http://localhost:5432` y asignar las variables de entorno correspondientes 
    al backend.

### Backend (Strapi)

1.  Instalación de Dependencias: Desde la raíz del proyecto, navega a la carpeta `backend` y ejecuta el siguiente comando para instalar las dependencias:

    `cd backend npm install or yarn install`

2.  Configuración de Strapi: Antes de iniciar el backend, asegúrate de configurar adecuadamente Strapi para conectarse a tu base de datos en Supabase. Esto puede incluir configurar las credenciales de conexión en `config/database.js`.

3.  Ejecución del Servidor de Strapi: Una vez configurado, puedes iniciar el servidor de Strapi ejecutando:

    `npm run develop or yarn develop`

    Esto iniciará el servidor de Strapi y podrás acceder al panel de administración en `http://localhost:1337/admin`.

