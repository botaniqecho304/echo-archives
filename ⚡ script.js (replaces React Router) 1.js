const pages = {
  home: "home",
  grimoire: "grimoire",
  crown: "crown"
};

function goTo(page) {
  document.querySelectorAll(".portal, .page").forEach(el => {
    el.classList.add("hidden");
  });

  const targetId = pages[page];
  if (targetId) {
    document.getElementById(targetId)?.classList.remove("hidden");
  }
}
