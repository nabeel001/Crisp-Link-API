# Crisp-Link-API

- Send a POST request with the long url to this API Endpoint and recieve a short url as response
- sending a GET request to the generated crisp-link (i.e. short url) will redirect to the original url

### Tools and frameworks used

- NodeJS, Express, MongoDB (Mongo Atlas)

### How does it work?

- nanoid package is used to generate the unique IDs for the links
- IDs of length 9 are used reduce the probability of collision
- ~2 years needed, in order to have a 1% probability of at least one collision, when 1000 IDs are generated each hour
- MongoDB Atlas (Cloud Database) is used to map the full links to the IDs
- This API is currently hosted for free at herokuapp.com
