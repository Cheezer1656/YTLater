import ytdl from '@distube/ytdl-core';

export function GET({ url }) {
    let video = ytdl(url.searchParams.get('url'), {
        quality: url.searchParams.get('quality') || 'lowest',
        filter: url.searchParams.get('filter') || 'videoandaudio'
    });

    return new Response(video, {
        headers: {
            'Content-Type': 'video/mp4',
            'Content-Disposition': 'inline'
        }
    });
}