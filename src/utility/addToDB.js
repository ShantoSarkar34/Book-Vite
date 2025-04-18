const getStoreBook = () => {
  const storeBookSTR = localStorage.getItem("readList");
  if (storeBookSTR) {
    const storedBookData = JSON.parse(storeBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoreBook();

  if (storedBookData.includes(id)) {
    alert("This book already exist");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStoredDB, getStoreBook };
