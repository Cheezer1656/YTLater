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
            {#if !data.query}
                <div class="col text-center">
                    <h2>Welcome to YTLater</h2>
                    <p>Use the search bar above to find videos to download.</p>
                </div>
            {:else if data.result.length === 0}
                <div class="col text-center">
                    <h2>No results found for "{data.query}"</h2>
                </div>
            {/if}
            {#each data.result as video}
                <div class="col d-flex align-items-stretch mb-4">
                    <div class="card" style="width: 25rem;">
                        <img src={video.thumbnail} class="card-img-top" alt="{video.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{video.title}</h5>
                            <p class="card-text">{video.length}</p>
                            <a href="/video/{video.id}" class="btn btn-primary mt-auto">View</a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>