# Nome do Projeto

> Descrição do projeto


## Ferramentas

- Task Runner: [Gulp](http://gulpjs.com/)
- CSS Preprocessor: [Sass](http://sass-lang.com/)
- Framework CSS: [bootstrap 4.0](http://getbootstrap.com/)

## Execute o projeto localmente

**1 -** Prepare o ambiente:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone o projeto e instale as dependências:

```sh
$ git 
$ cd 
$ npm install
```

## Estrutura de pastas

	├── README.md
	├── LICENSE.md
	├── CONTRIBUTING.md
	├── out/
	├── src/
	|   ├── icons-svg/
	|   ├── img/
	|   ├── sass/
	|   |   ├── base/
	|   |   └── biblioteca/
	|   |   └── components/
	|   |   └── include/
	|   |   └── paginas/
	|   |   └── geral.sass
	|   ├── sprite-svg/
	├── gulpfile.js
	├── package.json
	└── .gitignore


## Automatizando tarefas (task gulp)

- `$ gulp imagemin`: minificar as imagens.
- `$ gulp server`: Criar um servidor local, watch nos arquivos e atualização da página.


