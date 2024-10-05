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

```bash
- app
  ├── assets
  │   ├── favicon
  │   ├── fonts
  │   ├── imgs
  │   └── svgs
  ├── locale
  ├── pages
  │   ├── about
  │   ├── contact
  │   ├── footer
  │   ├── health
  │   └── nav
  ├── scripts
  └── styles
      └── vendor
- index.html
- README.md
- Robots.txt
```

Optei em componentizar meu código, buscando performance, reutilização e organização de código, além disto uma estrutura de componentes bem organizada facilita em segundo momento `Injesções de dependências` e se torna mais fácil de escalar. Claro que a estrutura de pastas por si só não é uma bala de prata, até por que não é uma arquitetura.

Para isto, optei em usar uma `ARQUITETURA MODULAR`, embora ela esteja mais `Funcional` do que modular, eu utilizei o melhor dos dois mundos para entregar essa solução.

Ao meu ver, arquitetura boa é arquitetura que resolve o teu problema específico, de nada adianta eu adentrar em conceitos de `Microservices` por exemplo sendo que a ideia do projeto não condiz com a necessidade de algo tão complexo.

Complexidade só é boa quando resolve o problema e facilita a entrega do software com qualidade.

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

  - **https://dribbble.com/shots/20457331-Investment-firm-landing-page**

  - **https://www.awwwards.com/sites/circular**

  - **https://www.figma.com/design/9TYhscm5xYNhHtxeIDwEOk/Saas-%26-Corporate-Agency-Website-I-SaaSmito-(Community)?node-id=0-1&t=jq9gcF9vVSg9mjwQ-0**

  - **https://www.figma.com/design/6I4nl3WL2Y0BcunluGQezt/INWOOD---eCommerce-Landing-Page-(Community)?node-id=1001-2446&t=jq9gcF9vVSg9mjwQ-0**

  ### Log de Trabalhos

  - Inicializando o Projeto.
  - Buscando referências (Layout First).
  - Modelando estrutura de pastas do projeto.
  - Criando módulos reutilizaveis do projeto.
  - Criando componentes de Navegação e Footer.
  - Desenvolvimento do index.html.
  - Desenvolvimento do index.html
  - Desenvolvimento do index.html
  - Desenvolvimento do index.html
  - Limpando HTML.
  - Limpando CSS.
  - Testando Lighthouse do index.
  - Ajustando detalhes após pontuação do Lighthouse.
  - Desenvolvendo página "Sobre Nós"
  - Desenvolvendo página "Sobre Nós"
  - Testando Lighthouse do "Sobre Nós""
  - Trabalhando na responsividade geral do projeto.
  - Trabalhando na responsividade geral do projeto.
  - Trabalhando na responsividade geral do projeto.
  - Criando pacote de tradução `en_US.json` (Obs: **FEATURE** que talvez não será implementada)
  - Desenvolvendo página "Contatos"
  - Desenvolvendo página "Contatos"
  - Testando Lighthouse do "Contatos"
  - Implementando o Google Recaptcha.
  - Implementando API de mapas.
  - Desenvolvendo página serviços/"Saúde""
  - Desenvolvendo página serviços/"Saúde""

### IMPORTANTE

Optei em usar a API do `OpenStreetMap` ao invés da API do `Google Maps` pelo seguinte fator: pontuações do lighthouse. Os iFrames do Google são abusrdamente lentos, é algo que diminui a pontuação do Lighthouse de tal forma que é impossível não levar em consideração. Eu não cheguei a realizar um print com as métricas de antes e depois, porém com o `Google Maps` as melhores práticas de código e desempenho não passavam de 75 de pontuação. Ao mudar para o `OpenStreetMap` consegui bater 100 e sem perder usabilidade.

Como na descrição da tarefa pedia explicitamente para usar o `reCAPTCHA` eu utilizei, mas é importante verificar o mesmo problema mencionado acima e neste caso eu tenho imagens:

![Pontuação da Página 'Contatos'após implementação do reCAPTCHA](/app/assets/imgs/readme/pontuacao-reCaptcha.png)

Caso fosse um requisito ter um **nivel captcha de segurança mas não necessáriamente o `reCaptcha`**, existe a solução de implementar o `hCaptcha` que também é OpenSource, seguro e não prejudica as pontuações do lightouse.

### Link para o site do `hCaptcha`: https://www.hcaptcha.com/