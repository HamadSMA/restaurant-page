import pepperImage from "./imgs/hot-pepper.jpg";

export const heroSection = function () {
  const contentDiv = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent =
    "Welcome to Hot Pepper - Where Every Bite Brings the Heat!";
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Spice lovers rejoice: we serve bold, fiery flavors inspired by global street food, crafted fresh with a kick. Whether you're craving smoky grilled meats, zesty sauces, or sizzling vegetarian delights, Hot Pepper turns up the taste and leaves you craving more.";

  const img = document.createElement("img");
  img.setAttribute("src", pepperImage);

  contentDiv.append(heading, paragraph, img);
};
