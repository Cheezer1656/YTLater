import { GetListByKeyword } from 'youtube-search-api';

export async function load({ url }) {
    let query = url.searchParams.get('q');

    let result = await GetListByKeyword(query, false, 10, [{type:'video'}]);

    return {
        query: query,
        result: result
    };
}