import { db } from '../db/database.js';
const SELECT_JOIN = "SELECT * FROM post";
const ORDER_DESC = "ORDER BY post.createdAt DESC";

export async function getAll() {
    return db
        .execute(`${SELECT_JOIN}`)
        .then((result) => result[0])
}
export async function getTitle(title) {
    return db
        .execute(`${SELECT_JOIN} WHERE post.title=?`, [title])
        .then((result) => result[0])
}
export async function getId(id) {
    return db
        .execute(`${SELECT_JOIN} WHERE post.id=?`, [id])
        .then((result) => result[0][0])
}
export async function create(content, title) {
    return db
        .execute('INSERT INTO post (content, createdAt, title) VALUES(?,?,?)', [
            content,
            new Date(),
            title,
        ])
        .then((result) => getId(result[0].insertId));
}
export async function update(id, content, title) {
    return db
        .execute('UPDATE post SET content=?, title=? WHERE id=?', [content, title, id]

        )
}

export async function remove(id) {
    return db
        .execute('DELETE FROM post WHERE id=?', [id])
}