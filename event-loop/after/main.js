const loadButton = window.document.getElementById('loadButton');
const gallery = window.document.getElementById('gallery');

function getImages() {
    return [
        { link: '../images/1.jpg', name: 'First' },
        { link: '../images/2.jpg', name: 'Second' },
        { link: '../images/3.jpg', name: 'Third' },
        { link: '../images/4.jpg', name: 'Fourth' },
        { link: '../images/5.jpg', name: 'Fifth' },
        { link: '../images/6.jpg', name: 'Sixth' },
        { link: '../images/7.jpg', name: 'Seventh' },
        { link: '../images/8.jpg', name: 'Eighth' },
        { link: '../images/9.jpg', name: 'Ninth' },
        { link: '../images/10.jpg', name: 'Tenth' },
        { link: '../images/11.jpg', name: 'Eleventh' },
        { link: '../images/1.jpg', name: 'First' },
        { link: '../images/2.jpg', name: 'Second' },
        { link: '../images/3.jpg', name: 'Third' },
        { link: '../images/4.jpg', name: 'Fourth' },
        { link: '../images/5.jpg', name: 'Fifth' },
        { link: '../images/6.jpg', name: 'Sixth' },
        { link: '../images/7.jpg', name: 'Seventh' },
        { link: '../images/8.jpg', name: 'Eighth' },
        { link: '../images/9.jpg', name: 'Ninth' },
        { link: '../images/10.jpg', name: 'Tenth' },
        { link: '../images/11.jpg', name: 'Eleventh' },
        { link: '../images/1.jpg', name: 'First' },
        { link: '../images/2.jpg', name: 'Second' },
        { link: '../images/3.jpg', name: 'Third' },
        { link: '../images/4.jpg', name: 'Fourth' },
        { link: '../images/5.jpg', name: 'Fifth' },
        { link: '../images/6.jpg', name: 'Sixth' },
        { link: '../images/7.jpg', name: 'Seventh' },
        { link: '../images/8.jpg', name: 'Eighth' },
        { link: '../images/9.jpg', name: 'Ninth' },
        { link: '../images/10.jpg', name: 'Tenth' },
        { link: '../images/11.jpg', name: 'Eleventh' },
        { link: '../images/1.jpg', name: 'First' },
        { link: '../images/2.jpg', name: 'Second' },
        { link: '../images/3.jpg', name: 'Third' },
        { link: '../images/4.jpg', name: 'Fourth' },
        { link: '../images/5.jpg', name: 'Fifth' },
        { link: '../images/6.jpg', name: 'Sixth' },
        { link: '../images/7.jpg', name: 'Seventh' },
        { link: '../images/8.jpg', name: 'Eighth' },
        { link: '../images/9.jpg', name: 'Ninth' },
        { link: '../images/10.jpg', name: 'Tenth' },
        { link: '../images/11.jpg', name: 'Eleventh' },
        { link: '../images/1.jpg', name: 'First' },
        { link: '../images/2.jpg', name: 'Second' },
        { link: '../images/3.jpg', name: 'Third' },
        { link: '../images/4.jpg', name: 'Fourth' },
        { link: '../images/5.jpg', name: 'Fifth' },
        { link: '../images/6.jpg', name: 'Sixth' },
        { link: '../images/7.jpg', name: 'Seventh' },
        { link: '../images/8.jpg', name: 'Eighth' },
        { link: '../images/9.jpg', name: 'Ninth' },
        { link: '../images/10.jpg', name: 'Tenth' },
        { link: '../images/11.jpg', name: 'Eleventh' },
        { link: '../images/1.jpg', name: 'First' },
        { link: '../images/2.jpg', name: 'Second' },
        { link: '../images/3.jpg', name: 'Third' },
        { link: '../images/4.jpg', name: 'Fourth' },
        { link: '../images/5.jpg', name: 'Fifth' },
        { link: '../images/6.jpg', name: 'Sixth' },
        { link: '../images/7.jpg', name: 'Seventh' },
        { link: '../images/8.jpg', name: 'Eighth' },
        { link: '../images/9.jpg', name: 'Ninth' },
        { link: '../images/10.jpg', name: 'Tenth' },
        { link: '../images/11.jpg', name: 'Eleventh' },
    ];
}

loadButton.addEventListener('click', () => {
    const images = getImages();
    const imageWidth = 640;
    const imageHeight = 480;

    images.forEach(image => {
        setTimeout(() => {
            const imageElement = document.createElement('img');
            imageElement.src = image.link;
            imageElement.width = imageWidth;
            imageElement.height = imageHeight;
            waitForImageLoad();
            gallery.appendChild(imageElement);
        }, 0);
    });
});

function waitForImageLoad() {
    let i = 0;

    while (i < 100000000) {
        i++;
    }
}