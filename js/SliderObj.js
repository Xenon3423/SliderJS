function Slider() {
    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;
    this.start = function (elId) {
        var that = this;
        
        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev');
        this.showNextBtn = el.querySelector('.show-next');
        this.slideImage = el.querySelector('.slide-img');

        this.showPrevBtn.addEventListener('click', function(e) {
            that.onShowPrevBtnClick(e);
        });
        
        this.showNextBtn.addEventListener('click', function(e) {
            that.onShowNextBtnClick();
        });
        

        this.imagesUrls.push('https://oir.mobi/uploads/posts/2021-04/1618544203_32-oir_mobi-p-krasivie-zhivie-tsveti-tsveti-krasivo-foto-34.jpg');
        this.imagesUrls.push('https://cs8.pikabu.ru/post_img/big/2016/08/31/4/1472621506191859003.jpg');
        this.imagesUrls.push('https://xaxa-net.ru/uploads/posts/2019-07/1562076597_krasivye-foto-leta_xaxa-net.ru-1.jpg');
        this.imagesUrls.push('https://cameralabs.org/media/k2/items/cache/8f878ea0803189dcd4867928ffaf1eb9_L.jpg');

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPrevBtnClick = function(e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };

    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesUrls.length -1)) {
            this.showNextBtn.disabled = true;
        }
    };
}