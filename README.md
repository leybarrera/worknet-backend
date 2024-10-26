# **WorkNet**

**WorkNet** es una red de **networking** diseñada para el municipio de **La Maná**, un cantón ubicado en Ecuador. Su objetivo es conectar a los ciudadanos, empresas y profesionales locales para facilitar la colaboración, fomentar el crecimiento económico y crear nuevas oportunidades laborales dentro de la comunidad.

---

## **Tecnologías Usadas**

El backend de **WorkNet** está construido con las siguientes tecnologías:

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework web rápido y minimalista para Node.js.
- **Sequelize**: ORM para trabajar con bases de datos SQL de manera más sencilla.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar la información.

## **Inicio del Proyecto**

Para iniciar el proyecto de **WorkNet**, se utilizó el siguiente comando para crear un archivo `package.json` inicial:

```bash
npm init -y
```

## **Modificar el archivo `package.json`**

Después de inicializar el proyecto, es necesario realizar algunas modificaciones al archivo `package.json` para que se adapte mejor a las necesidades del proyecto.

1. Abre el archivo `package.json` y añade las siguientes líneas:

   ```json
   {
     "type": "module",
     "scripts": {
       "dev": "node --watch index.js"
     }
   }
   ```

### **Explicación de las Modificaciones**

- **`"type": "module"`**: Esta línea indica que el proyecto utilizará el sistema de módulos ECMAScript, permitiendo el uso de la sintaxis `import` y `export` en lugar de `require`. Esto es especialmente útil para mantener un código más moderno y organizado.

- **`"scripts"`**: La sección de scripts permite definir comandos personalizados que pueden ser ejecutados a través de npm. En este caso, se añade un script llamado **dev** que ejecuta el archivo `index.js` y observa los cambios en tiempo real:

  ```bash
  npm run dev
  ```

## **Paquetes Instalados**

A continuación, se listan los principales paquetes utilizados en este proyecto:

- **bcryptjs**: ^2.4.3 - Para el hashing de contraseñas.
- **cloudinary**: ^2.5.1 - Gestión y almacenamiento de imágenes en la nube.
- **cookie-parser**: ^1.4.7 - Análisis de cookies.
- **cors**: ^2.8.5 - Permitir solicitudes desde otros dominios.
- **dotenv**: ^16.4.5 - Manejo de variables de entorno.
- **express**: ^4.21.1 - Framework para el desarrollo del servidor web.
- **jsonwebtoken**: ^9.0.2 - Autenticación basada en tokens (JWT).
- **morgan**: ^1.10.0 - Logger de solicitudes HTTP.
- **nodemailer**: ^6.9.15 - Envío de correos electrónicos.
- **pg**: ^8.13.0 - Cliente de PostgreSQL para Node.js.
- **pg-hstore**: ^2.3.4 - Serialización de objetos JSON para PostgreSQL.
- **sequelize**: ^6.37.4 - ORM para manejar la base de datos.

---

## **Instalación de Paquetes**

Para instalar los paquetes necesarios para el proyecto, se recomienda usar la flag `-E`. Esta flag asegura que se instalen las versiones exactas de los paquetes, evitando que se actualicen automáticamente a nuevas versiones que podrían introducir cambios incompatibles.

Para instalar los paquetes, ejecuta el siguiente comando:

```bash
npm i -E bcryptjs cloudinary cookie-parser cors dotenv express jsonwebtoken morgan nodemailer pg pg-hstore sequelize
```

## **Explicación del Código en `src/server.js`**

El archivo `server.js` es el punto de entrada para la configuración del servidor utilizando Express. A continuación se detalla el código:

```javascript
import express, { json } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

const server = express()

server.use(json({ limit: '50mb' }))
server.use(cookieParser())
server.use(logger('dev'))
server.use(cors())

export default server
```

### Desglose de la Línea de Código

- **import**: Se utiliza para importar módulos o componentes de otros archivos o paquetes en JavaScript.

- **express**:

  - El módulo principal que se importa. `express` es un framework para aplicaciones web en Node.js que proporciona características para crear aplicaciones web y APIs.
  - Permite crear un servidor y manejar solicitudes y respuestas.

- **{ json }**:

  - Indica la importación de la función `json` del módulo `express`.
  - `json` se utiliza para analizar cuerpos de solicitudes en formato JSON, facilitando el manejo de datos en este formato.

- **from 'express'**:

  - Especifica el origen de la importación, que en este caso es el paquete `express`.

- **import cookieParser from 'cookie-parser'**:

  - Importa el middleware `cookie-parser`, que permite leer las cookies de las solicitudes HTTP.

