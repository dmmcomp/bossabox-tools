
# VUTTR (Very Useful Tools to Remember) 
A aplicação trata-se de um serviço responsável pelo gerenciamento de um repositório de ferramentas, permitindo o armazenamento, listagem e remoção de das mesmas contendo as seguintes informações: nomes, links, descrições e tags.

### Tecnologias Utilizadas
+ NodeJS + Express
+ MongoDB
+ Jest


### Documentação
A documentação da API está disponível no repositório publico do SwaggerHub, podendo ser acessada clicando neste [LINK](https://app.swaggerhub.com/apis/dmmcomp/api-very_useful_tools_to_remember/1.0.0)..


### Instalação
````
curl -LOk https://github.com/dmmcomp/bossabox-tools/archive/master.zip
unzip master.zip
cd bossabox-tools-master
npm install
````

Será necessário configurar suas credenciais do MongoDB utilizando os arquivos ```` .env```` e  ```` .env.test```` para seus ambientes de Produção e Desenvolvimento respectivamente.

### Inicialização da Aplicação
#### Produção
````
npm start
````

#### Desenvolvimento
````
npm run dev
````




A API está configurada para inicializar na posta  ````3000```` por padrão, podendo ser acessada através do link  ````http://localhost:3000/tools```` .

### Testing
Os testes unitários da API estão armazenados no diretório ````__test__/````.

Para realizar a execução dos testes:

````
npm run test
````




### Author
[Diego Magalhães de Melo](https://github.com/dmmcomp).