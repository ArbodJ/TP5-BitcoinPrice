const url = "https://blockchain.info/ticker";

const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const p = document.getElementById("devise");
const nbr = document.getElementById("number");
let interval;

let requete = new XMLHttpRequest();
requete.open("get", url);
requete.responseType = "json";
requete.send();

requete.onload = function () {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let resp = requete.response;
      console.log(resp);
      btnStart.addEventListener("click", () => {
        interval = setInterval(() => {
          nbr.textContent = resp.EUR.last;
        }, 1000);
      });
    }
  }
};
btnStop.addEventListener("click", () => {
  nbr.textContent = " € Stopped";
  clearInterval(interval);
});
