## Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- por padrão, é transparente

### Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar
  - a posição das imagens,
  - se elas se repetem ou não
  - o tamnaho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente

```css
header {
  background-color: cornflowerblue; /* Cor de fundo */
  background-image: url(https://image.winudf.com/v2/image1/ Y29tLmJhcnlhYS5hbW9uZ3VzZnJpZW5kc2ZpbmRlcl9pY29uXzE2MDE2OTg0OTVfMDUx/icon.png?w=&fakeurl=1); /* Imagem de fundo*/
  background-repeat: no-repeat; /* Vem repeat por padrão / repeat-y(repete so no eixo vertical) / repeat-x(repete so no eixo horizontal) */
  background-position: right /*Horizontal*/ center /*Vertical*/; /* Podemos mudar o eixo horizontal e o eixo vertical */
  background-size: contain
      /*A imagem fica dentro dos limites da caixa com tamanho da caixa*/ cover
      /*Vai cobrir toda a area da caixa */ porcentagem, em, px;
  background-origin:/*Defini a origem da  imagem, se vai ultrapassar borda, vai se ajustar ao padding*/ border-box
    /*Background vai ate a area maxmima da caixa, ultrapassando as bordas*/
    content-box /*Padrão*/ padding-box /*A imagem fica no limite do padding*/;
  background-clip:/*Estabelece limites para a cor e o conteudo em relação a borda*/ border-box
    /*Padrão*/ padding-box /*Se ajusta ao padding*/ content-box
    /*Vai ficar na area de conteudo da caixa*/;
  /*ATENÇÃO: Se quiser que a imagem fique ajustada com o background clip ajustar as porpriedades no background origin */
  background-attachment:/*Interação do fundo com o scroll*/ scroll
    /*Fundo se move junto com o scroll*/ fixed; /*Fundo fica fixo e somente o conteudo se move*/

  /*Shorthand do background*/
  background: cornflowerblue
    url(https://image.winudf.com/v2/image1/ Y29tLmJhcnlhYS5hbW9uZ3VzZnJpZW5kc2ZpbmRlcl9pY29uXzE2MDE2OTg0OTVfMDUx/icon.png?w=&fakeurl=1)
    no-repeat center top
    //*Se for inserir o tamanho da imagem de fundo precisa colocar uma barra antes*/50px border-box content-box fixed;;

  background: linear-gradient(270deg, red, yellow, green) /*Cria um gradiente linear que pode ter cores alteradas assim como sua angulação*/
    radial-gradient(red, yellow, green)
    /*Cria um gradiente de maneira circular*/;

  /*Crie multiplos backgrounds / SEPARAR OS DIFERENTES BACKGROUNDS POR VIRGULA*/
  background: linear-gradient(270deg, red, yellow, green),
    cornflowerblue
      url(https://image.winudf.com/v2/image1/ Y29tLmJhcnlhYS5hbW9uZ3VzZnJpZW5kc2ZpbmRlcl9pY29uXzE2MDE2OTg0OTVfMDUx/icon.png?w=&fakeurl=1)
      no-repeat center top / 50px border-box content-box fixed;
}
```
