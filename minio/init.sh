#!/bin/sh

echo "Waiting for MinIO to start..."
sleep 5  # Give MinIO some time to initialize

# Set MinIO alias
mc alias set local http://minio:9000 admin supersecret

# Check if the bucket already exists
if mc ls local/my-bucket >/dev/null 2>&1; then
  echo "Bucket 'my-bucket' already exists."
else
  # Create bucket if it doesn't exist
  echo "Creating bucket 'my-bucket'..."
  mc mb local/my-bucket
fi

echo "MinIO setup complete!"
