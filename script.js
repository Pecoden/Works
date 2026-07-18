const works = [
  { title: 'تنفيذ أعمال الإطفاء برج الرمز الملك سلمان', type: 'إطفاء' },
  { title: 'تنفيذ أعمال الإنذار برج الرمز الملك سلمان', type: 'إنذار' },
  { title: 'تنفيذ أعمال الإطفاء سديم 44 حي الصفا', type: 'إطفاء' },
  { title: 'تنفيذ أعمال الإنذار سديم 44 حي الصفا', type: 'إنذار' },
  { title: 'تنفيذ أعمال الإطفاء مقام 17 النرجس', type: 'إطفاء' },
  { title: 'تنفيذ أعمال الإنذار بمقام 17 النرجس', type: 'إنذار' },
  { title: 'تنفيذ أعمال الإطفاء مكين 60 النرجس', type: 'إطفاء' },
  { title: 'تنفيذ أعمال الإنذار مكين 60 النرجس', type: 'إنذار' },
  { title: 'تنفيذ أعمال الإطفاء مشروع الين النخيل 135', type: 'إطفاء' },
  { title: 'تنفيذ أعمال الإنذار مشروع الين النخيل 135', type: 'إنذار' },
  { title: 'تنفيذ أعمال الإطفاء مستودعات اليابس للتجارة', type: 'إطفاء' },
  { title: 'تنفيذ أعمال الإنذار مستودعات اليابس للتجارة', type: 'إنذار' },
  { title: 'تنفيذ أعمال الإطفاء مكين 92 الصحافة', type: 'إطفاء' },
  { title: 'تنفيذ أعمال الإنذار مكين 92 الصحافة', type: 'إنذار' },
];

