let globalData = [];

async function fetchJsonData(path) {
  const response = await fetch(path);
  const data = await response.json();
  return data;
}

fetchJsonData("./resources/data.json").then((data) => {
  globalData = data;
  let me = 2;
  console.log(globalData);
});
