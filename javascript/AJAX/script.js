let request = new XMLHttpRequest(); // console.log(request);

request.open("GET", "https://restCountries.com/v2/name/india");

request.send(); //async non blocking code behaviour

request.addEventListener("load", function () {
  // console.log(this.response);
  const [, data] = JSON.parse(this.response);
  console.log(data);
});

// https://github.com/public-apis/public-apis?tab=readme-ov-file#sports--fitness
