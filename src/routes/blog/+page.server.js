import { error } from '@sveltejs/kit';
import { posts } from '../../Data.js';

export function load({ params }) {
    if (posts && posts.length > 0) {
        return {posts};
    } else {
        return error(404, 'No posts found');
    }
}