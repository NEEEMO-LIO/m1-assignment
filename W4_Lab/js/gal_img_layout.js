//*------GALLERY IMAGES-----*//
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

var gallery = document.getElementById("image-gallery");
var infoBox = document.getElementById("infoBox");
var infoCaption = document.getElementById("infoCaption");
var infoDescription = document.getElementById("infoDescription");
var closeInfo = document.getElementById("closeInfo");

for (let i = 0; i < images.length; i++) {
    var galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item"; 
    
    var img = document.createElement("img");
    img.src = images[i].src; 
    
    //caption
    var openCaptionTag = document.createElement("div");
    openCaptionTag.className = "caption"; // use class="img-cap"
    openCaptionTag.innerText = images[i].caption; // setting caption text

    // add description
    var openDescTag = document.createElement("div");
    openDescTag.className = "description"; // use class="img-des" 
    openDescTag.innerText = images[i].description; // setting description text

    //float info window by click
    openDescTag.onclick = function() {
        infoCaption.innerText = images[i].caption; 
        infoDescription.innerText = images[i].description; 
        infoBox.style.display = "block"; 
    }

   

    // add everything into galleryItem
    galleryItem.appendChild(img);
    galleryItem.appendChild(openCaptionTag); 
    galleryItem.appendChild(openDescTag);    
    
    gallery.appendChild(galleryItem); // add <div> into gallery
}

// Close float info window
closeInfo.onclick = function() {
    infoBox.style.display = "none"; 
}
