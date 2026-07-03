// Brand gallery items, ordered to match the staggered layout reference.
// `position` maps each item to its cell(s) in the 8-column x 3-row grid
// (see BrandGallery.css -> .brand-gallery-item--{n}).
// The two large 2x2 cells (positions 1 & 4) are videos; the rest are stills
// pulled from the loader gallery in /public/loader.
export const brandGalleryItems = [
  {
    id: "brand-1",
    label: "Loose Hits",
    type: "video",
    src: "/videos/Cocktail.mp4",
    position: 1,
  },
  {
    id: "brand-2",
    label: "CF Mag",
    type: "image",
    src: "/loader/loader-7.jpg",
    position: 2,
  },
  {
    id: "brand-3",
    label: "MODC",
    type: "image",
    src: "/loader/loader-21.jpg",
    position: 3,
  },
  {
    id: "brand-4",
    label: "MODC",
    type: "video",
    src: "/videos/Matilda.mp4",
    position: 4,
  },
  {
    id: "brand-5",
    label: "Osmon Studios",
    type: "image",
    src: "/loader/loader-34.jpg",
    position: 5,
  },
  {
    id: "brand-6",
    label: "IO Magazine",
    type: "image",
    src: "/loader/loader-52.jpg",
    position: 6,
  },
];
