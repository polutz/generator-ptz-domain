# Como contribuir

[pt-br](https://github.com/polutz/generator-ptz-domain/docs/contribute.pt-br.md)
[en-us](https://github.com/polutz/generator-ptz-domain/docs/contribute.md)


## Setup

### Download do projeto
```
    git clone https://github.com/polutz/generator-ptz-domain.git
```

### Abrir pasta do projeto
```
    cd generator-ptz-domain
```

### Instalar dependencias
```
    npm install -g yo
```

```
    npm install && typings install
```

### Instalar globalmente

With 'npm link', you can run 'yo ptz-domain' from anywhere on your machine,
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
    mkdir ptz-domain-test && cd ptz-domain-test 
```

### Limpar pasta do projeto teste
```
    cd .. && rm -r ptz-domain-test && mkdir ptz-domain-test && cd ptz-domain-test
```

### Criar base do projeto com Yeoman
```
    yo ptz-domain
```
