# Colette #
## Installation ##

pré-requis: 
avoir docker avec docker-compose installé

```bash
git clone https://github.com/mlle-fantasia/horloge-colette.git
cd horloge-colette
docker-compose build
docker-compose up -d
```
si vous utilisez https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion.git vous devez, avant de lancer le build
```bash
cp .env.dist .env
```
modifier les valeurs comme ce-ci
```bash
VIRTUAL_HOST=votre nom de domaine
LETSENCRYPT_HOST=votre nom de domaine
letsencrypt_email=email@gmail.com
REDIRECT_WWW=true
```
