//*------GALLERY IMAGES-----*//
$(document).ready(function() {
    var images = [
        { src: "images/cat1.jpeg", caption: "Kitty No.1", description: "Age weights Pet breed vaccinated" },
        { src: "images/cat2.jpg", caption: "Kitty No.2", description: "Age weights Pet breed vaccinated" },
        { src: "images/cat3.jpg", caption: "Kitty No.3", description: "Age weights Pet breed vaccinated" },
        { src: "images/cat4.jpeg", caption: "Kitty No.4", description: "Age weights Pet breed vaccinated" },
        { src: "images/cat5.png", caption: "Kitty No.5", description: "Age weights Pet breed vaccinated" },
        { src: "images/dog1.jpg", caption: "Puppy No.1", description: "Age weights Pet breed vaccinated" },
        { src: "images/dog2.png", caption: "Puppy No.2", description: "Age weights Pet breed vaccinated" },
        { src: "images/dog3.jpg", caption: "Puppy No.3", description: "Age weights Pet breed vaccinated" },
        { src: "images/dog4.jpg", caption: "Puppy No.4", description: "Age weights Pet breed vaccinated" },
        { src: "images/dog5.jpg", caption: "Puppy No.5", description: "Age weights Pet breed vaccinated" }
    ];

    var gallery = $("#image-gallery");
    var infoBox = $("#infoBox");
    var infoCaption = $("#infoCaption");
    var infoDescription = $("#infoDescription");
    var lightbox = $('#lightbox');
    var lightboxImage = $('#lightboxImage');

    // create gallery items
    images.forEach(function(image, i) {
        var galleryItem = $("<div>").addClass("gallery-item");

        var img = $("<img>").attr("src", image.src);
        
        //caption
        var openCaptionTag = $("<div>").addClass("caption").text(image.caption);

        // add description
        var openDescTag = $("<div>").addClass("description").text(image.description);

        //float info window by click
        openDescTag.click(function() {
            infoCaption.text(image.caption); 
            infoDescription.text(image.description); 
            infoBox.show();
        });

        // open lightbox on image click
        img.click(function(event) {
            event.stopPropagation(); // Prevent info box from triggering
            lightboxImage.attr('src', image.src); // Set the image in the lightbox
            lightbox.show(); // Show the lightbox
        });

        // add everything into galleryItem
        galleryItem.append(img, openCaptionTag, openDescTag);
        gallery.append(galleryItem); // add <div> into gallery
    });

    // Close float info window
    $("#closeInfo").click(function() {
        infoBox.hide();
    });

    // Close lightbox when clicking the close button
    $('#closeLightbox').click(function() {
        lightbox.hide(); // Hide the lightbox
    });

    // Close lightbox when clicking outside the image
    lightbox.click(function() {
        lightbox.hide(); // Hide the lightbox when clicking outside the image
    });
});