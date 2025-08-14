$.getJSON("/recent_work/images.json", function(files) {
    files.forEach(function(file) {
        $("body").append("<img src='/recent_work/" + file + "'>");
    });
});