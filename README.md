## `@modernpoacher/zashiki`

# Zashiki

## Configuration Variables

All parameters can be provided as command line arguments.

### Hapi Server

```json
{
  "server": {
    "host": "0.0.0.0",
    "port": 5001
  }
}
```

### MongoDB

```json
{
  "mongo": {
    "uri": "mongodb://127.0.0.1:27017/zashiki-transport",
    "options": {}
  }
}
```

### Karakuri

```json
{
  "karakuri": {
    "baseUrl": "http://127.0.0.1:5003/api/v1"
  }
}
```

### Catbox

```json
{
  "catbox": {
    "cache": {
      "client": {
        "uri": "mongodb://127.0.0.1:27017/",
        "partition": "zashiki-mechanism"
      }
    }
  }
}
```

## Environment Variables

All parameters can be provided as command line arguments.

```bash
API_PROTOCOL='http'
API_HOST='127.0.0.1'
API_PORT='5002'
API_PATH='api'
API_VERSION='v1'
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
npm start -- \
  --server:host 0.0.0.0 \
  --server:port 5001 \
  --mongo:uri mongodb://127.0.0.1:27017/zashiki-transport \
  --karakuri:baseUrl http://127.0.0.1:5003/api/v1 \
  --catbox:cache:client:uri mongodb://127.0.0.1:27017
```
