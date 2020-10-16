document.body.addEventListener("keydown", () => {
  pressed(event);
});
let count = 0;
function pressed(event) {
  count++;
}
function start() {
  let loop = setInterval(() => {
    let click = count;
    let loop2 = setTimeout(() => {
      if (count - click >= 5) {
        console.log("Sticky-Key Activated");
      }
    }, 5000);
  }, 1000);
}
