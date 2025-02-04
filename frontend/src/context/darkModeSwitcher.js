export default function darkModeSwitcher(colorMode) {
  const classToDelete = colorMode === "light" ? "dark" : "light";
  localStorage.setItem("colorMode", colorMode);

  const body = document.getElementsByTagName("body")[0];

  const containers = body.getElementsByClassName("container");

  body.className = "";
  body.classList.add(colorMode);

  for (const container of containers) {
    container.classList.remove(classToDelete);
    container.classList.add(colorMode);
  }
}
