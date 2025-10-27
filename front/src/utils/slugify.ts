function slugify(str: string) {
  return str
    .normalize('NFD') // décompose les lettres accentuées en lettre + accent
    .replace(/[\u0300-\u036f]/g, '') // supprime les accents
    .replace(/\s+/g, '-') // remplace les espaces par des tirets
    .toLowerCase(); // met tout en minuscules
}

export default slugify;
