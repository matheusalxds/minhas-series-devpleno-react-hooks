### Informações

### useEffect
Informações sobre:

```
const [data, setData] = useState({});

  // Pode ser utilizado na primeira vez que abriu o app
  // Pode ser quando alguma alteração que tenha acontecido na aplicação de maneira geral
  // Colocar quais dependências que caso elas sejam alteradas, fazem esse useEffect
  //  ser executado novamente
  useEffect(() => {
    axios.get('/api').then(res => {
      console.log('res ==>', res);
      setData(res.data);
    });
  }, []);

    console.log(data)
```

### Pré
Antes de inicializarmos o projeto devemos inicializar uma API
com o seguinte comando

```
node node_modules/minhas-series-server/index.js
```

### Inicializar o projeto

```
yarn start
```
