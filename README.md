# SveltePocket
This is a Sveltekit and Pocketbase boilerplate project.

It's dockerized and contains: 
- Sveltekit
- Pocketbase
- MinIO (For Pocketbase S3 during Development)
- MailDev (For Pocketbase SMTP during Development)

## Getting Started

Copy the `.env.example` files with 

`cp ./.env.example ./.env && cp ./app/.env.example ./app/.env`

Make sure that Docker Compose is installed then run 
`./Start.sh`

This will start all of the containers and open all various services in tabs. 

# Going to Production
This part is unfinished. For now, this is purely a development environment.