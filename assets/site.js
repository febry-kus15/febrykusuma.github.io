/* Discourage casual image saving without interfering with map controls. */
document.addEventListener('contextmenu', function (event) {
  if (event.target.closest('img')) event.preventDefault();
});

document.addEventListener('dragstart', function (event) {
  if (event.target.closest('img')) event.preventDefault();
});
