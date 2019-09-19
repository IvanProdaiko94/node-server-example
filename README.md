# Node server example

## Run

In order to run the app one needs to set env variables:
```.env
SERVICE_PORT=
HEALTHCHECK_PORT=
``` 

start:
```bash
node index.js
```

expected format:
```json
{
    "timestamp": 1493758596,
    "data": [
        { "title": "Part 1", "values": [0, 3, 5, 6, 2, 9] },
        { "title": "Part 2", "values": [6, 3, 1, 3, 9, 4] }
    ]
}
```

compute the result:
```bash
curl -d '{
             "timestamp": 1493758596,
             "data": [
                 { "title": "Part 1", "values": [0, 3, 5, 6, 2, 9] },
                 { "title": "Part 2", "values": [6, 3, 1, 3, 9, 4] }
             ]
         }' -H "Content-Type: application/json" -X POST http://localhost:{port}/compute/{request_id}
```