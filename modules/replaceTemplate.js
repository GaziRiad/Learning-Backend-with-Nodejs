module.exports = function renderTemplate(tempCard, el) {
  let output = tempCard.replaceAll("{%PRODUCTNAME%}", el.productName);
  output = output.replaceAll("{%IMAGE%}", el.image);
  output = output.replaceAll("{%FROM%}", el.from);
  output = output.replaceAll("{%NUTRIENTS%}", el.nutrients);
  output = output.replaceAll("{%QUANTITY%}", el.quantity);
  output = output.replaceAll("{%PRICE%}", el.price);
  output = output.replaceAll("{%DESCRIPTION%}", el.description);
  output = output.replaceAll("{%ID%}", el.id);

  if (!el.organic) output = output.replaceAll("{%NOT_ORGANIC%}", "not-organic");
  return output;
};
