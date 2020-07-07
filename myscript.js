
function goTo(id) {
    const el = document.getElementById(id)
    el.scrollIntoView();
}

$(document).ready(function () {

    // fill and open modal with details of picture clicked
    $('.thumbnail').click(function () {
        const img = $(this).children('img').first();
        const src = img.attr('src');
        // get the legend from the overlay
        const caption = $(this).children('div.overlay').first().html();
        $("#modalImg").attr('src', src);
        $('#modalCaption').html(caption);
        $("#myModal").css('opacity', 1).css('visibility', 'visible');
        $("body").addClass("modal-opened"); // a class to prevent the body from scrolling when modal is opened
    })
    
    // close modal when click on empty space or caption
    $('body').click(function (event) {
        if ($(event.target).is('#myModal') || $(event.target).is('#modalCaption')) {
            $("#myModal").css('opacity', 0).css('visibility', 'hidden');
            $("body").removeClass("modal-opened"); // a class to prevent the body from scrolling when modal is opened
        }
    });
});
