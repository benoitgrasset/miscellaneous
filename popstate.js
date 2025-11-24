// When the user clicks the back button, navigate with RSC.
window.addEventListener("popstate", (e) => {
  navigate(location.pathname);
}
