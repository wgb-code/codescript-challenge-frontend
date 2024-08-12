# Desafio PREMIADO da CodeScript
## Regras:

`Tecnologias:`

    Utilizar HTML, CSS & JAVASCRIPT. Não é permitido o uso de frameworks.

`Conteúdo:`

    O site deve ser estático.

`SEO:`

    O projeto devem incluir o básico para um bom posicionamento no Google (SEO).

`Design:`

    1 - Deve possuir um design atrativo e moderno, mas ao mesmo tempo simples e de fácil navegação.

    2 - Deve seguir o padrão de cores da CodeScript.

`Responsividade:`

    O site deve ser responsivo e pode utilizar bibliotecas como Bootstrap para auxiliar na responsividade.

`Estrutura:`
- Não pode ser uma página única (landingpage);
- Deve possuir links de navegação para as outras páginas.

        Deve incluir as seguintes páginas:

        Início
        Sobre Nós
        Serviços
        Produtos (softwares próprios)
        Contato

## Requisito Funcional

- O formulário de contato deve conter reCAPTCHA (não precisa estar configurado, apenas previsto no layout).

- Deve fazer o envio dos dados através de fetch ou Ajax (não precisa existir backend recebendo os dados, apenas o envio).

# Estrutura de Pastas do Projeto

Além de cumprir o desafio proposto, a estrutura de pastas foi pensada para ser organizada, fácil de manter e, principalmente, escalável. A seguir, descrevo a lógica por trás de cada diretório e arquivo.

## Estrutura de Diretórios

### index.html

O arquivo `index.html` é a página inicial da nossa aplicação e o primeiro ponto de acesso para os navegadores de busca. Seguindo o padrão Feature Structure, ele centraliza o conteúdo principal da aplicação.

### App

O diretório `app` contém todos os recursos da aplicação, incluindo estilos, scripts, imagens e outros ativos necessários.

#### Assets
- **Favicon**:
  - Todos os favicons da página estarão aqui
- **Imgs**
  - **Logo**
    - Diretório onde ficarão as logos utilizadas na aplicação
- **Fonts**
  - Diretório onde as fontes utilizadas na aplicação são armazenadas.
- **Svgs**
  - **Logos**
  - **Demais layouts:** nav, footer, todos separados por suas respectivas pastas

#### Styles

- **Vendor**
  - Contém arquivos de estilização externa, como `reset.css` e também `colors.css`.

#### Pages

#### Scripts

- Contém os arquivos de funcionalidade da aplicação.

#### Pages
  - Este diretório organiza cada página da aplicação como módulos, contendo pacotes de html e css dentro de cada módulo.

        Observação, a pasta pages localizada em app/pages é responsável por pacotes apenas de html e css, optei em deixar os javascripts centralizados apenas dentro da pasta scripts.

## Meta Tags usadas na aplicação
Nesta aplicação me baseei somente nas meta tags recomendadas pelo **Google**, para saber mais quais são essas meta tags estarei deixando o link do artigo oficial abaixo:

    https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=pt-br

## Escolha de Design

Foi levado em consideração os seguintes critérios para decidir o layout da aplicação.

1 - **Análise do layout atual da codescript** (me baseando no layout US), foi identificado pontos cruciais de serem exibidos na aplicação e entendido oq a empresa gostaria de passar em seus layouts.

2 - **Pesquisa de mercado**: Foi pesquisado referências de como as empresas estão montando seus *Corporate Websites* e a partir disto, pensado em como encaixar o site da codescript nesse contexto mas ainda sim mantendo a identidade única da empresa.

3 - **Busca por Referência** Foi realizado diversas buscas de UI/UX em sites como `FIGMA` e também o `Dribbble`.

### Abaixo, Links de Referências:

  - **https://dribbble.com/shots/18695492-Real-estate-website-design-Reaset**

  - **https://www.figma.com/design/9TYhscm5xYNhHtxeIDwEOk/Saas-%26-Corporate-Agency-Website-I-SaaSmito-(Community)?node-id=0-1&t=jq9gcF9vVSg9mjwQ-0**

  - **https://www.figma.com/design/6I4nl3WL2Y0BcunluGQezt/INWOOD---eCommerce-Landing-Page-(Community)?node-id=1001-2446&t=jq9gcF9vVSg9mjwQ-0**

  ### Log de Trabalhos
  - **27-07-2024** - Menu de Navegação.
  - **28-07-2024** - Carousel.
  - **29-07-2024** - Correções de Bugs
  - **30-07-2024** - Correções de Bugs & Sessão "Nossos Recursos".
  - **10-08-2024 até 12-08-2024** - Desenvolvimento da home page.