#build
docker build -t maikehavemann/node-hello-app .

#run
docker run -p 49160:3000 -d maikehavemann/node-hello-app:latest