- **import logger from 'morgan'**:

  - Importa el middleware `morgan`, que se utiliza para registrar las solicitudes HTTP en la consola, lo que es útil para el desarrollo.

- **import cors from 'cors'**:

  - Importa el middleware `cors`, que habilita el uso de CORS (Cross-Origin Resource Sharing), permitiendo que el servidor acepte solicitudes de diferentes orígenes.

- **const server = express()**:

  - Crea una instancia del servidor Express y la almacena en la variable `server`.

- **server.use(json({ limit: '50mb' }))**:

  - Aplica el middleware `json` de Express, permitiendo que el servidor analice solicitudes con cuerpos en formato JSON, con un límite de tamaño de 50 megabytes.

- **server.use(cookieParser())**:

  - Aplica el middleware `cookie-parser`, que analiza las cookies de las solicitudes HTTP y las añade al objeto `req.cookies`.

- **server.use(logger('dev'))**:

  - Aplica el middleware `morgan` en modo de desarrollo, registrando las solicitudes HTTP en la consola.

- **server.use(cors())**:

  - Aplica el middleware `cors`, habilitando CORS para permitir solicitudes de diferentes dominios.

- **export default server**:
  - Exporta la instancia del servidor para que pueda ser utilizada en otras partes de la aplicación.

## Levantando el Servidor en `index.js`

Después de crear el servidor en el archivo de configuración, me dirijo a `index.js`, que es el punto de entrada de la aplicación. En este archivo, se levanta el servidor.

Aquí está el código que se utiliza:

```javascript
import server from './src/server.js'
server.listen(3000, () => {
  console.log(`Server running in DEVELOPMENT mode on port 3000`)
})
```

### Desglose del Código

- **import server from './src/server.js'**:

  - Importa la instancia del servidor creada en el archivo `server.js` en la carpeta `src`.

- **server.listen(3000, () => {...})**:

  - Inicia el servidor y lo hace escuchar en el puerto especificado: **3000**.

- **() => {...}**:

  - Función de callback que se ejecuta una vez que el servidor comienza a escuchar.

- **console.log(`Server running in DEVELOPMENT mode on port 3000`)**:
  - Imprime un mensaje en la consola que indica el entorno **DEVELOPMENT** y el puerto **3000** en el que está escuchando el servidor.

## Creación del Archivo `.env`

Para configurar las variables de entorno en tu aplicación, debes crear un archivo llamado `.env` en la raíz de tu proyecto. Este archivo contendrá información sensible que no debe ser expuesta en el código fuente. A continuación, se presentan las claves que debes incluir en el archivo `.env`:

```plaintext
DB_DEV=                 # Cadena de conexión a la base de datos para el entorno de desarrollo
DB_PROD=                # Cadena de conexión a la base de datos para el entorno de producción
CLOUDINARY_KEY=         # Clave de la cuenta de Cloudinary
CLOUDINARY_NAME=        # Nombre de la cuenta de Cloudinary
CLOUDINARY_API_SECRET=  # Secreto de la API de Cloudinary
SECRET_WORD=            # Palabra secreta utilizada para la seguridad de la aplicación
```

## Creación de `src/config/envs.config.js`

En la carpeta `src/config`, debes crear un archivo llamado `envs.config.js`. Este archivo se encargará de cargar y configurar las variables de entorno necesarias para tu aplicación. A continuación, se presenta el código que debes incluir:

```javascript
import 'dotenv/config'

const {
  PORT = 3000, // Puerto en el que se ejecutará la aplicación (valor predeterminado: 3000)
  NODE_ENV = 'development', // Entorno de ejecución de la aplicación (valor predeterminado: 'development')
  DB_DEV, // Cadena de conexión a la base de datos para el entorno de desarrollo
  DB_PROD, // Cadena de conexión a la base de datos para el entorno de producción
  SECRET_WORD, // Palabra secreta utilizada para la seguridad de la aplicación
  CLOUDINARY_KEY, // Clave de la cuenta de Cloudinary
  CLOUDINARY_NAME, // Nombre de la cuenta de Cloudinary
  CLOUDINARY_API_SECRET, // Secreto de la API de Cloudinary
} = process.env

const CONNECTION = {
  URI: NODE_ENV === 'production' ? DB_PROD : DB_DEV, // Selecciona la cadena de conexión según el entorno
  CONFIG:
    NODE_ENV === 'production' // Configuración de la conexión según el entorno
      ? {
          native: false,
          logging: false,
          dialect: 'postgres',
          dialectOptions: {
            ssl: {
              require: true, // Requiere SSL para la conexión en producción
              rejectUnauthorized: false, // Permite conexiones no autorizadas
            },
          },
        }
      : {
          native: false,
          logging: false,
        },
}

const CLOUDINARY_URL = `cloudinary://${CLOUDINARY_KEY}:${CLOUDINARY_API_SECRET}@${CLOUDINARY_NAME}` // URL de Cloudinary

