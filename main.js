function calc() {
  let celVal = Number(document.getElementById("input").value);
  let farVal = celVal * 1.8 + 32;
  console.log(farVal);
  let tot = document.getElementById("result");
  tot.innerHTML = farVal.toFixed(2);
}
