import { initInnertube } from '$lib/index.js';

export async function load({ params }) {
    const yt = await initInnertube();

    console.time('getVideoInfo');
    const video = await yt.getBasicInfo(params.id);
    console.timeEnd('getVideoInfo');

    return {
        details: {
            id: video.basic_info.id,
            title: video.basic_info.title,
            description: video.basic_info.short_description,
            thumbnail: video.basic_info.thumbnail[0].url,
        },
        formats: video.streaming_data.formats.map(format => {
            return {
                url: format.url,
                quality: format.quality_label,
                fps: format.fps,
                audio_quality: format.audio_quality,
                type: format.mime_type,
                size: format.content_length,
            }
        }),
    };
}