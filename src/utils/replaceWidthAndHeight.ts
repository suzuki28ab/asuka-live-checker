const replaceWidthAndHeight = (url: string, width: number, height: number) => {
  return url
    .replace("%7Bwidth%7D", width.toString())
    .replace("%7Bheight%7D", height.toString());
};
