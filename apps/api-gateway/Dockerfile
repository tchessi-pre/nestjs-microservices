# Utiliser l'image de base Node.js
FROM node:14

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les autres fichiers du projet
COPY . .

# Compiler l'application TypeScript en JavaScript
RUN npm run build

# Exposer le port sur lequel le service va écouter
EXPOSE 3000

# Lancer l'application
CMD ["node", "dist/main"]
