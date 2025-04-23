// place files you want to import through the `$lib` alias in this folder.

import { BG } from 'bgutils-js';
import { JSDOM } from 'jsdom';
import { Innertube } from 'youtubei.js';

export async function initInnertube() {
    console.time('load');
    let yt = await Innertube.create();

    const requestKey = 'O43z0dpjhgX20SCx4KAo';
    const visitorData = yt.session.context.client.visitorData;

    if (!visitorData)
        throw new Error('Could not get visitor data');

    const dom = new JSDOM();

    Object.assign(globalThis, {
        window: dom.window,
        document: dom.window.document
    });

    const bgConfig = {
        fetch: (input, init) => fetch(input, init),
        globalObj: globalThis,
        identifier: visitorData,
        requestKey
    };

    const bgChallenge = await BG.Challenge.create(bgConfig);

    if (!bgChallenge)
        throw new Error('Could not get challenge');

    const interpreterJavascript = bgChallenge.interpreterJavascript.privateDoNotAccessOrElseSafeScriptWrappedValue;

    if (interpreterJavascript) {
        new Function(interpreterJavascript)();
    } else throw new Error('Could not load VM');

    const poTokenResult = await BG.PoToken.generate({
        program: bgChallenge.program,
        globalName: bgChallenge.globalName,
        bgConfig
    });

    const placeholderPoToken = BG.PoToken.generatePlaceholder(visitorData);

    yt = await Innertube.create({
        po_token: poTokenResult.poToken,
        visitor_data: visitorData,
        generate_session_locally: true
    });
    console.timeEnd('load');

    return yt;
}