# exercise-front

Front-end utilizado para realizar busqueda y visualización de productos a partir del back-end [exercise-server](https://github.com/ChechiB/exercise-server).

## Como correr el back-end
- clonar el siguiente [repositorio](https://github.com/ChechiB/exercise-server)
- crear archivo .env en la raiz del proyecto con las siguientes variables
```
SERVER_PORT=3000
APP_ID=<your_ml_app_id>
SECRET_KEY=<your_secret_ml_key>
```
- npm install
- npm start
## Como correr el front-end
- crear archivo .env en la raiz del proyecto con las siguientes variables
```
REACT_APP_API_URL=http://localhost:3000/api
PORT=4000
```
- npm install
- npm start

## Funcionalidades
- Listar productos mediante la barra de busqueda
- Acceder al detalle de los productos

## Funcionalidades a desarrollar
- Manejo de errores y validaciones del back-end
- Validar los inputs del usuario
- Implementar maquetación y estilos



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

