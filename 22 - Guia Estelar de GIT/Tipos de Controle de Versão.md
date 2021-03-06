# Tipos de Controle de Versão

#### Sistemas Locais

- Copiar os arquivos para outro diretório
- Muito comum e muito simples
- Incrivelmente propensa a erros
- Fácil de sobreescrever arquivos, caso haja feito uma cópia errada

> Para superar os possíveis erros, existe o RCS - Revision Control System

- Ferramenta popular (antigamente) para controle de versão
- mantem conjuntos de alterações, ou seja, as diferenças entre os arquivos
- Formato especial no disco
- Re-criar como qualquer arquivo se parecia em qualquer ponto no tempo, adicionando-se todas as alterações ao arquivo

> <span style="color:#FF8E00">E se você precisar colaborar com desenvolvedores em outros sistemas ? </span>

#### Sistemas Centralizados

Exemplo: CVS, Subversion e Perforce

- Um único servidor que contém todos os arquivos de controle de versão

- Vários clientes usam arquivos a partir desse lugar central

_Por muitos anos, este tem sido o padrão para controle de versão._

##### Vantagens sobre VCSs locais

- Controle sobre atividades dos colaborados no projeto
- Os administradores têm controle refinado sobre quem pode fazer o que
- Mais fácil de administrar com CVCS do que lidar com banco de dados locais de cada cliente

##### Desvantagens

- Se esse servidor der problema por uma hora, durante essa hora ninguém pode colaborar ou salvar as alterações de versão para que quer que eles estejam trabalhando

- Se o disco rígido do banco de dados central for corrompido, você perde absolutamente tudo

- Sistemas VCS locais sofrem com esse mesmo problema

> <span style="color:#FF8E00">Sempre que você tenha toda a história do projeto em um único lugar, há o risco de perder tudo.</span>

#### Sistemas Distribuídos

Exemplo: Git, Mercurial, Bazaar ou Darcs

- Duplicar (clonar) localmente o repostório completo
- Se qualquer servidor morrer ], e esses sistemas estiverem colaborando por meio dele, qualquer um dos repositorios do coliente poderá ser copiado de volta para o servidor
- Cada clone é de fato um backup completo de todos os dados
- Clientes usam o estado mais recentes dos arquivos
