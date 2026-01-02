# Anybank

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli).

## Sobre o Projeto

O **Anybank** é uma aplicação front-end moderna desenvolvida com Angular, simulando uma interface bancária simples. A aplicação permite ao usuário visualizar o saldo de sua conta, que é atualizado dinamicamente, e realizar novas transações, como saques e depósitos.

## Funcionalidades

*   **Exibição de Saldo Dinâmico:** Apresenta o saldo atual da conta, calculado em tempo real a partir do histórico de transações.
*   **Boas-vindas Personalizado:** Saúda o usuário com uma mensagem de boas-vindas e exibe a data atual.
*   **Registro de Novas Transações:** Permite que o usuário realize novas transações financeiras (Depósitos e Saques) através de um formulário intuitivo.
*   **Visualização do Extrato:** Apresenta um histórico detalhado de todas as transações realizadas.
*   **Validação de Saldo:** O sistema valida se o usuário possui saldo suficiente antes de permitir uma transação de saque.
*   **Histórico de Transações:** Todas as transações são mantidas em uma lista, e o saldo é um reflexo dessa lista.

## 🎨 Design

O layout e o design do projeto foram baseados em um protótipo no Figma, que pode ser acessado através do seguinte link:

- [Figma - Anybank](https://www.figma.com/design/VeulkY3rtv0wD8LlbGmwAg/Angular-19--Inputs--Outputs-e-Content-Projection-%7C-Anybank--Community-?node-id=503-4264&p=f&t=FWpmsvGIS5Evn8BY-0)

## Tecnologias Utilizadas

*   **Angular 17+:** Framework principal para o desenvolvimento da aplicação, utilizando funcionalidades modernas como **Signals** para gerenciamento de estado reativo.
*   **TypeScript:** Linguagem de programação utilizada para adicionar tipagem estática e robustez ao JavaScript.
*   **CSS moderno:** Estilização dos componentes para uma interface limpa e amigável.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

```
src/
├── app/
│   ├── banner/             # Componente do banner superior
│   │   ├── boas-vindas/    # Componente de boas vindas
│   │   └── conta/          # Componente de exibição de saldo
│   ├── extrato/            # Componente que exibe o extrato de transações
│   ├── form-nova-transacao/ # Formulário para novas transações
│   ├── modelos/            # Modelos de dados da aplicação (ex: Transacao)
│   ├── app.config.ts
│   ├── app.css
│   ├── app.html
│   └── app.ts              # Componente principal da aplicação
├── ...
```

## Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/luciano-mend/anybank.git
    ```

2.  **Instale as dependências:**
    Navegue até o diretório do projeto e instale as dependências utilizando o npm:
    ```bash
    cd anybank
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    Após a instalação das dependências, inicie o servidor de desenvolvimento com o seguinte comando:
    ```bash
    npm start
    ```
    A aplicação estará disponível em `http://localhost:4200/`.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.