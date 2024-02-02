export default function FormatData(data) {
  return Object.keys(data).map((key) => {
    const tempObject = {};

    tempObject["name"] = key;
    tempObject["value"] = data[key];

    return tempObject;
  });
}
