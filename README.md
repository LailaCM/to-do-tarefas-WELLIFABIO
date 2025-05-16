# to do (tarefas)
Sistema simples de gerenciamento de tarefas e status com as funcionalidades CRUD básicas

## Situação de aprendizagem desafiadora

## Contextualização
Uma indústria, do ramo alimentício, gerencia tarefas de seus setores utilizando o kanban. Não foi realizado um mapeamento do fluxo de cada setor, apenas é feito o controle das tarefas em modelo simplificado como o to do list, onde as etapas são divididas em: a fazer, fazendo e pronto.<br>O kanban foi utilizado por compartilhar as informações de forma visual, aumentando a transparência e permitindo que toda equipe do setor fique ciente das tarefas. Porém, a necessidade da empresa é aumentar a visibilidade das tarefas e integrar as informações entre todos os setores.

![DER](./docs/merder.png)
![DCU](./docs/dcu.png)

## Tecnologias
- Node.js
- Prisma
- XAMPP
- MySQL
- VsCode
- Insomnia

## Como testar
- 1 Clone este **repositório**
- 2 Abra o **XAMPP** Control Panel e inicie o Apache e o MySQL
- 3 Abra com o repositorio com **VsCode**
- 4 Crie o arquivo .env na pasta API e adicione as seguintes variáveis de ambiente
```js
DATABASE_URL="mysql://root@localhost:3306/tarefas?schema=public&timezone=UTC"
```
- 5 Abra o terminal **CTRL + '** cmd ou bash, navegue até a pasta API e execute os comandos
````bash
cd api
npm install
npx prisma migrate dev --name init
npx nodemon
# ou
npm start
````
- 6 Abra o **Insomnia** e importe o arquivo **./docs/insomnia.json** para testar as rotas.
- 7 Caso queira visualizar o banco de dados, abra o **XAMPP** Control Panel e clique em **Admin** no módulo MySQL.
    - O arquivo ./docs/testes.sql é um script com dados de teste para inserir no banco de dados.
- 8 Para parar a execução do servidor, pressione **CTRL + C** no terminal.
---
*Feito por **Laila Casadei Macêdo***
