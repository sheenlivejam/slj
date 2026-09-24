// Shared photo-folder loader so both the Photos page and any photo
// highlights elsewhere (e.g. the Home page) reference the same images
// without re-importing them.
//
// Sorts numerically since filenames like "Sheen Live Jam - 2 of 33.jpeg"
// would sort wrong alphabetically ("- 10 of 33" before "- 2 of 33").
const loadPhotoFolder = (context) => {
  return context.keys()
    .map((key) => {
      const match = key.match(/(\d+)/);
      return { key, num: match ? parseInt(match[1], 10) : 0 };
    })
    .sort((a, b) => a.num - b.num)
    .map(({ key, num }) => ({ src: context(key), name: key.replace('./', ''), num }));
};

export const sep2026Photos = loadPhotoFolder(
  require.context('./photos/SheenLiveJam_Sep2026', false, /\.(jpe?g|png)$/i)
);
