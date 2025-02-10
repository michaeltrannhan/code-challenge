# Post CRUD API

RESTful API for managing blog posts using Express.js, TypeScript, and Prisma.

## API Endpoints

### Create Post
- `POST /api/posts`
```json
{
  "title": "Post Title",
  "content": "Post content",
  "authorEmail": "author@example.com"
}
```

### List Posts
- `GET /api/posts`
- Query parameters:
  - `searchString`: Search in title and content
  - `skip`: Pagination offset
  - `take`: Number of items to return
  - `orderBy`: Sort order ('asc' or 'desc')

### Get Post
- `GET /api/posts/:id`

### Update Post
- `PUT /api/posts/:id`
```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

### Delete Post
- `DELETE /api/posts/:id`

## Development

1. Install dependencies:
```bash
yarn install
```

2. Run migrations:
```bash
yarn prisma:migrate
```

3. Start development server:
```bash
yarn dev
```