export { PORT, NODE_ENV, CONNECTION, SECRET_WORD, CLOUDINARY_URL } // Exporta las variables y configuraciones
```

## Modificación de `index.js`

Una vez que hemos creado el archivo `.env` y el archivo de configuración `envs.config.js`, debemos actualizar el archivo `index.js` para utilizar estas configuraciones. A continuación se presenta el código modificado:

```javascript
import { PORT, NODE_ENV } from './src/config/envs.config.js' // Importa el puerto y el entorno de configuración
import server from './src/server.js' // Importa la instancia del servidor

server.listen(PORT, () => {
  // Inicia el servidor en el puerto especificado
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`) // Mensaje de éxito al iniciar el servidor
})
```

## Conexión a la Base de Datos en `src/lib/conn.js`

El archivo `conn.js` se encarga de establecer la conexión con la base de datos utilizando Sequelize. A continuación se presenta el código utilizado para esta conexión:

```javascript
import { Sequelize } from 'sequelize' // Importa Sequelize para gestionar la conexión a la base de datos
import { CONNECTION } from '../config/envs.config.js' // Importa la configuración de conexión de envs.config.js

const sequelize = new Sequelize(CONNECTION.URI, CONNECTION.CONFIG) // Crea una nueva instancia de Sequelize con la URI y configuración especificadas

export { sequelize } // Exporta la instancia de Sequelize para ser utilizada en otras partes de la aplicación
```

## Modificación de `index.js`

Una vez que hemos creado el archivo de conexión `conn.js`, así como el archivo `.env` y el archivo de configuración `envs.config.js`, debemos actualizar el archivo `index.js` para utilizar estas configuraciones. A continuación se presenta el código modificado:

```javascript
import { PORT, NODE_ENV } from './src/config/envs.config.js' // Importa el puerto y el entorno de configuración
import { sequelize } from './src/lib/conn.js' // Importa la conexión a la base de datos
import server from './src/server.js' // Importa la instancia del servidor

sequelize
  .sync({
    logging: false,
    force: NODE_ENV === 'development',
    alter: NODE_ENV === 'development',
  }) // Sincroniza la base de datos
  .then(() => {
    console.log(`Database connected in ${NODE_ENV} mode`) // Mensaje de éxito al conectar la base de datos
    server.listen(PORT, () => {
      // Inicia el servidor en el puerto especificado
      console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`) // Mensaje de éxito al iniciar el servidor
    })
  })
  .catch((err) => {
    console.log('Error connecting to database: ', err.message) // Manejo de errores en caso de fallar la conexión
  })
```

## Explicación de las Opciones de Sincronización en Sequelize

En la configuración de sincronización de Sequelize, se utilizan las siguientes opciones:

1. **logging**: `false`

   - Esta opción determina si se deben registrar las consultas SQL ejecutadas por Sequelize en la consola.
   - Al establecerlo en `false`, se desactiva el registro de consultas, lo que puede ser útil en entornos de producción para reducir el ruido en la consola.
   - Si se desea monitorear las consultas en entornos de desarrollo, se puede cambiar a `true` o proporcionar una función personalizada para registrar.

2. **force**: `NODE_ENV === 'development'`

   - Esta opción indica si se deben eliminar y recrear las tablas en la base de datos cada vez que se sincroniza.
   - Al configurarlo de esta manera, se fuerza la recreación de las tablas solo en el entorno de desarrollo (`development`), lo que es útil durante el desarrollo para reflejar rápidamente los cambios en los modelos.
   - En producción, esta opción debería ser `false` para evitar la pérdida de datos y la interrupción del servicio.

3. **alter**: `NODE_ENV === 'development'`
   - Esta opción permite que Sequelize altere las tablas existentes en la base de datos para que coincidan con los modelos definidos, sin eliminarlas.
   - Al establecerlo en `true`, Sequelize realizará las modificaciones necesarias en la estructura de las tablas (como agregar o quitar columnas) sin perder los datos existentes.
   - Es útil en entornos de desarrollo para facilitar el ajuste de modelos, pero debe usarse con precaución en producción.

### Resumen

Estas opciones permiten controlar el comportamiento de la sincronización de Sequelize, proporcionando flexibilidad durante el desarrollo y ayudando a gestionar la estructura de la base de datos de manera segura en entornos de producción.
