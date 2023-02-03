# Store Manager
### Autor: Matheus Eduardo de Sousa Azevedo

Este projeto foi desenvolvido por mim e faz parte do acervo de atividades executadas na escola de programação Trybe. A formação ao longo de 1 ano em Desenvolvimento Web desta instituição  conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais. Tudo voltado totalmente para o mercado de trabalho com intuito de entregar um profissional adequado para a realidade atual. 

## Sobre o projeto

Este projeto é uma solução completa para gerenciamento de lojas, fornecendo rotas de acesso para o Store Manager para realizar as tarefas diárias de gerenciamento. Ele utiliza a arquitetura MSC (Model-Service-Controller) para separar as camadas de aplicação e melhorar a manutenibilidade e escalabilidade. Além disso, ele utiliza o Docker para garantir a portabilidade e facilidade de uso, o Node.js como plataforma de desenvolvimento, o MySQL como banco de dados, o Mocha e o Chai para testes automatizados.

## Recursos

-   Gerenciamento de produtos: adicionar, atualizar e excluir produtos.
-   Gerenciamento de pedidos: visualizar, atualizar e excluir pedidos.
-   Gerenciamento de estoque: adicionar e atualizar estoque.
-   Relatórios de vendas: gerar relatórios de vendas por período.

## Instalação

1.  Instale o [Docker](https://www.docker.com/get-started) em sua máquina.
2.  Clone o repositório do projeto em sua máquina local.
3.  Execute o seguinte comando para construir a imagem do projeto:

`docker-compose build` 

4.  Execute o seguinte comando para iniciar os containers:

`docker-compose up` 

## Testes

Para executar os testes automatizados, execute o seguinte comando na raiz do projeto:

`npm test` 

## Contribuição

Este projeto é de código aberto e aceita contribuições. Se você deseja contribuir, siga as seguintes etapas:

1.  Faça um fork do projeto.
2.  Crie sua branch de características (`git checkout -b feature/nome-da-feature`).
3.  Commite suas alterações (`git commit -am 'Adicionada nova funcionalidade'`).
4.  Push para a branch (`git push origin feature/nome-da-feature`).
5.  Crie um Pull Request.
