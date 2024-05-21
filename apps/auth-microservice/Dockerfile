# Étape de base
FROM node:16-alpine as builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers sources du projet dans le répertoire de travail
COPY . .

# Compiler l'application TypeScript
RUN npm run build

# Étape de production
FROM node:16-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Exposer le port sur lequel le microservice va écouter
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "dist/main"]
