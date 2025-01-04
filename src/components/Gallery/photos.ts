import type { Photo } from "react-photo-album";

const images = import.meta.glob('/src/assets/previous-guests/*.jpg', { eager: true });

const breakpoints = [1080, 640, 384];

const unsplashLink = (id: string) => {
  const path = `/src/assets/previous-guests/${id}`;
  return images[path] ? (images[path] as { default: string }).default : '';
}

const unsplashPhotos  = [
  { id: 'bun3.jpg', width: 1080, height: 720, title: 'bun3' },
  { id: 'honey-smacks.jpg', width: 1080, height: 920, title: 'Honey Smacks' },
  { id: 'pops.jpg', width: 1080, height: 800, title: 'Pops' },
  { id: 'amoora.jpg', width: 1080, height: 600, title: 'Amoora' },
  { id: 'bubsy.jpg', width: 1080, height: 920, title: 'Bubsy' },

  { id: 'fifi.jpg', width: 1080, height: 920, title: 'Fifi' },
  { id: 'amoora2.jpg', width: 1080, height: 720, title: 'Amoora' },
  { id: 'puff.jpg', width: 1080, height: 720, title: 'Puff' },
  { id: 'mist.jpg', width: 1080, height: 920, title: 'Mist' },
  { id: 'chocolate.jpg', width: 1080, height: 1020, title: 'Chocolate' },
  { id: 'storm.jpg', width: 1080, height: 820, title: 'Storm' },
  { id: 'luna-and-morocco.jpg', width: 1080, height: 720, title: 'Luna & Morocco' },

  { id: 'rikki.jpg', width: 1080, height: 720, title: 'Rikki' },
  { id: 'bunny.jpg', width: 1080, height: 720, title: 'Bunny' },
  { id: 'elodie-and-butters.jpg', width: 780, height: 720, title: 'Elodie & Butters' },
  { id: 'bun1.jpg', width: 1080, height: 720, title: 'bun1' },
  { id: 'silas.jpg', width: 1080, height: 720, title: 'Silas' },
  { id: 'peach.jpg', width: 1080, height: 720, title: 'Peach' },
  { id: 'smores.jpg', width: 1080, height: 720, title: 'Smores' },
  { id: 'bunx3.jpg', width: 1080, height: 720, title: 'Bun*3' },

  { id: 'bun2.jpg', width: 1080, height: 720, title: 'bun2' },
  { id: 'bun4.jpg', width: 1080, height: 720, title: 'bun4' },
  { id: 'bun5.jpg', width: 1080, height: 720, title: 'bun5' },
  { id: 'Bunzo.jpg', width: 1080, height: 720, title: 'bunzo' },
  { id: 'clover.jpg', width: 1080, height: 720, title: 'clover' },
  { id: 'maple.jpg', width: 1080, height: 720, title: 'maple' },
  { id: 'seventeen.jpg', width: 1080, height: 720, title: 'seventeen' },
  { id: 'Sneaker.jpg', width: 1080, height: 720, title: 'sneaker' },
  { id: 'sneaker2.jpg', width: 1080, height: 720, title: 'sneaker2' }
];

const photos: Photo[] = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id),
  width: photo.width,
  height: photo.height,
  title: photo.title,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;