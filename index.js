/**
 * Write a function to remove the hyphens '-' from all the properties (even nested) of the object
 */

const removeHyphens = (obj) => {
  for (const value of Object.keys(obj)) {
    if (typeof obj[value] === "string") {
      const stringChanged = obj[value].replaceAll("-", "");
      obj[value] = stringChanged;
    } else {
      removeHyphens(obj[value]);
    }
  }
};

// This object is just an example. The function should accept any kind of input.
const obj = {
  orderData: {
    name: "the-id",
    items: [{ address: "primrose-street-london" }],
  },
  additional: "additional-prop",
};

// Display result
removeHyphens(obj);
console.log(JSON.stringify(obj, null, 2));
