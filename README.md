## BACK-END

Para rodar a aplicação back-end basta fazer o comando <strong>`npm run dev`</strong>.<br />
Você pode verificar na [http://localhost:3333](http://localhost:3333) e abrir em
algum software como [Insomnia] ou [Postman].

### `npm run knex:migrate`

  Banco de dados feito pelo SqLite3 e convertido pelo Knex, para utilizar
  com comantos em JavaScript. Para obter o mesmo banco de dados feito na aplicação,
  basta apenas fazer o comando destacado acima.

### `npm run knex:seed`

  E para os Itens, da pasta 'seeds', de coletagem irem para o banco de dados
  na pasta 'items', faça o seguinte comando destacado acima.

## Dependencias Utilizadas

 - [EXPRESS] (https://expressjs.com/pt-br/)
 - [KNEX] (http://knexjs.org/)
 - [SQLITE3]
 - [CORS]


## FRONT-END

- [Leaflet] (https://leafletjs.com/)
- [React-Leaflet] (https://react-leaflet.js.org/)
- [Axios] (https://github.com/axios/axios)

Para o cadastramento foi utilizado a API do IBGE.

### Abrindo na web

Utilizar o `npm start`. Vai abrir pelo http://localhost:3000 como padrão.


## MOBILE

- [EXPO] (https://expo.io/)

### Abrindo o mobile

Utilize o `expo start` e após abrir o Metro Bundler você vai preciar baixar aplicativo do Expo pelo celular.
[ANDROID] (https://play.google.com/store/apps/details?id=host.exp.exponent)

[IOS] (https://apps.apple.com/br/app/expo-client/id982107779)

OBS: Não esqueça de instalar as o <strong>package.json</strong> com as dependencias pelo `npm install`

![Mobile Application View](https://media.giphy.com/media/cmOHagneQgAN6BhsYF/giphy.gif)