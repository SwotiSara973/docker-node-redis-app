This project is a simple multi-container application using **Node.js** and **Redis**, deployed with **Docker Compose**.

## 🚀 Project Structure

- app.js: A Node.js app that connects to Redis to count page visits.
- Dockerfile: Defines how to build the Node.js app container.
- docker-compose.yml: Brings up both the Node.js app and Redis as services.

## 🚀 How to Run

1. Clone the repository:
   git clone https://github.com/SwotiSara973/docker-node-redis-app.git
   cd docker-node-redis-app

2. Build and start the containers:
   docker-compose up --build

3. Open your browser and visit:
   http://localhost:3000

4. You should see the page visit count increment on refresh.
