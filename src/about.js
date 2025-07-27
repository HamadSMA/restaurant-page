export const about = function () {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "This is the about page";
  contentDiv.innerHTML = "";

  contentDiv.append(heading);
};
