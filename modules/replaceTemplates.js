module.exports = (temp, data) => {
  let output;
  output = temp.replace(/{%PRODUCTNAME%}/g, data.productName);
  output = output.replace(/{%PRICE%}/g, data.price);
  output = output.replace(/{%QUANTITY%}/g, data.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, data.description);
  output = output.replace(/{%IMAGE%}/g, data.image);
  output = output.replace(/{%ID%}/g, data.id);

  return output;
};
