export const decodeHtmlEntities = (encodedString: any) => {
  const translateRe = /&(nbsp|amp|quot|lt|gt);/g;
  const translate: any = {
    nbsp: ' ',
    amp: '&',
    quot: '"',
    lt: '<',
    gt: '>',
  };
  return encodedString
    .replace(translateRe, (_match: any, entity: any) => translate[entity])
    .replace(/&#(\d+);/gi, (_match: any, numStr: any) => {
      const num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
};
