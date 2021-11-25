# API Design

## User Schema

```
{
username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
}
```

## `GET` /posts

get all posts

Response `200`

```

{
   [post, post ....] 
}
```

## `GET` /posts?username=:username

get all posts for user's username (nickname)

Response `200`
Plain text

```
{
   [post, post ....] 
}
```

## `GET` /posts/:id

get post by id

Response `200`

```
{
   post
}
```

### `POST` /posts

- creating new post

    Request

```
{
username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
}

```

    
    
    Response `201`

    ```
    {
       post
    }
    ```

### `DELETE` /posts/:id

- updating post

    Response `204`




# Example Route
```

import express from 'express';

let posts = [
  {
    id: '1',
    text: 'yoyoyoo 프로제트1!!',
    createdAt: Date.now().toString(),
    name: 'Moon',
    username: 'moon',
    url: '{add picture url}',
  },
  {
    id: '2',
    text: '안뇽!',
    createdAt: Date.now().toString(),
    name: 'Yechan',
    username: 'Yechan',
  },
];
const router = express.Router();

// GET /posts
// GET /posts?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? posts.filter((post) => post.username === username)
    : posts;
  res.status(200).json(data);
});

// GET /posts/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const post = posts.find((post) => post.id === id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: `post id(${id}) not found` });
  }
});

// POST /tweeets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const post = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  posts = [post, ...posts];
  res.status(201).json(post);
});

// PUT /posts/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.text = text;
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: `post id(${id}) not found` });
  }
});

// DELETE /posts/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  posts = posts.filter((post) => post.id !== id);
  res.sendStatus(204);
});

export default router;

```
