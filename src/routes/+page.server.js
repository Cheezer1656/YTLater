import { initInnertube } from '$lib/index.js';

export async function load({ url }) {
    const query = url.searchParams.get('q');

    if (!query) {
        return {
            query: null,
            result: [],
        };
    }

    const yt = await initInnertube();
    const videos = (await yt.search(query, {
        type: 'video',
    })).results.filter(result => result.type == 'Video').map(video => {
        return {
            id: video.video_id,
            title: video.title.text,
            thumbnail: video.thumbnails[0].url,
            length: video.length_text.text,
        }
    });

    return {
        query: query,
        result: videos,
    };
}