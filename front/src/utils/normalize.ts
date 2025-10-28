function normalize(str: string, toLower = true) {
  const s = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return toLower ? s.toLowerCase() : s;
}

export default normalize;
