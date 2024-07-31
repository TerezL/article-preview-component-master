const shareButton = document.getElementById("share");
const links = document.getElementById("sharebox");

function shareSocialLinks() {
  links.classList.toggle("active");
}

shareButton.addEventListener("click", shareSocialLinks);