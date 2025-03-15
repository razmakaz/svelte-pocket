# Start Docker Compose
docker compose down

echo "Starting Docker Compose..."
docker compose up -d

# Open all relevant services in the browser
echo "Opening browser tabs..."
echo "You may need to refresh the pages if they don't load automatically."

xdg-open http://localhost:5173  # SvelteKit (Change to 3000 for production)
xdg-open http://localhost:8090/_  # PocketBase
xdg-open http://localhost:9090  # MinIO Web Console
xdg-open http://localhost:1080  # MailDev UI

echo "All services are up!"