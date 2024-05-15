# AngularTest052024

Esse projeto visa ser um teste angular para avaliação do nível de Angular do candidato.

## Estória
Como usuário gostaria de uma view em que pudesse ver uma lista de usuários. Na lista devem haver botões de ação para editar e remover o usuário.  No topo superior um botão de adicionar usuário. Ao clicar no botão "more" as informações do usuario devem aparecer abaixo dele empurrando as demais linhas para baixo.

## Critérios de aceite
- Está pronto quando for possivel visualizar a lista de usuários
- Esta pronto quando houver botões de ação de editar e deletar em cada linha
- Está pronto quando houver um botão de adicionar usuário estiver sobre a lista
- Está pronto quando, ao clicar em qualquer ação entre adicionar, editar ou deletar usuário, surgir um alert "Ação {ação} clicada"

## Plus
Caso todos os itens acima já tenham sido resolvidos será considerado um plus caso cumpra os quesitos abaixo
- Está pronto quando, ao clicar "more" as demais informações a respeito do usuário aparecer abaixo dele empurrando as demais linhas de usuário para baixo
- Ao clicar deletar, um warning surgir perguntando se deseja mesmo deletar e confirmando enviar a requisição DELETE para o endpoint da API e tratando a resposta para dar o feedback ao usuário
- Modal de cadastro e edição de usuário, enviando ao endpoint da API via POST e tratando a resposta

## Layout sugerido
![Layout Sugerido](https://github.com/MediaCentre-BR/angular-test-052024/blob/main/src/assets/images/user-management.png?raw=true)

## Observações
- Não se espera que nessa tarefa se faça toda a interação CRUD, ou seja, apenas a listagem e visualizações de informações do usuário fazer parte da tarefa.
- O Layout sugerido tal qual colocado é uma sugestão. É importante haver alguma responsividade mas apenas cobrindo monitores de desktop (1024 a 1920px de width).
- Utilize tanto quanto possivel transições para gerar um UX mais agradável.
- Testes utilizando Karma serão considerados um plus.

## Referências Técnicas
- A API pode ser acessada em [JSONPlaceholder - Free Fake REST API (typicode.com)](https://jsonplaceholder.typicode.com). A API de usuários está em [jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

## Para realização do teste siga as instruções abaixo:
- Faça o clone do repositório que contém o projeto inicial em Angular
- Troque a branch para angular-test/seu-nome
- Desenvolva conforme enunciado
- Faça commits separando cada etapa do desenvolvimento que terminar
- Finalizado faça o push para o remote e notifique a entrega.
