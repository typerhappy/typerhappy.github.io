let photo1 = {
    sourceOf: './images/photo-1546531888-dfb0b05c2b05.webp',
    title: 'Ancient River',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

let photo2 = {
    sourceOf: './images/photo-1567018548889-6d7f0eaff046.webp',
    title: 'House by the Ocean',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

let photo3 = {
    sourceOf: '/images/photo-1610034030179-1e6cfe55f075.webp',
    title: 'Transylvanian Woods',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
};

let photo4 = {
    sourceOf: '/images/photo-1613408192585-e150ba573310.webp',
    title: "Ocean Morning",
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

let photo5 = {
    sourceOf: '/images/photo-1614202158805-5269c4a2a28a.webp',
    title: 'Winter Sunrise',
    description: 'Eget nunc lobortis mattis aliquam faucibus. Quis varius quam quisque id diam. Risus at ultrices mi tempus imperdiet nulla malesuada.'
};

let photos = [photo1, photo2, photo3, photo4, photo5]
let currentPhoto = 0;

let loadPhoto = (currentPhoto) => {
    $('#main-image').attr('src', photos[currentPhoto].sourceOf);
    $('#photo-title').text(photos[currentPhoto].title);
    $('#photo-description').text(photos[currentPhoto].description);
    let index = document.querySelector(`[data-number='${currentPhoto}']`)
    $(index).addClass('thumbnail-clicked').siblings().removeClass('thumbnail-clicked');
}

loadPhoto(currentPhoto);

$('#navi-jobb').click(() => {
    if (currentPhoto < photos.length - 1) {
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

let indexNum = 0;

let loadThumbnail = (picture) => {
    $('#thumbnails-container').append(`<img class='thumbnail'>`);
    $('.thumbnail:last-of-type').attr('src', picture.sourceOf);
    $('.thumbnail:last-of-type').attr("data-number", indexNum);
    indexNum++;

}

photos.forEach(loadThumbnail);

// thumbnail-re torteno kattintast implementalo fuggveny

$('.thumbnail').click((event) => {
    let indexClicked = $(event.target).attr('data-number');
    let indexPhoto = parseInt(indexClicked);
    loadPhoto(indexPhoto)
  })

  // hover-re megjeleno ablakocskak letrehozasa

  
  // $('.hover-title:last-of-type').text(`${picture.title}`);
  
  let showTitle = function (picture, thumbnailPosition) {
      $('.hover-title').css('opacity', '1')
      $('.hover-title').text(`${picture.title}`);
      let move = `${thumbnailPosition}` * 72;
     $('#hover-title').animate({'margin-left': `${move}`,'margin-right': `-=${move}`}, 1);
      console.log(`${thumbnailPosition}`);
    };

    
    
   $('.thumbnail').hover((event) => {
        let indexHovered = $(event.target).attr('data-number');
        let indexHoverPhoto = parseInt(indexHovered);
        //console.log(indexHoverPhoto);
        showTitle(photos[indexHoverPhoto], indexHoverPhoto);
    }, () => {
        $('.hover-title').css('opacity','0')
    });