<script>
    export let data;

    let inputElm;
</script>

<div class="d-flex justify-content-center">
    <div class="container text-center">
        <h1><strong>{data.details.title}</strong></h1>
        <img src="{data.details.thumbnail}" class="img-fluid" width="70%" height="100" alt="{data.details.title}">
        <div class="row justify-content-center mt-4">
            <div class="col-5">
                <form on:submit|preventDefault={() => {
                    let i = parseInt(inputElm.value);
                    if (inputElm.value == -1) {
                        alert("Please select a video quality");
                        return;
                    }
                    window.open(data.formats[i].url)
                }}>
                    <div class="row justify-content-center">
                        <div class="col">
                            <select bind:this={inputElm} class="form-select" aria-label="Default select example">
                                <option value="-1" selected>Choose a video quality</option>
                                {#each data.formats as quality, i}
                                    <option value="{i}">{quality.quality}@{quality.fps} | {quality.audio_quality} | {Math.round(quality.size/10000)/100} MB</option>
                                {/each}
                            </select>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary">Download</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-2">
                <a href="https://www.youtube.com/watch?v={data.details.id}" target="_blank" class="btn btn-primary">Watch on YouTube</a>
            </div>
        </div>
        <div class="text-start mt-4">
            <p>{data.details.description}</p>
        </div>
    </div>
</div>