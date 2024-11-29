const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }
  return objCopy;
}

const copy = deepClone(original);

// Изменяем вложенное свойство в копии
copy.address.city = "Los Angeles";

console.log(original.address.city); // 'New York' (оригинал не изменился)
console.log(copy.address.city); // 'Los Angeles' (копия изменена)