const images = [
  'شغل/IMG-20260718-WA0003.jpg',
  'شغل/IMG-20260718-WA0004.jpg',
  'شغل/IMG-20260718-WA0005.jpg',
  'شغل/IMG-20260718-WA0006.jpg',
  'شغل/IMG-20260718-WA0007.jpg',
  'شغل/IMG-20260718-WA0008.jpg',
  'شغل/IMG-20260718-WA0009.jpg',
  'شغل/IMG-20260718-WA0010.jpg',
  'شغل/IMG-20260718-WA0011.jpg',
  'شغل/IMG-20260718-WA0013.jpg',
  'شغل/IMG-20260718-WA0014.jpg',
  'شغل/IMG-20260718-WA0015.jpg',
  'شغل/IMG-20260718-WA0016.jpg',
  'شغل/IMG-20260718-WA0017.jpg',
  'شغل/IMG-20260718-WA0018.jpg',
  'شغل/IMG-20260718-WA0019.jpg',
  'شغل/IMG-20260718-WA0020.jpg',
  'شغل/IMG-20260718-WA0021.jpg',
  'شغل/IMG-20260718-WA0022.jpg',
  'شغل/IMG-20260718-WA0023.jpg',
  'شغل/IMG-20260718-WA0024.jpg',
  'شغل/IMG-20260718-WA0025.jpg',
  'شغل/IMG-20260718-WA0026.jpg',
  'شغل/IMG-20260718-WA0027.jpg',
  'شغل/IMG-20260718-WA0028.jpg',
  'شغل/IMG-20260718-WA0029.jpg',
  'شغل/IMG-20260718-WA0030.jpg',
  'شغل/IMG-20260718-WA0031.jpg',
  'شغل/IMG-20260718-WA0032.jpg',
  'شغل/IMG-20260718-WA0033.jpg',
  'شغل/IMG-20260718-WA0034.jpg',
  'شغل/IMG-20260718-WA0035.jpg',
  'شغل/IMG-20260718-WA0036.jpg',
  'شغل/IMG-20260718-WA0037.jpg',
  'شغل/IMG-20260718-WA0038.jpg',
  'شغل/IMG-20260718-WA0039.jpg',
  'شغل/IMG-20260718-WA0040.jpg',
  'شغل/IMG-20260718-WA0041.jpg',
  'شغل/IMG-20260718-WA0042.jpg',
  'شغل/IMG-20260718-WA0043.jpg',
  'شغل/IMG-20260718-WA0044.jpg',
  'شغل/IMG-20260718-WA0045.jpg',
  'شغل/IMG-20260718-WA0046.jpg',
  'شغل/IMG-20260718-WA0047.jpg',
  'شغل/IMG-20260718-WA0048.jpg',
  'شغل/IMG-20260718-WA0049.jpg',
  'شغل/IMG-20260718-WA0050.jpg',
  'شغل/IMG-20260718-WA0051.jpg',
  'شغل/IMG-20260718-WA0052.jpg',
  'شغل/IMG-20260718-WA0053.jpg',
  'شغل/IMG-20260718-WA0054.jpg',
  'شغل/IMG-20260718-WA0055.jpg',
  'شغل/IMG-20260718-WA0056.jpg',
  'شغل/IMG-20260718-WA0057.jpg',
  'شغل/IMG-20260718-WA0058.jpg',
  'شغل/IMG-20260718-WA0059.jpg',
  'شغل/IMG-20260718-WA0060.jpg',
  'شغل/IMG-20260718-WA0061.jpg',
  'شغل/IMG-20260718-WA0062.jpg',
  'شغل/IMG-20260718-WA0063.jpg',
  'شغل/IMG-20260718-WA0064.jpg',
  'شغل/IMG-20260718-WA0065.jpg',
  'شغل/IMG-20260718-WA0066.jpg',
  'شغل/IMG-20260718-WA0067.jpg',
  'شغل/IMG-20260718-WA0068.jpg',
  'شغل/IMG-20260718-WA0069.jpg',
  'شغل/IMG-20260718-WA0070.jpg',
  'شغل/IMG-20260718-WA0071.jpg',
  'شغل/IMG-20260718-WA0072.jpg',
  'شغل/IMG-20260718-WA0073.jpg',
  'شغل/IMG-20260718-WA0074.jpg',
  'شغل/IMG-20260718-WA0075.jpg',
  'شغل/IMG-20260718-WA0076.jpg',
  'شغل/IMG-20260718-WA0077.jpg',
  'شغل/IMG-20260718-WA0078.jpg',
  'شغل/IMG-20260718-WA0079.jpg',
  'شغل/IMG-20260718-WA0080.jpg',
  'شغل/IMG-20260718-WA0081.jpg',
  'شغل/IMG-20260718-WA0082.jpg',
  'شغل/IMG-20260718-WA0083.jpg',
  'شغل/IMG-20260718-WA0084.jpg',
  'شغل/IMG-20260718-WA0085.jpg',
];

const allocations = new Array(works.length).fill(6);
allocations[12] = 5;
allocations[13] = 5;

const grid = document.querySelector('#projects-grid');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeLightbox = document.querySelector('#close-lightbox');

let imageCursor = 0;

for (let i = 0; i < works.length; i += 1) {
  const card = document.createElement('article');
  card.className = 'project-card';

  const header = document.createElement('div');
  header.className = 'project-card__header';

  const title = document.createElement('h3');
  title.textContent = works[i].title;

  const type = document.createElement('span');
  type.className = 'project-card__type';
  type.textContent = works[i].type;

  header.appendChild(title);
  header.appendChild(type);

  const gallery = document.createElement('div');
  gallery.className = 'gallery';

  const sliceCount = allocations[i];
  for (let j = 0; j < sliceCount; j += 1) {
    const img = document.createElement('img');
    const src = images[imageCursor];
    img.src = src;
    img.alt = `${works[i].title} - صورة ${j + 1}`;
    img.addEventListener('click', () => {
      lightboxImage.src = src;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });
    gallery.appendChild(img);
    imageCursor += 1;
  }

  card.appendChild(header);
  card.appendChild(gallery);
  grid.appendChild(card);
}

closeLightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});
