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

## Objetivo

Além de cumprir o desafio proposto, a estrutura de pastas foi pensada para ser organizada, fácil de manter e, principalmente, escalável. A seguir, descrevo a lógica por trás de cada diretório e arquivo.

## Estrutura de Diretórios

### index.html

O arquivo `index.html` é a página inicial da nossa aplicação e o primeiro ponto de acesso para os navegadores de busca. Seguindo o padrão Feature Structure, ele centraliza o conteúdo principal da aplicação.

### App

O diretório `app` contém todos os recursos da aplicação, incluindo estilos, scripts, imagens e outros ativos necessários.

#### Assets

- **Imgs**
  - **Pages**
    - Diretório onde as imagens específicas para cada página são armazenadas.
- **Fonts**
  - Diretório onde as fontes utilizadas na aplicação são armazenadas.

#### Styles

- **Vendor**
  - Contém arquivos de estilização externa, como `reset.css`.
- **Layouts**
  - Arquivos de layout reutilizáveis como `navbar`, `footer` e `sidebar`.
- **Components**
  - Estilos padrões reutilizáveis para elementos como botões, formulários, links, listas, etc.

#### Scripts

- Contém os arquivos de funcionalidade da aplicação.

#### Pages

- Diretório que organiza cada página da aplicação como módulos, contendo pacotes de HTML, CSS e JavaScript para cada página.