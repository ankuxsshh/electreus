function showGalleryModal(project) {
    const projectImages = {
        'noel': ['static/images/Noel/Noel1.jpeg', 'static/images/Noel/Noel2.jpeg', 'static/images/Noel/Noel3.jpeg', 'static/images/Noel/Noel4.jpeg', 'static/images/Noel/Noel5.jpeg', 'static/images/Noel/Noel6.jpeg'],
        'hyundai': ['static/images/Hyundai/Hyundai1.jpeg', 'static/images/Hyundai/Hyundai2.jpeg', 'static/images/Hyundai/Hyundai3.jpeg', 'static/images/Hyundai/Hyundai4.jpeg', 'static/images/Hyundai/Hyundai5.jpeg'],
        'dlife': ['static/images/Dlife/Dlife1.jpeg', 'static/images/Dlife/Dlife2.jpeg', 'static/images/Dlife/Dlife3.jpeg', 'static/images/Dlife/Dlife4.jpeg'],
        'sncorporate': ['static/images/SN corporate/SN corporate1.jpeg', 'static/images/SN corporate/SN corporate2.jpeg', 'static/images/SN corporate/SN corporate3.jpeg', 'static/images/SN corporate/SN corporate4.jpeg'],
        'glamora': ['static/images/Glamora/Glamora1.jpeg', 'static/images/Glamora/Glamora2.jpeg', 'static/images/Glamora/Glamora3.jpeg', 'static/images/Glamora/Glamora4.jpeg', 'static/images/Glamora/Glamora5.jpeg', 'static/images/Glamora/Glamora6.jpeg', 'static/images/Glamora/Glamora7.jpeg', 'static/images/Glamora/Glamora8.jpeg', 'static/images/Glamora/Glamora9.jpeg', 'static/images/Glamora/Glamora10.jpeg', 'static/images/Glamora/Glamora11.jpeg', 'static/images/Glamora/Glamora12.jpeg', 'static/images/Glamora/Glamora13.jpeg'],
        'atrium': ['static/images/Atrium/Atrium1.jpeg', 'static/images/Atrium/Atrium2.jpeg', 'static/images/Atrium/Atrium3.jpeg'],
        'ibwis': ['static/images/Ibwis/Ibwis1.jpeg', 'static/images/Ibwis/Ibwis2.jpeg', 'static/images/Ibwis/Ibwis3.jpeg', 'static/images/Ibwis/Ibwis4.jpeg'],
        'snkids': ['static/images/SN kids/SN kids1.jpeg', 'static/images/SN kids/SN kids2.jpeg', 'static/images/SN kids/SN kids3.jpeg','static/images/SN kids/SN kids4.jpeg', 'static/images/SN kids/SN kids5.jpeg', 'static/images/SN kids/SN kids6.jpeg','static/images/SN kids/SN kids7.jpeg', 'static/images/SN kids/SN kids8.jpeg', 'static/images/SN kids/SN kids9.jpeg', 'static/images/SN kids/SN kids10.jpeg','static/images/SN kids/SN kids11.jpeg', 'static/images/SN kids/SN kids12.jpeg', 'static/images/SN kids/SN kids13.jpeg', ],
        'taurus': ['static/images/Taurus/Taurus1.jpeg', 'static/images/Taurus/Taurus1.jpeg', 'static/images/Taurus/Taurus3.jpeg', 'static/images/Taurus/Taurus4.jpeg'],
        'prince': ['static/images/Hotel Prince/Hotel Prince 1.jpeg', 'static/images/Hotel Prince/Hotel Prince 2.jpeg'],
        'jajis': ['static/images/JAJIS/JAJIS1.jpeg', 'static/images/JAJIS/JAJIS2.jpeg','static/images/JAJIS/JAJIS3.jpeg','static/images/JAJIS/JAJIS4.jpeg',],
        'doctor': ['static/images/Doctor/Doctor1.jpeg', 'static/images/Doctor/Doctor2.jpeg'],
        'amrita': ['static/images/Amrita/Amrita1.jpeg', 'static/images/Amrita/Amrita2.jpeg', 'static/images/Amrita/Amrita3.jpeg', 'static/images/Amrita/Amrita4.jpeg'],
        'snayurveda': ['static/images/SN ayurveda/SN ayurveda1.jpeg', 'static/images/SN ayurveda/SN ayurveda2.jpeg', 'static/images/SN ayurveda/SN ayurveda3.jpeg', 'static/images/SN ayurveda/SN ayurveda4.jpeg', 'static/images/SN ayurveda/SN ayurveda5.jpeg', 'static/images/SN ayurveda/SN ayurveda6.jpeg', 'static/images/SN ayurveda/SN ayurveda7.jpeg', 'static/images/SN ayurveda/SN ayurveda8.jpeg', 'static/images/SN ayurveda/SN ayurveda9.jpeg', 'static/images/SN ayurveda/SN ayurveda10.jpeg', 'static/images/SN ayurveda/SN ayurveda11.jpeg', 'static/images/SN ayurveda/SN ayurveda12.jpeg', 'static/images/SN ayurveda/SN ayurveda13.jpeg'],
        'devi': ['static/images/Devi/devi1.png', 'static/images/Devi/devi2.png','static/images/Devi/devi4.png','static/images/Devi/devi5.png',]
    };

    const imageContainer = document.getElementById('section-projects-image-container');
    imageContainer.innerHTML = ''; // Clear previous images

    projectImages[project].forEach(imageSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imageContainer.appendChild(imgElement);
    });

    const overlay = document.getElementById('section-projects-overlay');
    overlay.classList.add('active');
}

document.getElementById('section-projects-close-overlay').addEventListener('click', () => {
    const overlay = document.getElementById('section-projects-overlay');
    overlay.classList.remove('active');
});
