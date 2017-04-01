# Como contribuir

[pt-br](https://github.com/polutz/generator-ptz-graphql/docs/contribute.pt-br.md)
[en-us](https://github.com/polutz/generator-ptz-graphql/docs/contribute.md)


## Setup

### Download do projeto
```
    git clone https://github.com/polutz/generator-ptz-graphql.git
```

### Abrir pasta do projeto
```
    cd generator-ptz-graphql
```

### Instalar dependencias
```
    npm install -g yo
```

```
    npm install && typings install
```

### Instalar globalmente

With 'npm link', you can run 'yo ptz-graphql' from anywhere on your machine,
and it will always points to this directory

```
    npm link
```


## Testes
```
    npm test
```

## Teste de integração

### Criar pasta do projeto teste
```
    mkdir ptz-graphql-test && cd ptz-graphql-test 
```

### Limpar pasta do projeto teste
```
    cd .. && rm -r ptz-graphql-test && mkdir ptz-graphql-test && cd ptz-graphql-test
```

### Criar base do projeto com Yeoman
```
    yo ptz-graphql
```
