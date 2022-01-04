## Display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

| **block**                                                     | **Inline**                                              |
| ------------------------------------------------------------- | ------------------------------------------------------- |
| Ocupa toda a linha, colocando o próximo elemento abaixo desse | Elemento ao lado do outro                               |
| widht e height são respeitados                                | Width e Height não funcionam                            |
| padding, margin, border irão funcionar normalmente            | Somente valores horizontais de margin, padding e border |

Exemplos:

Block:`<p> <div> <section>`, todos os headings `<h1><h2>...`
Inline:`<a> <strong> <span> <em>`
