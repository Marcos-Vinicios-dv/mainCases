## mainCases

<p>Esse projeto foi inspirado em um projeto criado pela Rocketseat chamado "rocketshoes" onde simulava um e-commerce de sapatos, porém na aplicação original seu estado global era controlado usando a context API do react, enquanto nessa versão além de ser um e-commerce de gabinentes para computadores seu estado global é controlado pela biblioteca Redux juntamente com o Redux Saga.</p>

<p>Num todo a aplicação funciona da mesma maneira para ambas, na página inicial o usuário pode escolher entre as opções dos produtos e adiciona-los ao carrinho, já no carrinho ele irá encontrar o valor total dos produtos em conjunto e uma tabela com os produtos e seus valores unitários, tendo a liberdade de exclui-los do carrinho ou aumentar a quantidade.</p>

### Imagens da aplicação:
<img width="100%" src="https://ik.imagekit.io/6s2mndhy9tk/CaseMaker.bf995431_riV4sw2af.png" alt="Página Pricipal"></img>
<img width="100%" src="https://ik.imagekit.io/6s2mndhy9tk/Captura_de_tela_de_2021-07-16_10-35-31_vcaTKPA-p.png" alt="Página Carrinho"></img>

### Tecnologias utilizadas:

<b>Linguagem</b>
- Javascript(React).

<br>

<b>Bibliotecas</b>
- <a href="https://axios-http.com/docs/intro" >axios</a> (requisições a api);
- <a href="https://immerjs.github.io/immer/" >immer</a> (alteração em dados imutaveis);
- <a href="https://github.com/typicode/json-server" >json-server</a> (fake API);
- <a href="https://redux.js.org/" >redux</a> (gerenciamento de estado);
- <a href="https://redux-saga.js.org/" >redux-saga</a> (efeitos colaterais do redux);
- <a href="https://reactrouter.com/web/guides/quick-start" >react-router-dom</a> (navegação entre paginas);
- <a href="https://fkhadra.github.io/react-toastify/introduction" >react-toatify</a> (notificações personalizadas);
- <a href="https://polished.js.org/" >polished</a> (efeitos em cores);
- <a href="https://styled-components.com/" >styled-components</a> (efeitos em cores);


## Inicializar projeto

<p>Para inicializar esse projeto em sua máquina será necessário usar os seguinte comandos(como o node instalado):</p>

- Iniciar Back-end (na pasta raiz do projeto + json-server intalado como dependência global) 

    Iniciar server localmente
    ```json-server server.json -p 3333```

- Iniciar Front-end

    Instalar dependências 
    ```npm install```

    Inicializar aplicação localmente
    ```npm run dev```
