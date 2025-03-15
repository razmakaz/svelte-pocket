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

## Setting Essentials

### MinIO
Create a bucket.
### MailDev
### Pocketbase

#### Create A Superuser
First, you'll need to create your first Pocketbase Superuser account. 

#### Create A Service User
Then you'll need to create the first user as your service user.

#### Set Up SMTP
Go to Pocketbase Settings and enter your SMTP credentials from the .env file. 

#### Connect S3 with MinIO
Go to Pocketbase Settings and enter your MinIO bucket configuration for S3.

## Restart Your Containers
Once finished, you can restart the containers and Sveltekit should start.
`./Start.sh`

# Going to Production
This part is unfinished. For now, this is purely a development environment.