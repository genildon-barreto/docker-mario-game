# 🎮 DIO - Desafio: Criação de um container Apache com a execução de uma aplicação com Docker

---

Este projeto é um desafio da **Digital Innovation One (DIO)** focado na containerização de uma aplicação web. A tarefa consiste em "dockerizar" um site, criando um ambiente totalmente isolado e configurável utilizando **Docker**. O projeto visa demonstrar como o Docker pode ser usado para empacotar e executar aplicações de forma consistente, independente do ambiente.

---

## 💻 Tecnologias Utilizadas

* **HTML:** Estruturação da página web do jogo.
* **CSS:** Estilização e design do jogo e da interface.
* **JavaScript:** Lógica do jogo (movimentação, colisões, pontuação, etc.).
* **Docker:** Para containerizar a aplicação, incluindo a criação de uma imagem e a execução em um contêiner.
* **Docker Compose:** Para definir e executar aplicações multi-container.


---

## ✨ Funcionalidades

O projeto, em sua essência, é um jogo simples do Mario. As funcionalidades principais incluem:

* **Jogo do Mario:** Um jogo de navegador onde o jogador controla o Mario para saltar sobre obstáculos.
* **Containerização:** O jogo é executado dentro de um contêiner Docker, garantindo que ele funcione de forma idêntica em qualquer máquina com o Docker instalado.
* **Isolamento:** A aplicação e todas as suas dependências (o servidor web necessário para rodar o HTML/CSS/JS) estão encapsuladas no contêiner, sem poluir o sistema operacional do host.

---

## 🚀 Instruções de Execução

Para executar o jogo localmente, você precisa ter o **Docker** instalado em sua máquina. Siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/genildon-barreto/docker-mario-game.git](https://github.com/genildon-barreto/docker-mario-game.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd docker-mario-game
    ```
3.  **Execute o Docker Compose:**
    * Certifique-se de que o Docker esteja em execução na sua máquina.
    * No terminal, execute o seguinte comando:
    ```bash
    docker-compose up -d
    ```
    * Este comando irá baixar as imagens necessárias e iniciar os dois containers.

4.  **Acesse o jogo:**
    Abra seu navegador e acesse o endereço `http://localhost:80`. O jogo do Mario estará pronto para ser jogado!

Para derrubar os containers, pressione `Ctrl + C` no terminal e, em seguida, execute:
    
    docker-compose down
    

---

## 🧠 Aprendizados do Projeto

Este desafio foi crucial para consolidar o entendimento sobre:

* **Orquestração de Containers:** Habilidade de gerenciar múltiplos containers de forma conjunta com o **Docker Compose**.
* **Configuração sem Dockerfile:** Uso de imagens prontas diretamente no arquivo `docker-compose.yml` para criar serviços, o que demonstra a flexibilidade da ferramenta.
* **Mapeamento de Portas:** Entendimento de como expor portas de containers para que os serviços possam ser acessados externamente.
* **Automação de Ambiente:** Como o **Docker Compose** simplifica a configuração de ambientes de desenvolvimento complexos com apenas um comando.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões para melhorar o `Dockerfile`, otimizar o código do jogo ou qualquer outra ideia, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

## 📚 Referência

Este projeto é uma contribuição e foi desenvolvido com base no repositório original de Denilson Bonatti, como parte de um dos muitos desafios oferecidos pela **Digital Innovation One (DIO)**.

* https://github.com/denilsonbonatti/docker-projeto1-dio

---