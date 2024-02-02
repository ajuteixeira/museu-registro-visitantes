export default function CountData(data, key) {
  const results = {};

  data.forEach((value) => {
    const type = value[key];

    const count = results[type] ? results[type] + 1 : 1;

    results[type] = count;
  });

  return results;
}
