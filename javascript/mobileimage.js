$.getJSON("/recent_workimages.json", function(files) {
    files.forEach(function(file) {
        $("#gallery").append(
            `<img src='/recent_work/${file}' style='height:50vw; width:auto; display:block; transition:.5s ease; backface-visibility:hidden; padding-bottom:45px;'>`
        );
    });
});