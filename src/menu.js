export const menu = function () {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "This is the menu page";
  contentDiv.innerHTML = "";

  contentDiv.append(heading);
};
