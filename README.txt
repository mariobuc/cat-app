Cat App - Fullstack

Aplicación web fullstack con Angular, Node.js, Express y MongoDB. Utiliza [TheCatAPI](https://thecatapi.com/) para mostrar razas e imágenes de gatos.

Tecnologías

- **Frontend:** Angular + Angular Material + NGINX
- **Backend:** Node.js + Express + MongoDB
- **DB:** MongoDB
- **Tests:** Jest + Angular Testing
- **Orquestación:** Docker + Docker Compose

Estructura del Proyecto

project-root/
├── docker-compose.yml
├── cat-app-backend/
│ ├── Dockerfile
│ └── ...
├── cat-app/
│ ├── Dockerfile
│ └── ...

Cómo ejecutar

1. Clonar el repositorio

git clone https://github.com/tu-usuario/cat-app.git
cd cat-app

2. Ejecutar la aplicación con Docker Compose
docker-compose up --build
Esto iniciará:
MongoDB (puerto 27017)
Backend (puerto 3000)
Frontend (puerto 80)

Pruebas
Backend
cd cat-app-backend
npm run test

Frontend
cd cat-app
ng test

Seguridad
El acceso a endpoints protegidos requiere token JWT.

Auth
Endpoint de registro: POST /register
Endpoint de login: POST /login

Acceder a la app
http://localhost:80

Autor
Mario Bucheli



