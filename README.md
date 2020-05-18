### Deployed on AWS
colorapp-env.eba-2s5pebwc.ap-southeast-2.elasticbeanstalk.com

### Dependency
- react-copy-to-clipboard 
https://github.com/nkbt/react-copy-to-clipboard

- chroma-js
https://gka.github.io/chroma.js/ 

- react-slider
https://github.com/react-component/slider

- materal-ui
https://material-ui.com/

- React Color
https://casesandberg.github.io/react-color/

- React material-ui Form validator
https://www.npmjs.com/package/react-material-ui-form-validator

- React-Sortable-Hoc
https://github.com/clauderic/react-sortable-hoc

-svgbackgrounds.com
https://www.svgbackgrounds.com/

### To run developement server 
`docker-compose up` 

### To test in Docker environment
`docker build -f Dockerfile.dev .`
`docker run -it <containerid> npm run test`

### Live updating test in Docker
1. `docker-compose up` 
2. open up a second terminal and get the running containerid
`docker exec -it <containerid> npm run test`

### build( run Nginx )
`docker build .`
`docker run -p 8080:80 <containerid>`




