up:
	docker-compose kill www 
	docker-compose up -d --force-recreate www

install:
	docker-compose run --rm www "npm install" 

build:
	docker-compose run --rm www 'npm run build'
	rm -fr $(PWD)/docs
	cp -vr www/public $(PWD)/docs

into:
	docker-compose exec www bash

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .