(function () {
  var slot = document.querySelector(".slot.box");
  if (slot) {
    window.atOptions = {
      key: "38957de87879d059f0842f894acda88b",
      format: "iframe",
      height: 250,
      width: 300,
      params: {}
    };
    var s = document.createElement("script");
    s.src = "https://bicea.org/22/38957de87879d059f0842f894acda88b";
    slot.appendChild(s);
  }

  // Auto refresh after 300 seconds
  setTimeout(function () {
    location.reload();
  }, 300 * 1000);
})();
