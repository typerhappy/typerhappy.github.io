let photo1 = {
    photo: './images/photo-1546531888-dfb0b05c2b05.webp',
    title: 'Ancient River',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

let photo2 = {
    photo: './images/photo-1567018548889-6d7f0eaff046.webp',
    title: 'House by the Ocean',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

let photo3 = {
    photo: '/images/photo-1610034030179-1e6cfe55f075.webp',
    title: 'Transylvanian Woods',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
};

let photo4 = {
    photo: '/images/photo-1613408192585-e150ba573310.webp',
    title: "Ocean Morning",
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

let photo5 = {
    photo: '/images/photo-1614202158805-5269c4a2a28a.webp',
    title: 'Winter Sunrise',
    description: 'Eget nunc lobortis mattis aliquam faucibus. Quis varius quam quisque id diam. Risus at ultrices mi tempus imperdiet nulla malesuada.'
};

let photos = [photo1, photo2, photo3, photo4, photo5]
let currentPhoto = 0;

let loadPhoto = (currentPhoto) => {
    $('#main-image').attr('src', photos[currentPhoto].photo);
    $('#photo-title').text(photos[currentPhoto].title);
    $('#photo-description').text(photos[currentPhoto].description);
}

loadPhoto(currentPhoto);

$('#navi-jobb').click(() => {
    if (currentPhoto < photos.length) {
        currentPhoto++
        loadPhoto(currentPhoto)
    } 
})


$('#navi-bal').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--
        loadPhoto(currentPhoto)
    }
})

let loadThumbnail =  (picture) => {
    $('#thumbnails-container').append(`<img class='thumbnail'>`)
    $('.thumbnail:last-of-type').attr('src', picture.photo)
    console.log(picture.photo)
}
//css(

photos.forEach(loadThumbnail)