import ytdl from '@distube/ytdl-core';

export async function load({ params }) {
    let info = await ytdl.getBasicInfo("http://www.youtube.com/watch?v=" + params.id);

    return {
        details: info.videoDetails,
        formats: info.formats
    };
}