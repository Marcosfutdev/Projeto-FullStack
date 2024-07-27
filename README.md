# Projeto-FullStack
Projeto FullStack de um sistema de cadastro de carros!

O back-end desse sistema foi feito com uma API em node com express e utilizando um banco de dados MongoDB (não-relacional).
O front-end foi feito em React, sendo criado através do Vite.
O sistema é um simples CRUD. Onde temos o cadastro de carros (POST), a leitura desses dados (GET), a modificação parcial desses dados (PATCH) e a delação de um certo registro (DELETE).

Como testar o projeto?
Parte 1: Baixando a parte do front-end!
1. Clone essa parte do projeto, que é a parte do front, a API irei disponibilizar no meu próximo repositório!;
2. Dentro da pasta do projeto baixe todas as dependências, através de " npm install ";
3. Depois rode o comando " npm run dev";
4. Depois disso você verá a parte do front-end;

Parte 2: Baixando a parte do back-end!
1. Clone o meu próximo repositório que terá o nome de "API sistema de carros";
2. Dentro da pasta do projeto baixe todas as dependências, através de "npm install";
3. Ainda dentro da pasta "api", vá no arquivo "express.js", dentro de app.use(cors({origin:'coloque a URL em que seu clone do front-end está sendo executado, o localhost e a porta'})); Essa parte é para o back-end se conectar com o front-end. Porque o CORS é basicamente um protocolo que não permite uma URL diferente se conectar com outra URL, por exemplo, O front-end está sendo executado em uma porta e o back-end em outra. O CORS não permite! Por isso na parte citada anterior, verifique a porta em que o front-end está sendo executado, e coloque dentro daquele techo de código que eu cite. Para a API se conectar corretamente com o front-end. Exemplo: 'http://localhost:5000'
4. Crie um banco de dados grátis através do site do MONGODB, onde lá ele vai pedir para você criar um usuário e senha para o conectar com o seu banco. Não esqueça esses dados! Pois com eles vamos se conectar ao seu banco! -Para conectar a API com o banco de dados, vá em src/database, dentro do arquivo "connect.js", no trecho do código "await mongoose.connect("coloque a o trecho que o MONGODB disponibiliza para você se conectar com o banco!"); Exemplo: "mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@users.560rfik.mongodb.net/?retryWrites=true&w=majority&appName=users"; Coloque o seu e coloque as variáveis de ambiente como está aí no exemplo! Se baseie neste exemplo! Apenas na parte das váriaveis de ambiente!
5. Dentro da raiz da pasta "api" você vai criar um arquivo chamado ".env", onde dentro dele você vai criar variáveis de ambiente, chamadas: MONGODB_USER=nome do seu usuário do banco MONGODB_PASSWORD=sua senha do banco Dessa mesma forma que está, só coloque seu usuário e senha.
6. Agora por fim, na raiz da pasta da api execute o comando "npm run start:dev".

Com isso, você poderá testar tranquilamente esse sistema, lembre-se de rodar o front-end e o back-end ao mesmo tempo, para não ter problema dos dados não serem buscados pela API!
"npm run dev" na pasta do front-end;
"npm run start:dev" na pasta do back-end;


Dependendo da porta que seu front-end estiver rodando, configure o cors do servidor express para a origem da sua URL, se não o navegador vai apresentar um erro de CORS. Por isso na API tem o CORS definido para qual URL deve se conectar a API com o front.
