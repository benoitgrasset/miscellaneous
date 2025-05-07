## Main Docker commands

`docker ps`
Provides a list of the Docker containers on your machine.

`docker ps -a`
Shows all containers, including those that are stopped.

`docker images`
Lists all Docker images available locally on your machine.

`docker build -t <name> .`
Builds a Docker image from a Dockerfile in the current directory and tags it with <name>.

`docker run <image>`
Runs a container from the specified image.

`docker run -p <host>:<container> <image>`
Maps a port from the container to the host, allowing external access.

`docker exec -it <container> <command>`
Executes a command inside a running container (often used with bash or sh).

`docker logs <container>`
Displays the logs for a container.

`docker stop <container>`
Gracefully stops a running container.

`docker kill <container>`
Forces a container to stop immediately.

`docker rm <container>`
Removes a stopped container.

`docker rmi <image>`
Deletes a Docker image from your system.

`docker pull <image>`
Downloads an image from Docker Hub or another registry.

`docker push <image>`
Uploads a local image to a Docker registry.

`docker-compose up`
Starts services defined in a docker-compose.yml file (great for multi-container setups).


## Basic Docker commands

```
sudo docker build -t my-app .
```
```
sudo docker images
```
```
sudo docker run -p 3000:3000 my-app	/ docker run -it my-app
```
```
curl http://localhost:3000
```
