/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const transformGetMinMax = str.split(/[,\s]+/)                           
                            .map(parseFloat)
                            .filter ((item) => !isNaN(item));  
  const mathGetMin = Math.min(...transformGetMinMax);
  const mathGetMax = Math.max(...transformGetMinMax);
  let objMinMax = {
    min: mathGetMin,
    max: mathGetMax,
  };
  return objMinMax;
}
