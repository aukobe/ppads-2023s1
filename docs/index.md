<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>


<font size="+12"><center>
Sistema de Presenças da Escola Infinito
</center></font>

>*Observação 1: A estrutura inicial deste documento é só um exemplo. O seu grupo deverá alterar esta estrutura de acordo com o que está sendo solicitado na disciplina.*

>*Observação 2: O índice abaixo não precisa ser editado se você utilizar o Visual Studio Code com a extensão **Markdown All in One**. Essa extensão atualiza o índice automaticamente quando o arquivo é salvo.*

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
- [Protótipos de tela](#protótipos-de-tela)
- [Modelo de domínio](#modelo-de-domínio)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)
- [Referências](#referências)


# Autores

* Augusto Koshiyama Bento
* Benjamim Kim
* Gabriel Moreira Cabral

# Descrição do projeto

A Escola Infinito necessita de um sistema para controlar as presenças de seus alunos, pois a operação ainda é realizada totalmente em papel e nós da 3DEVS, temos a responsabilidade de criar esse sistema de presença, de acordo com o que os gestores da escola gostariam de obter com esta aplicação.

# Diagrama de casos de uso

![image](https://user-images.githubusercontent.com/100203154/221965884-dc98e8f0-00c5-4c69-b65e-d448b39b5e80.png)

# Descrição dos casos de uso

[Especificação de Caso de Uso - Escola Infinito.pdf](https://github.com/aukobe/ppads-2023s1/files/10864498/Especificacao.de.Caso.de.Uso.-.Escola.Infinito.pdf)

# Protótipos de tela

![image](https://user-images.githubusercontent.com/100203154/222213463-3ccecd91-36a0-48c8-a3dd-3f87dd1ca172.png)
![image](https://user-images.githubusercontent.com/100203154/222235770-524bf522-8234-44d3-a96f-f8c5ff1c767b.png)
![image](https://user-images.githubusercontent.com/100203154/222214314-de7eedfd-e540-4608-98d1-411f24a3feff.png)
![image](https://user-images.githubusercontent.com/100203154/222214358-2c1c8ce4-3258-4534-8eb4-3fa58f93c45b.png)
![web 5](https://user-images.githubusercontent.com/100203154/231879036-2fad5971-6ecc-45dd-ac8e-29ac62199f26.png)
![web 6](https://user-images.githubusercontent.com/100203154/231879100-dd337274-d938-4cb2-b638-198260439551.png)
![web 9](https://user-images.githubusercontent.com/100203154/231879255-41add3a6-29b0-41f9-9880-6b9d04690102.png)
![web 10](https://user-images.githubusercontent.com/100203154/231879345-8d56bdb0-2bd5-4562-a54c-6fab4081f2c8.png)



# Modelo de domínio

![Modelo de Domínio - Escola Infinitio  drawio](https://user-images.githubusercontent.com/100203154/222239477-5e74136c-267e-4a76-a6fe-7146524fd080.png)

# Decisões de arquitetura

## Tecnologias

No nosso projeto vamos utilizar as tecnologias NodeJS e Express-EJS para fazer um desenvolvimento full-stack (front-end e back-end). E todo o sistema estará conectado ao banco de dados mongoDB para o armazenamento das informações.

## Diagramas de Sequência

### Registrar Faltas

![image](https://user-images.githubusercontent.com/100203154/223459278-e4ac5a80-d616-48d6-94a7-f30df9bea529.png)

### Gerar Relatórios

![image](https://user-images.githubusercontent.com/100203154/223437392-17878b72-fd18-4a40-9102-c4bf6e863e28.png)

### Enviar Notificação sobre Excesso de Faltas

![image](https://user-images.githubusercontent.com/100203154/223458338-7d8e7d14-b1ed-4a5a-8f8a-11adea7cb0e5.png)

## Diagrama de Componentes

![Diagrama de Componentes drawio (1)](https://user-images.githubusercontent.com/100203154/223541537-364aa261-c43d-4f74-9522-2beb1521940a.png)


# Diagrama de implantação

![Diagrama de Implantação - Lista de Chamada drawio (1)](https://user-images.githubusercontent.com/100203154/231879482-07a6ea0e-1e72-4248-8077-fc791580cc9b.png)

# Referências

*&lt;Lista de referências&gt;*
