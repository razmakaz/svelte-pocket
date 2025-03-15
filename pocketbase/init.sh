echo "Initializing PocketBase with MailDev SMTP and MinIO S3 settings..."

# Wait for PocketBase to start
sleep 3

# Apply SMTP Settings
curl -X PATCH http://localhost:8090/api/settings/mail -H "Content-Type: application/json" \
  --data '{
    "enabled": true,
    "host": "maildev",
    "port": 1025,
    "username": "",
    "password": "",
    "tls": false
  }'

# Apply S3 Storage Settings
curl -X PATCH http://localhost:8090/api/settings/storage -H "Content-Type: application/json" \
  --data '{
    "provider": "s3",
    "bucket": "my-bucket",
    "region": "us-east-1",
    "endpoint": "http://minio:9000",
    "accessKey": "admin",
    "secret": "supersecret",
    "forcePathStyle": true
  }'

echo "PocketBase configuration complete!"