FROM node:18-alpine AS builder

WORKDIR /usr/app

COPY public/ ./public
COPY src/ ./src
COPY package.json ./

RUN npm install

RUN npm run build

# Remova os arquivos desnecessários após a compilação
RUN rm -rf ./public ./src ./package.json ./node_modules

# Expõe a porta 3000
EXPOSE 3000

# Inicia o servidor usando o pacote serve
CMD ["npx", "serve", "-s", "build"]
