const STORAGE_KEY = "tallyCounterCount";
const MODE_KEY = "darkMode";
let count = 0;

function render() {
  document.getElementById("counter").innerText = count;
}

function save() {
  localStorage.setItem(STORAGE_KEY, count);
}

(function init() {
  const saved = localStorage.getItem(STORAGE_KEY);
  count = saved ? parseInt(saved) : 0;
  render();

  if (localStorage.getItem(MODE_KEY) === "on") {
    document.body.classList.add("dark");
  }
})();

function increment() {
  count++;
  render();
  save();
}

function reset() {
  count = 0;
  render();
  save();
}

function toggleMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    MODE_KEY,
    document.body.classList.contains("dark") ? "on" : "off"
  );
}
