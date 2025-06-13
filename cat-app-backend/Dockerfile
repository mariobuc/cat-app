# Etapa base
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Compilar TypeScript a JavaScript -  Generar dist/main.js 
RUN npm run build      

# Expone el puerto
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "run", "start:prod"]
