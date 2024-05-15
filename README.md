# Anime Schedule

## Descrição

Anime Schedule é uma aplicação web simples que permite aos usuários adicionar animes a uma agenda semanal. Os usuários podem especificar o título do anime e o dia da semana em que ele será exibido. A aplicação salva a agenda no armazenamento local do navegador para que as informações sejam preservadas entre as sessões.

## Funcionalidades

- Adicionar animes à agenda semanal.
- Exibir a agenda dos animes por dia da semana.
- Remover animes da agenda.
- Suporte à tradução automática de partes da página utilizando o atributo `translate` do HTML5.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do Projeto

O projeto consiste em três arquivos principais:

1. **index.html** - Define a estrutura básica da página, incluindo o formulário para adicionar animes e a tabela que exibe a agenda dos animes. Inclui o atributo `translate` para permitir a tradução automática de partes da página.
2. **styles.css** - Define o estilo da aplicação, incluindo a formatação do formulário e da tabela.
3. **scripts.js** - Contém a lógica da aplicação, incluindo funções para carregar a agenda do armazenamento local, salvar novos animes, atualizar a exibição da agenda e remover animes da agenda.

## Como Usar

1. Clone o repositório para o seu ambiente local.
   ```sh
   git clone https://github.com/igorcodigo/Animes.git
2. Navegue até o diretório do projeto.
cd seu-repositorio

3. Abra o arquivo index.html no seu navegador para visualizar a aplicação.

## Atributo translate do HTML5
Este projeto utiliza o atributo translate do HTML5 para permitir a tradução automática de partes da página. Elementos marcados com translate="yes" serão automaticamente traduzidos por ferramentas de tradução, como o Google Translate, enquanto elementos marcados com translate="no" não serão traduzidos.

Exemplo de uso:
<h2 translate="yes">Add Anime to Schedule</h2>
<div translate="no">Título do Anime não será traduzido</div>

## Licença / License
Este projeto está licenciado sob a Licença MIT
A Licença MIT é uma licença de software permissiva, que é simples e de fácil entendimento. Ela permite que você reutilize o código, desde que mantenha a licença original e o aviso de copyright. Abaixo está o texto completo da Licença MIT:

"Permission is hereby granted, free of charge, to any person obtaining a copy",
"of this software and associated documentation files (the 'Software'), to deal",
"in the Software without restriction, including without limitation the rights",
"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",
"copies of the Software, and to permit persons to whom the Software is",
"furnished to do so, subject to the following conditions:",
"",
"The above copyright notice and this permission notice shall be included in all",
"copies or substantial portions of the Software.",
"",
"THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR",
"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",
"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",
"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",
"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",
"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",
"SOFTWARE."
