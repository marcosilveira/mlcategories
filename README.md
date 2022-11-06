Teste de consumo da API de categorias do Mercadolivre.
Será feita a importação das categorias e as armazenando em database.
Possui um exemplo pratico de navegação entre as categorias.

O projeto foi desenvolvido utilizando Laravel 9 no backend e ReactJs no frontend, tudo modularizado em Docker.

Para rodar o projeto execute: ./backend/vendor/bin/sail up -d

Após o download/execução dos containers execute o seguinte comando para faer as Migrations: docker-compose exec laravel.test php artisan migrate

No primeiro uso deverá ser feita a importação das categorias e para isso basta clicar no botão e aguardar o termino.

Poderá ver o resultado acessando: http://localhost:3000
