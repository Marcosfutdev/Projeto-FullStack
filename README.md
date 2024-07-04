# Projeto-FullStack
Projeto FullStack de um sistema de cadastro de carros!

O back-end desse sistema foi feito com uma API em node com express e utilizando um banco de dados MongoDB (não-relacional).
O front-end foi feito em React, sendo criado através do Vite.
O sistema é um simples CRUD. Onde temos o cadastro de carros (POST), a leitura desses dados (GET), a modificação parcial desses dados (PATCH) e a delação de um certo registro (DELETE).

Como testar o projeto?
Parte 1: Baixando a parte do front-end!
1. Clone essa parte do projeto, que é a parte do front, a API irei disponiblizar no meu próximo repositório!;
2. Dentro da pasta do projeto baixe todas as dependências, através de " npm install ";
3. Depois rode o comando " npm run dev";
4. Depois disso você verá a parte do front-end;

Parte 2: Baixando a parte do back-end!
1. Clone o meu próximo repositório que terá o nome de "API sistema de carros";
2. Dentro da pasta do projeto baixe todas as dependências, através de "npm install";
3. Para você conseguir cadastrar dados, modificar e deletar, você terá que criar um banco de dados em MongoDB, através do site do MongoDB, só você digitar mongoDB, você deve criar uma conta se você não tiver. Depois de criar uma conta,
   você deve criar um banco de dados como ele solicita lá,
   um simples, grátis, você só terá que lembrar do seu usuário e senha para se conectar com a API. Através do link que ele disponibilizar, você vai no arquivo da API "connectt.js" que está dentro da pasta src/database, lá você deve colocar esse link no lugar
   do meu que está lá,
   modificando só a parte onde tem "<password>", você deve apagar apenas <password/> e colocar sua senha, a qual você criou para se conectar com o banco de dados, verifique se também está o nome do seu usuário do banco.
4. Dentro da pasta, você deve rodar o servidor, através do comando "npm run start:dev", se você já tiver algo rodando na porta 3030, mude a porta, se não, tudo ok!

Com isso, você poderá testar tranquilamente esse sistema, lembre-se de rodar o front-end e o back-end ao mesmo tempo, para não ter problema dos dados não serem buscados pela API!
"npm run dev" na pasta do front-end;
"npm run start:dev" na pasta do back-end;
