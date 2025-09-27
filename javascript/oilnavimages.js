while (i<4){
$.getJSON("image_manifests/recent_work.json", function(files) {
    files.forEach(function(file) {
        const title = file.title || "Unknown";
        const size = file.size || "";
        const medium = file.medium || "";

        $("#gallery").append(`
            <div class="container">
                <img src="images/${file.src}" alt="${title}" class="large-image" style="padding-top:10px">
                <div class="middle">
                    <div class="text">${title}<br>${size}<br>${medium}</div>
                </div>
            </div>
        `);
        i++;
    });
});
}