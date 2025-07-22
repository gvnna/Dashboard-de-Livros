📖 LitDash - Dashboard de Livros da OpenLibrary

🎯 Visão Geral
O LitDash é um dashboard web interativo para explorar o vasto acervo da API pública da OpenLibrary. A aplicação permite que os usuários pesquisem livros por título ou autor e visualizem os resultados em uma grade de cards responsiva.

🚀 Tecnologias
Frontend: React 18+ com Hooks

Estilização: Material-UI 5+, Tailwind CSS (para utilitários e layout)

Requisições HTTP: Axios

Build Tool: Vite

⚙️ Instalação
Para rodar este projeto localmente, siga os passos abaixo:

Clone o repositório 📂:


```
git clone https://github.com/gvnna/Dashboard-de-Livros.git
``` 

Instale as dependências 📦:

```
npm install
```

Configure as variáveis de ambiente 🔑:

Crie um arquivo chamado .env na raiz do projeto.

Adicione a seguinte variável, que aponta para o endpoint da API:

```
VITE_API_URL=https://openlibrary.org/search.json
``` 
Inicie o servidor de desenvolvimento ✨:

```
npm run dev
``` 

📜 Scripts Disponíveis
npm run dev: Inicia a aplicação em modo de desenvolvimento.

npm run build: Gera a versão de produção do projeto.

🧠 Decisões Técnicas
Arquitetura de Código: O projeto segue a arquitetura em camadas sugerida no desafio, separando as responsabilidades em services (para chamadas de API), hooks (para lógica de estado) e components (para a UI).

Gerenciamento de Estado: Para centralizar a lógica de dados, foram criados dois hooks customizados:

useDebounce: Otimiza as buscas, disparando a chamada à API somente 500ms após o usuário parar de digitar, evitando requisições excessivas.

useBooks: Orquestra o ciclo de vida da busca, gerenciando os estados de carregamento (isLoading), erro (error) e os dados (books).

Busca Inicial Padrão: O desafio sugeria o uso do parâmetro q=* para a busca inicial. No entanto, testes mostraram que a API da OpenLibrary retorna um erro 
500 para esta consulta. Para garantir a estabilidade e cumprir o requisito de exibir uma lista inicial, a decisão foi usar um termo de busca padrão (q=the) para o carregamento da página.

🗺️ Próximos Passos
Dado o escopo do desafio, as seguintes funcionalidades foram planejadas mas não implementadas, e representam os próximos passos naturais para a evolução do projeto:

-Paginação: Implementar a navegação entre as páginas de resultados.
-Modal de Detalhes: Criar uma visualização detalhada para cada livro ao clicar em um card.
-Testes Unitários: Adicionar testes com Jest e React Testing Library para os componentes e hooks, conforme sugerido como diferencial técnico.
-Storybook: Documentar os componentes visualmente com o Storybook.
-Filtros Avançados: Permitir que o usuário refine a busca por ano de publicação ou idioma.