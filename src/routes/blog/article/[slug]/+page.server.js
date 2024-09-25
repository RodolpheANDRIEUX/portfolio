import { error } from '@sveltejs/kit';
import { posts } from '/src/Data.js';

export function load({ params }) {
    const { slug } = params;
    const post = posts.find(post => post.id === slug);

    if (!post) {
        return error(404, 'Post not found');
    }

    return post;
}