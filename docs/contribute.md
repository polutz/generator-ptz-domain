# How to help


## Setup

[pt-br](https://github.com/polutz/generator-ptz-domain/docs/contribute.pt-br.md)
[en-us](https://github.com/polutz/generator-ptz-domain/docs/contribute.md)

### Download project
```
    git clone https://github.com/polutz/generator-ptz-domain.git
```

### Go to project folder
```
    cd generator-ptz-domain
```

### Install dependencies
```
    npm install -g yo
```

```
    npm install && typings install
```

### Make it globally

With 'npm link', you can run 'yo ptz-domain' from anywhere on your machine,
and it will always points to this directory

```
    npm link
```


## Tests
```
    npm test
```

## Integration Test

### Create test project folder
```
    mkdir ptz-domain-test && cd ptz-domain-test 
```

### Clean test project folder
```
    cd .. && rm -r ptz-domain-test && mkdir ptz-domain-test && cd ptz-domain-test
```

### Run Yeoman
```
    yo ptz-domain
```
