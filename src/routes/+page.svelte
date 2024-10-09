<script>
    export let data;
</script>

<form action="/" method="get">
    <div class="input-group">
        <input type="text" name="q" value={data.query} placeholder="Search for videos" class="form-control" />
        <button type="submit" class="btn btn-primary">Search</button>
    </div>
</form>

<div class="d-flex justify-content-center">
    <div class="container m-5 w-100">
        <div class="row">
            {#each data.result.items as video}
                <div class="col d-flex align-items-stretch mb-4">
                    <div class="card" style="width: 25rem;">
                        <img src={video.thumbnail.thumbnails[0].url} class="card-img-top" alt="{video.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{video.title}</h5>
                            <p class="card-text">{video.length.simpleText}</p>
                            <a href="/video/{video.id}" class="btn btn-primary mt-auto">View</a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>