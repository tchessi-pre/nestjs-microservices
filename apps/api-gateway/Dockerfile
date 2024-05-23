# Étape de base
FROM node:18-alpine as builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers de dépendances depuis la racine du projet
COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY ./apps/api-gateway/tsconfig.app.json ./apps/api-gateway/
COPY ./apps/api-gateway/project.json ./apps/api-gateway/

# Installer les dépendances
RUN npm install

# Copier tous les fichiers sources du projet dans le répertoire de travail
COPY . .

# Compiler l'application TypeScript
RUN npm run build:api-gateway

# Étape de production
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist/apps/api-gateway ./dist

# Exposer le port sur lequel le microservice va écouter
EXPOSE 4000

# Commande pour démarrer l'application
CMD ["node", "dist/main"]

