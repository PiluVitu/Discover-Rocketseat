# Comandos

## Iniciar

> <span style= "color:#FF2D00">_git init_</span> inicia um repositório

---

## Adicionar Arquivos

> <span style= "color:#FF2D00">_git add 'nome do arquivo'_</span> adiciona um arquivo ou mudança em especifivo para a stage area

> <span style= "color:#FF2D00">_git add ._</span> adicona tudo (arquivo ou mudança) para a stage area

> <span style= "color:#FF2D00">_git commit -m "coment"_</span>

> <span style= "color:#FF2D00">_git commit --amend -m "coment"_</span> corrige o ultimo commit

> <span style= "color:#FF2D00">_git commit -am"mensagem"_</span> usado quando ja se tem arquivos rastreados(faz modificação onde ja tem arquivos prontos)

---

## Informações

> <span style= "color:#FF2D00">_git status_</span> usado para ver melhor o progresso no work flow do git

> <span style= "color:#FF2D00">_git log_</span> ver informações dos commits

> <span style= "color:#FF2D00">_git log --oneline_</span> exibe a la log de maneira simplificada

> <span style= "color:#FF2D00">_git diff_</span> para ver todas as modificações que foram feitas e ja estão no repositorio

> <span style= "color:#FF2D00">_git diff --staged_</span> para ver as mudanças que não foram comitadas

> <span style= "color:#FF2D00">_git diff --color-words_</span>destaca as palavras que foram alteradas no arquivo

> <span style= "color:#FF2D00">_git show 'numero has do commit'(PODE ADD --color-words)_</span> usado para mostar alterações quando ja foram comitadas

> <span style= "color:#FF2D00">_git show 'numero has do commit'-- pasta(src/views/index)_</span> usado para mostarr alterações quando ja foram comitadas em uma pasta especifica

---

## Modificação de arquivos

> <span style= "color:#FF2D00">_git restore --staged 'file'_</span> retira algum arquivo em especifico da staged area

> <span style= "color:#FF2D00">_git rm 'file'_</span> remove um arquivo do repositorio e coloca essa remoção no staged area

> <span style= "color:#FF2D00">_git mv 'name actual of file' 'new name of file'_</span> renomeia um arquivo e ja envia para a staged area

> <span style= "color:#FF2D00">_git mv 'file' 'folder/file'_</span> move para outra pasta e ja envia para a staged area

> <span style= "color:#FF2D00">_git restore 'file'_</span> volta as alterações encontradas pelo git
> <span style= "color:#FF2D00">_git checkout 'numero de indentificação do commit' -- 'nome do arquivo'_</span> recupera um arquivo de alguma linha do tempo do projeto

> <span style= "color:#FF2D00">_git clean -n_ e confirma com clear</span> mostra quais arquivos vao deletar
> depois use o <span style= "color:#FF2D00">_git clean -f_</span>para forçar aos arquivos nao rastreaveis a serem excluidos permanentemente

> <span style= "color:#FF2D00">_git revert (HEAD~'numero do commit') ou (num has do commit)_</span> comando usado para rerstaurar algum commit desejado

> Criar <span style= "color:#FF2D00">_.gitignore_</span> para ignorar arquivos que não são necessarios ir para o meu diretorio

> <span style= "color:#FF2D00">_git rm -r --cached_</span> tira tudo que estava no cache, ideal para usar apos a criação e configuração do .gitignore
