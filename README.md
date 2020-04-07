### Dependency
- react-copy-to-clipboard 
https://github.com/nkbt/react-copy-to-clipboard

- chroma-js
https://gka.github.io/chroma.js/ 

- react-slider
https://github.com/react-component/slider

- materal-ui
https://material-ui.com/

### To run developement server 
`docker-compose up` 

### To test in Docker environmnet
`docker build -f Dockerfile.dev .`
`docker run -it <containerid> npm run test`

### Live updating test in Docker
1. `docker-compose up` 
2. open up a second terminal and get the running containerid
`docker exec -it <containerid> npm run test`

### build( run Nginx )
`docker build .`
`docker run -p 8080:80 <containerid>`




