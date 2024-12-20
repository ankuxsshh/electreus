const brands = [
  { name: "Schneider Electric", img: "https://www.etim-international.com/wp-content/uploads/2022/04/Schneider-Electric-logo-jpg_16-9_white.png" },
  { name: "Siemens", img: "https://discovertemplate.com/wp-content/uploads/2024/04/Siemens.jpg" },
  { name: "Legrand", img: "https://images.cnscdn.com/d/7/c/a/d7cab70b9b6b4971a63ec0b0e2aa1237/original.jpg" },
  { name: "Larsen & Toubro", img: "https://img.etimg.com/thumb/msid-113078902,width-1200,height-900,resizemode-4,imgsize-14376/larsen-toubro-share-price-live-updates-05-sep-2024.jpg" },
  { name: "POLYCAB", img: "https://www.wirecable.in/wp-content/uploads/2023/09/polycab-logo.jpg" },
  { name: "ATC", img: "https://img1.wsimg.com/isteam/ip/2c38f25c-eb00-4061-9852-ab63bf7f971c/ATC%20logo1.jpg" },
  { name: "hager", img: "https://hannaik.com/wp-content/uploads/2017/09/Hager-logo-free-download.png" },
  { name: "vguard", img: "https://bsmedia.business-standard.com/_media/bs/img/article/2016-11/20/full/1479628783-7473.jpg" },
  { name: "havells", img: "https://www.red-dot.org/fileadmin/_processed_/6/f/csm_15-DP04811-2023BC.1003793_CO_5e3c2bf444.jpg" },
  { name: "Cummins", img: "https://i.etsystatic.com/18215204/r/il/db9fbe/2131060770/il_fullxfull.2131060770_bq2o.jpg" },
  { name: "RR Kabel", img: "https://5.imimg.com/data5/SELLER/Default/2022/11/PB/NU/IC/9072824/rr-logo-500x500.png" },
  { name: "Cooper Corp", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVe1bKVfF8lTvOh7uePyx_gh007RvwDHlIA&s" },
  { name: "Kirloskar Green", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKDmhiIA45YqMF255I_LM7ogb4-1R9l81tw&s" },
  { name: "Crompton", img: "https://i.pinimg.com/736x/27/71/68/277168f30b539102389ead7f2ee1eba8.jpg" },
  { name: "OSRAM", img: "https://logos-world.net/wp-content/uploads/2023/03/Osram-Corporate-Logo.jpg" },
  { name: "Philips Lighting", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6NZLKMkZkt-fsXDxQDjuZIN1CKvZjnTtEQ&s" },
  { name: "Luker", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_e8SzShMrMSw8E60BXddEYAqo1_Lhmnlnw&s" },
  { name: "Dewton LED", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZYqH9nAgavLxfJcDQh0EDuLLD81jVj33NQ&s" },
  { name: "atomberg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkxzGh3OEGAU7dSE7zutAO5tlU3a4JJAqgQ&s" },
  { name: "orientelectric", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxpXqjnwbbY0UlMcHBHyfa7Q99hC8zdoRbA&s" },
  { name: "TOTO", img: "https://i0.wp.com/abcgroupoman.com/wp-content/uploads/2016/01/toto-logo-395x256.jpg" },
  { name: "KOHLER", img: "https://kohler.scene7.com/is/image/Kohler/KohlerLogoImage?$CorpSecondary$&crop=110,0,23778,16000&wid=590&hei=397" },
  { name: "Jaguar", img: "https://www.surfacesreporter.com/Myuploads/brand/smallimage/20210618004019.jpg" },
  { name: "Geberit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdicD30F2fVkcM1TP5ZnhIJwp9dZ3Vo6jUIw&s" },
  { name: "CERA", img: "https://exchange4media.gumlet.io/news-photo/96879-ceralogo.jpg" },
  { name: "Aquaguard", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuJyRUJNoH-MkJNQvBBqjzbCUcaMqhwavvQ&s" },
  { name: "KENT", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkH7M3js67aU6uiHuH73gR-rh-l4Vr5hLKQ&s" },
  { name: "Supreme", img: "https://play-lh.googleusercontent.com/QZSPr9GyHDLORaVEfz2JIt7NUTm4KWRL7OCHBZfcCbC6cdo2fPd24kuheCPuSlTWxw" },
  { name: "ASTRAL PIPES", img: "https://logowik.com/content/uploads/images/astral-pipes9674.logowik.com.webp" },
  { name: "BALCO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6B4M9VPad0Vplwl1UriZl-i_q7tlH2xafKw&s" },
];

// Get the container element
const container = document.querySelector(".brand-cards-container");

// Duplicate the array to create a seamless infinite effect
const allBrands = [...brands, ...brands];

allBrands.forEach(brand => {
  const cardHTML = `
    <div class="brand-card">
      <div class="card">
        <img src="${brand.img}" class="card-img-top" alt="${brand.name}">
      </div>
    </div>
  `;
  container.innerHTML += cardHTML;
});