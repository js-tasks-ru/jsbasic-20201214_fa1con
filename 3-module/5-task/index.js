/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const TRANSFORM_RE = /[,\s]+/;
  const transformGetMinMax = str.split(TRANSFORM_RE)
    .map(parseFloat)
    .filter((item) => !isNaN(item));
  return objMinMax = {
    min: Math.min(...transformGetMinMax),
    max: Math.max(...transformGetMinMax),
  };
}
