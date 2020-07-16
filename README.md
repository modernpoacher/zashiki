## @modernpoacher/zashiki

# Zashiki

## Configuration Variables

All parameters can be provided as command line arguments.

### Hapi Server

```json
{
  "server": {
    "host": "localhost",
    "port": 5001
  }
}
```

### MongoDB

```json
{
  "mongo": {
    "uri": "mongodb://localhost:27017/zashiki-transport",
    "options": {}
  }
}
```

### Karakuri

```json
{
  "karakuri": {
    "baseUrl": "http://localhost:5003/api/v1"
  }
}
```

### Catbox

```json
{
  "catbox": {
    "cache": {
      "client": {
        "uri": "mongodb://localhost:27017/",
        "partition": "zashiki-mechanism"
      }
    }
  }
}
```

## Environment Variables

All parameters can be provided as command line arguments.

```bash
API_PROTOCOL = 'http'
API_HOST = 'localhost'
API_PORT = '5002'
API_PATH = 'api'
API_VERSION = 'v1'
```

## Build

At the command line execute:

```bash
npm run build
```

## Start

At the command line execute:

```bash
npm start
```

Or:

```bash
npm start -- --server:host localhost --server:port 5001 --mongo:uri mongodb://localhost:27017/zashiki-transport --karakuri:baseUrl http://localhost:5003/api/v1 --catbox:cache:client:uri mongodb://localhost:27017
```
