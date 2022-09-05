//find elements
var showPrevBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var slideImage = document.getElementById('slide-image');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create images array
var imagesUrls = [];
imagesUrls.push('https://oir.mobi/uploads/posts/2021-04/1618544203_32-oir_mobi-p-krasivie-zhivie-tsveti-tsveti-krasivo-foto-34.jpg');
imagesUrls.push('https://cs8.pikabu.ru/post_img/big/2016/08/31/4/1472621506191859003.jpg');
imagesUrls.push('https://xaxa-net.ru/uploads/posts/2019-07/1562076597_krasivye-foto-leta_xaxa-net.ru-1.jpg');
imagesUrls.push('https://cameralabs.org/media/k2/items/cache/8f878ea0803189dcd4867928ffaf1eb9_L.jpg');

var currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

//functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    if ( currentImageIndex === 0) {
        showPrevBtn.disabled = true;
     }
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;
}

function onShowNextBtnClick() {
    currentImageIndex++;
    if (currentImageIndex === (imagesUrls.length -1)) {
        showNextBtn.disabled = true;
    }
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;
}