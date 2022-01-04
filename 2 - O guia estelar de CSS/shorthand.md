# Shorthand

- Junção de propriedade
- Resumido
- Legível

```css
 {
  /* Background properties */
  background-color: #000;
  background-image: url(images/bd.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* Background Shorthand */
  background: #000 url(images/bd.gif) no-repeat left top;

  /* Font proprties */
  font-style: italic;
  font-weight: bold;
  font-size: 0.8em;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /* Font Shorthand*/
  font: italic bold 0.8em/1, 2 Arial, sans-serif;
}
```

## Detalhes

- Não irá considerar propriedades anteriores
- Valores não especificados irão assumir o valor padrão
- Geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, podemos encontrar problemas

## Propriedades que aceitam shorthand

animation, backgrund-color, border, border-bottom, border-color, border-left, border-radius, border-style, border-top, border-width, column-rule, columns, flex, flex-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place-content, place-items, place-self, text-decoration, transition

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**
