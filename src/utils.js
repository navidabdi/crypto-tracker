export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export const changeNumColor = (number) => {
  return number > 0 ? 'green' : 'red';
};
