export const createDictionary = data => {
  let dictionary = [];

  data.forEach(element => {
    dictionary.push({
      label: element.name,
      value: element.id
    });
  });

  return dictionary;
};
