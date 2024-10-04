const secondColumnData = [];

const addresses = [
  '123 Main St, Springfield, IL', '456 Elm St, Shelbyville, IL', '789 Oak St, Capital City, IL',
  '101 Maple St, Ogdenville, IL', '202 Pine St, North Haverbrook, IL', '303 Cedar St, Brockway, IL',
  '404 Birch St, Springfield, IL', '505 Walnut St, Shelbyville, IL', '606 Chestnut St, Capital City, IL',
  '707 Ash St, Ogdenville, IL', '808 Poplar St, North Haverbrook, IL', '909 Fir St, Brockway, IL'
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 100; i++) {
  const age = getRandomInt(21, 85);
  const address = addresses[i % addresses.length];
  secondColumnData.push({ id: i + 1, age, address });
}

export default secondColumnData;