# alpine это урезанная версия любого образа которая весит меньше
FROM node:13.12.0-alpine

#любой путь по которому докер контейнр будет определять корневую папку
WORKDIR /usr/myapp

# команда которая скопирует package*.json файлы в корневую папку докер-контейнера т.е. /usr/myapp 
COPY package*.json ./

#устанавливаем внутрь контейнера все зависимости node_modules
RUN npm install

# копируем остальные файлы из локальной папки внутрь доке-контейнера
# кроме папки node_modules, для этого создаем .dokerignore
COPY . .

# запускаем скрипт который сбилдит продакшн версию
RUN npm run build

# далее устанавливаем пакет serve внутрь контейнера чтоб он следил за сбилженой страницей
RUN npm install -g serve