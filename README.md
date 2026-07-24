# Sacode Jaboatão

Landing page responsiva desenvolvida para apresentar o evento **Sacode Jaboatão**, reunindo em uma única página as principais informações sobre programação, atrações, ingressos, localização e atendimento ao público.

O projeto foi construído com **HTML, CSS e JavaScript puro**, sem frameworks ou dependências de instalação. A proposta é servir tanto como demonstração de uma página profissional para eventos quanto como base reutilizável para outras festas, shows e festivais.

---

## Visão geral

A página apresenta:

- cabeçalho fixo com navegação por seções;
- área principal com identidade visual e informações rápidas;
- programação e lista de atrações;
- apresentação do evento;
- explicação sobre a retirada de ingressos;
- endereço e mapa incorporado do Google Maps;
- perguntas frequentes;
- chamada para atendimento pelo WhatsApp;
- patrocinadores e informações no rodapé;
- animações de entrada durante a rolagem;
- menu adaptado para celulares e tablets.

---

## Tecnologias utilizadas

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura semântica e conteúdo da página |
| CSS3 | Layout, componentes, animações e responsividade |
| JavaScript | Menu mobile, ano automático e animações ao rolar |

---

## Estrutura do projeto

```text
sacode-jaboatao/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── estilos.css
    │   └── responsivo.css
    ├── img/
    │   ├── 12-07_Sacode-Jaboatao-EVENTO-GRATUITO.png
    │   ├── A9(2).png
    │   ├── artista.svg
    │   ├── banner.png
    │   ├── logo.png
    │   ├── outgo.svg
    │   ├── pagode-legal.svg
    │   ├── pessoas-evento.svg
    │   └── rebeldes-do-samba.svg
    └── js/
        └── main.js
```

### Responsabilidade de cada arquivo

#### `index.html`

Contém a estrutura semântica, os textos, links, imagens, metadados e todas as seções da landing page.

#### `src/css/estilos.css`

Reúne os estilos principais do projeto, organizados por responsabilidade:

- variáveis globais;
- normalização e estilos básicos;
- utilitários;
- botões;
- cabeçalho e navegação;
- seção principal;
- cartões de informações;
- atrações;
- apresentação do evento;
- ingressos;
- localização;
- FAQ;
- chamada final;
- rodapé;
- botão flutuante do WhatsApp;
- animações de entrada.

#### `src/css/responsivo.css`

Contém apenas as adaptações para diferentes tamanhos de tela e preferências do usuário, mantendo as regras responsivas separadas dos estilos principais.

Os principais pontos de quebra são:

- até `719px`: celulares;
- até `899px`: menu de navegação recolhido;
- a partir de `700px`: grades intermediárias;
- a partir de `900px`: layout de desktop;
- a partir de `1000px`: grades completas com quatro colunas.

#### `src/js/main.js`

Responsável por três funcionalidades:

1. abrir e fechar o menu mobile;
2. atualizar automaticamente o ano exibido no rodapé;
3. revelar elementos conforme eles entram na área visível da página.

---

## Como executar o projeto

Como não há processo de instalação ou compilação, o projeto pode ser aberto diretamente no navegador.

### Opção 1 — Abrir o HTML

1. Baixe ou clone os arquivos do projeto.
2. Confirme que a pasta `src` está no mesmo diretório do `index.html`.
3. Abra o arquivo `index.html` no navegador.

### Opção 2 — Utilizar o Live Server

No Visual Studio Code:

1. instale a extensão **Live Server**;
2. abra a pasta do projeto;
3. clique com o botão direito em `index.html`;
4. selecione **Open with Live Server**.

O uso de um servidor local facilita o desenvolvimento e atualiza a página automaticamente após alterações.

---

## Seções da página

### Cabeçalho

O cabeçalho permanece fixo no topo e apresenta:

- nome do evento;
- links internos de navegação;
- botão de ingresso;
- indicador de disponibilidade do lote;
- botão de menu para telas menores.

### Apresentação principal

A seção inicial destaca:

- logotipo do evento;
- chamada principal;
- data;
- horário;
- tipo de entrada;
- localização;
- botões de ação;
- arte de divulgação adaptada para celular e desktop com a tag `<picture>`.

### Informações rápidas

Exibe data, horário, entrada e local em cartões de consulta rápida.

### Atrações

Apresenta os artistas da programação em uma grade responsiva.

### Sobre o evento

Explica o propósito do Sacode Jaboatão e contextualiza a página como central de informações para o público.

### Ingressos

Mostra como funcionava o processo de retirada gratuita e informa que a retirada da edição representada está encerrada.

### Localização

Inclui:

- endereço completo;
- botão para abrir a rota no Google Maps;
- mapa incorporado diretamente na página.

### Perguntas frequentes

Utiliza os elementos nativos `<details>` e `<summary>`, permitindo abrir e fechar respostas sem depender de JavaScript.

### Chamada final

Direciona o visitante para o atendimento pelo WhatsApp.

### Rodapé

Reúne informações do evento, créditos do projeto e marcas patrocinadoras.

---

## Responsividade

A página foi desenvolvida para funcionar em celulares, tablets, notebooks e monitores maiores.

Entre as adaptações estão:

- menu recolhido em telas menores;
- reorganização das grades;
- botões ocupando toda a largura em celulares;
- mudança da imagem principal conforme a largura disponível;
- redução de tipografia e espaçamentos;
- reorganização dos patrocinadores;
- ajuste da proporção das imagens.

---

## Acessibilidade

O projeto inclui cuidados básicos de acessibilidade:

