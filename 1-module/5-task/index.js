/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let truncateString;

  if (str.length > maxlength) {
    truncateString = str.slice(0, maxlength - 1) + '…';
  } else {
    truncateString = str;
  }

  return truncateString;
}
