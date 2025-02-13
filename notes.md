### Find container network:
- `docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <CONTAINER_ID>` 
- Apply changes to database: `npx drizzle-kit push`