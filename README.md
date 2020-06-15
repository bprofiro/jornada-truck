<h3 align="center">
  Jornada Truck
</h3>

<p align="center">
  <img src="https://github.com/bprofiro/assets/blob/master/jornada-truck.png" />
</p>

<div>
  <h2> :rocket: Sobre o desafio: </h2>
  
O layout pode ser acessado através da página do Figma, no [seguinte link](https://www.figma.com/file/VqcmVaB39CEaN0DTcZycAC/AMANDA?node-id=0%3A1).
  
  - O projeto foi desenvolvido como um desafio para o Hackathon da Shawee em parceria com a CCR e consiste em achar uma solução para a
melhoria de qualidade de vida dos milhares de caminheiros que trabalham em condições muitas vezes prejudiciais à sua saúde.

  - A solução encontrada pelo nosso time consiste em um companheiro de viagem para o caminhoneiro. No período de 2 dias não foi possível
desenvolver a solução criada por completo, mas segue em aberto as funcionalidades ausentes para que sejam completadas posteriormente.
Essa aplicação recebe o cadastro do caminheiro com os dados de sua saúde e da saúde do seu caminhão para que a nossa API retorne para ele
de forma simples quando fazer a próxima troca de algum componente ou como vai a saúde do usuário.

  - Um ponto importante da aplicação é o nosso "Botão do Pânico", em que ao aciona-lo, o usuário envia sua geolocalização para o socorro
 correspondente ao seu pedio: Hospital, Polícia ou Mecânico. O que proporciona maior segurança ao nossos usuários.
 
 - O aplicativo funciona com um sistema de gamificação, para incentivar cada vez mais o caminhoneiro a utilizar a aplicação para ganhar
pontos e troca-los por alguns bônus disponíveis em sua jornada.
  
</div>

<div>
  <h2> 🖥 Utilizando a aplicação: </h2>

  - Para utlizar essa aplicação, você precisará do [Git](https://git-scm.com), [Node.js v10.16][nodejs] ou maior + [Yarn v1.13][yarn] ou maior instalado no seu computador. E então, na sua linha de comando:
  - Lembre-se de preencher o arquivo `ormconfig.json` com os dados necessários de acordo com as suas ferramentas.
  ```bash
# Clonar esse repositório
$ git clone https://github.com/bprofiro/jornada-truck.git

# Entrar na pasta do repositório
$ cd jornada-truck

# Entrar na pasta do servidor
$ cd backend

# Instalar todas as dependênias
$ yarn install

# Iniciar o servidor:
yarn dev:server;

#Abra outro terminal, entre na pasta do repositório novamente e entre no diretório do frontend
cd app

# Instalar todas as dependênias
$ yarn install

# Iniciar o projeto:
yarn android
```
</div>

<div>
  <h2> :computer: Tecnologias: </h2>
   <p> Esse projeto foi desenvolvido em apenas uma linguagem: Typescript, utilizando as seguintes tecnologias:

   - [yarn](https://yarnpkg.com/)
   - [Node.js](https://nodejs.org/en/)
   - [React Native](https://reactjs.org/)
   - [TypeORM](https://typeorm.io/#/)
   - [Postgres](https://docs.microsoft.com/pt-br/sql/sql-server/?view=sql-server-ver15)
   - [Axios](https://github.com/axios/axios)
   - [Polished](https://polished.js.org/)
   - [styled-components](https://www.styled-components.com/)
   
  </p>
</div>

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
