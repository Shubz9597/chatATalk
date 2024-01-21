#This is a quickstart bash file for docker setup as well as creating the schema in wsl env
#Pre-requistive docker should be installed and running

docker pull postgres:latest

docker run -d --name postgresdb -p 5432:5432 -e POSTGRES_PASSWORD=rootroot postgres

sleep 10

npm install

npx prisma migrate dev --name init --skip-seed

