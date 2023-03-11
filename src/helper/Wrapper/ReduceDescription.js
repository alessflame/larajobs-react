export const reduceDescription = (text, maxChars) => {
  let newDescription="";
    //  console.log(text.length>maxChars);
  if (text.length > maxChars) {
    for (let i = 0;  i < maxChars; i++) {
      newDescription += text[i];
    }

    return newDescription + "...";
  }

  return text;
};
