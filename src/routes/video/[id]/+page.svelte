<script>
    export let data;
</script>

<div class="d-flex justify-content-center">
    <div class="container text-center">
        <h1><strong>{data.details.title}</strong></h1>
        <img src="{data.details.thumbnails.sort((a, b) => a.width*a.height < b.width*a.height)[0].url}" class="img-fluid" width="70%" height="100" alt="{data.details.title}">
        <div class="row justify-content-center mt-4">
            <div class="col-4">
                <form action="/download">
                    <input type="hidden" name="url" value="{data.details.video_url}">
                    <div class="input-group">
                        <select class="form-control" name="filter">
                            <option value="videoandaudio">Video + Audio</option>
                            <option value="audioonly">Audio Only</option>
                            <option value="videoonly">Video Only</option>
                        </select>
                        <select class="form-control" name="quality">
                            <option value="lowest">Low Quality</option>
                            <option value="highest">High Quality</option>
                        </select>
                        <button type="submit" class="btn btn-primary">Download</button>
                    </div>
                </form>
            </div>
            <div class="col-2">
                <a href="{data.details.video_url}" target="_blank" class="btn btn-primary">Watch on YouTube</a>
            </div>
        </div>
        <div class="text-start mt-4">
            <p>{data.details.description}</p>
        </div>
    </div>
</div>