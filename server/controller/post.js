import * as Posts from '../data/Post.js'

export async function getPosts(req, res, next) {
    const title = req.query.title;
    const data = await (title
        ? Posts.getTitle(title)
        : Posts.getAll())
    res.status(200).json(data)
}

export async function getPost(req, res, next) {
    const id = req.params.id;
    const post = await Posts.getId(id);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: `찾으신 아이디(${id})가 없습니다.` });
    }
}


export async function createPost(req, res, next) {
    const { content, title } = req.body
    const post = await Posts.create(content, title)
    res.status(201).json(post)
}

export async function updatePost(req, res, next) {
    const id = req.params.id;
    const content = req.body.content;
    const title = req.body.title
    const post = await Posts.getId(id);
    if (!post) {
        return res.status(404).json({ message: `찾을 수 없습니다` });
    }
    const updated = await Posts.update(id, content, title);
    res.status(200).json(updated);
}

export async function deletePost(req, res, next) {
    const id = req.params.id;
    const post = await Posts.getId(id);
    if (!post) {
        return res.status(404).json({ message: `해당 글을 찾을 수 없습니다` });
    }
    await Posts.remove(id);
    res.sendStatus(204);
}