- HTML semântico com `header`, `nav`, `main`, `section` e `footer`;
- descrições alternativas nas imagens;
- uso de `aria-label`, `aria-expanded` e `aria-controls` no menu;
- títulos associados às seções com `aria-labelledby`;
- ícones decorativos ocultos de leitores de tela;
- foco visível para navegação por teclado;
- fechamento do menu pela tecla `Esc`;
- preservação do título principal para tecnologias assistivas no celular;
- suporte a `prefers-reduced-motion` para usuários que preferem menos animação;
- botões com altura mínima apropriada para interação por toque.

---

## Funcionamento do JavaScript

### Menu mobile

O botão do cabeçalho adiciona ou remove a classe `.is-open` da navegação. Durante a interação, o script também atualiza:

- `aria-expanded`;
- texto do `aria-label`;
- fechamento após selecionar um link;
- fechamento ao pressionar `Esc`;
- fechamento automático ao retornar para o layout de desktop.

### Ano automático

O conteúdo do elemento `#ano-atual` é substituído pelo ano atual utilizando:

```js
new Date().getFullYear();
```

### Animações durante a rolagem

Os elementos com a classe `.reveal` são observados por uma `IntersectionObserver`. Quando entram na tela, recebem a classe `.is-visible`.

Caso o navegador não suporte `IntersectionObserver` ou o usuário prefira menos movimento, todos os elementos são exibidos imediatamente.

---

## Como personalizar

### Alterar as cores

As principais cores estão centralizadas no início de `src/css/estilos.css`:

```css
:root {
  --color-primary: #f7941d;
  --color-bg: #0a0908;
  --color-surface: #15110e;
  --color-text: #f7f3ee;
  --color-muted: #c9beb4;
  --color-border: #3a291d;
}
```

Alterar essas variáveis modifica grande parte da identidade visual do projeto.

### Alterar textos e informações

No `index.html`, atualize:

- nome do evento;
- descrição principal;
- data e horário;
- local;
- lista de atrações;
- instruções de ingresso;
- perguntas frequentes;
- textos do rodapé.

### Alterar imagens

Substitua os arquivos dentro de `src/img/`, preservando os nomes, ou atualize os caminhos definidos nos atributos `src` e `srcset` do HTML.

### Alterar o link de ingressos

Procure por:

```text
https://www.outgo.com.br/
```

Substitua pelo endereço específico da página de compra ou retirada do evento.

### Alterar o WhatsApp

Procure por:

```text
5581999999999
```

Substitua pelo número real, utilizando o formato:

```text
55 + DDD + número
```

Exemplo:

```text
5581987654321
```

A mensagem inicial também pode ser modificada no parâmetro `text` do endereço.

### Alterar a localização

Atualize os dois pontos relacionados ao Google Maps:

1. link do botão “Ver rota no Google Maps”;
2. endereço utilizado no atributo `src` do `<iframe>`.

---

## Configurações antes da publicação

Antes de publicar uma versão real, revise os seguintes itens no `<head>` do `index.html`.

### Permitir indexação

Atualmente a página possui:

```html
<meta name="robots" content="noindex, follow">
```

Esse valor impede que a página seja indexada por mecanismos de busca. Quando o projeto estiver pronto para publicação, ele pode ser alterado para:

```html
<meta name="robots" content="index, follow">
```

### Adicionar URL canônica

Preencha a URL oficial:

```html
<link rel="canonical" href="https://seudominio.com/">
```

### Completar o Open Graph

Adicione os dados utilizados ao compartilhar a página em redes sociais:

```html
<meta property="og:url" content="https://seudominio.com/">
<meta property="og:image" content="https://seudominio.com/src/img/compartilhamento.jpg">
```

Também revise `og:title` e `og:description`.

---

## Checklist de publicação

- [ ] Atualizar data, horário e endereço.
- [ ] Confirmar todas as atrações.
- [ ] Substituir o telefone demonstrativo do WhatsApp.
- [ ] Adicionar o link específico do ingresso.
- [ ] Atualizar o status do lote.
- [ ] Confirmar se o ingresso é gratuito ou pago.
- [ ] Atualizar as imagens e logotipos.
- [ ] Revisar textos e perguntas frequentes.
- [ ] Remover o `noindex` quando a página estiver pronta.
- [ ] Preencher URL canônica e metadados Open Graph.
- [ ] Testar todos os links externos.
- [ ] Testar o layout em celular, tablet e desktop.
- [ ] Verificar contraste, foco e navegação por teclado.
- [ ] Otimizar o tamanho das imagens antes do deploy.

---

## Possíveis melhorias futuras

- integração com uma API de ingressos;
- contador regressivo para o evento;
- destaque automático do link da seção atual;
- galeria de fotos e vídeos;
- programação organizada por horários;
- integração com redes sociais;
- formulário de contato;
- botão para adicionar o evento ao calendário;
- painel para atualização de atrações e informações;
- otimização avançada de imagens com formatos WebP ou AVIF;
- criação de uma página personalizada para confirmação de ingresso.

---

## Publicação

Por ser um projeto estático, ele pode ser publicado gratuitamente em serviços como:

- GitHub Pages;
- Vercel;
- Netlify;
- Cloudflare Pages.

Não é necessária nenhuma configuração de servidor ou banco de dados para a versão atual.

---

## Créditos

Projeto desenvolvido por **Diogo Bandeira** como demonstração de uma landing page profissional para divulgação de eventos.

O conteúdo visual e as marcas apresentadas devem ser utilizados somente com a autorização de seus respectivos responsáveis.
