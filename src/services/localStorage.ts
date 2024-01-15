export const getFromStorage = <T>(key: string): T  => {
  const objectString = localStorage.getItem(key);
  if (objectString === null)
      throw Error('No such object');
  return JSON.parse(objectString);
};

export const setToStorage = (key: string, object: object) => {
    const objectString = JSON.stringify(object);
    localStorage.setItem(key, objectString);
};
