function ucFirst(str) {
  if (str==''){
    return '';
  } else   
  {let strWithCapitalLetter = str[0].toUpperCase() + str.slice(1);
  return strWithCapitalLetter;}
}
