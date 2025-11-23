# Projeto Individual - Como Treinar o Seu Dragão

Este projeto consiste no desenvolvimento de um website temático baseado na aclamada franquia "Como Treinar o Seu Dragão". O objetivo é oferecer uma experiência imersiva onde os fãs podem testar seus conhecimentos, refletir sobre autoconhecimento através dos personagens e visualizar dados comparativos.

## Sobre a Franquia

“Como Treinar o Seu Dragão” narra a história de Soluço, um jovem viking que desafia as tradições de sua aldeia ao fazer amizade com Banguela, um dragão raro. A saga vai muito além de batalhas épicas; ela explora temas profundos como empatia, coragem, a responsabilidade da liderança e a força da amizade verdadeira. É uma história sobre crescer, aceitar as diferenças e entender que, muitas vezes, o diálogo e o respeito são mais poderosos que a força bruta.

## Estrutura do Site

O site foi desenhado para proporcionar uma navegação fluida e interativa. As principais seções são:

* **Home:** Introdução ao universo da franquia e apresentação da proposta do site.
* **Sobre Mim:** Uma página dedicada a conectar a ficção com a realidade. Nela, relato minha história pessoal e como a jornada de amadurecimento do Soluço serviu de inspiração e paralelo para os meus próprios desafios, superações e construção de valores ao longo da vida.
* **Quiz de Personalidade:** Uma ferramenta interativa onde o usuário responde a perguntas baseadas em situações da franquia para descobrir com qual personagem ele mais se identifica.
* **Dashboard (Gráficos):** Área restrita onde o usuário pode visualizar gráficos que comparam o seu resultado no quiz com o de outros usuários, gerando uma análise de dados interessante sobre a comunidade de fãs.
* **Login e Cadastro:** Sistema de autenticação para garantir que cada usuário tenha seu perfil salvo e seus resultados registrados.

## Banco de Dados

O projeto conta com um banco de dados estruturado para gerenciar as informações essenciais da aplicação. Ele é responsável por armazenar os dados de cadastro dos usuários (como credenciais de acesso) e persistir os resultados obtidos no quiz. Isso permite que o sistema gere métricas e alimente os gráficos exibidos na dashboard com informações atualizadas e consistentes.

## API web-data-viz

A estrutura do projeto utiliza a API **web-data-viz**, desenvolvida em Node.js. Ela atua como o backend da aplicação, sendo responsável por gerenciar as rotas do site, realizar a conexão segura com o banco de dados e tratar as requisições de cadastro, login e captura de dados para a plotagem dos gráficos.

## Virtualização (VirtualBox)

Para a hospedagem e execução do projeto, foi utilizada a **VirtualBox**. A escolha por essa tecnologia de virtualização se deve à necessidade de criar um ambiente isolado e controlado (Máquina Virtual - VM).
Utilizar uma VM permite simular um servidor real (geralmente Linux/Ubuntu), garantindo que as configurações do sistema operacional, dependências e o banco de dados funcionem de maneira independente do sistema principal do computador, o que aproxima o desenvolvimento de um cenário real de deploy em nuvem.

## Objetivo

O objetivo principal deste site é unir o entretenimento com o autoconhecimento. Através de um quiz interativo e da análise de dados, buscamos fazer com que o usuário reflita sobre sua personalidade utilizando como espelho os arquétipos e valores presentes no mundo de Berk, mostrando que uma obra de ficção pode ter um impacto real na forma como vemos o mundo e nos relacionamos.

## Contribuição

Se você deseja contribuir com melhorias para este projeto, siga os passos abaixo:

1.  Faça um **clone** do repositório:
    `git clone https://github.com/Cesar409-dot/Projeto_Individual.git`
2.  Certifique-se de manter seu repositório local atualizado:
    `git pull`
3.  Realize as alterações desejadas e adicione os arquivos ao stage:
    `git add .`
4.  Crie um commit identificando o que foi feito:
    `git commit -m "descrição_da_alteração"`
5.  Envie suas alterações para o repositório remoto:
    `git push`

---
*Desenvolvido por [Cesar409-dot](https://github.com/Cesar409-dot)*
