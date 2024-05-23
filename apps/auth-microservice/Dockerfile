# Étape de base
FROM node:18-alpine as builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers de dépendances depuis la racine du projet
COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY ./apps/auth-microservice/tsconfig.app.json ./apps/auth-microservice/
COPY ./apps/auth-microservice/project.json ./apps/auth-microservice/

# Installer les dépendances
RUN npm install

# Copier tous les fichiers sources du projet dans le répertoire de travail
COPY . .

# Compiler l'application TypeScript
RUN npm run build:auth-microservice

# Étape de production
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist/apps/auth-microservice ./dist

# Exposer le port sur lequel le microservice va écouter
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "dist/main"]
