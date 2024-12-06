// JavaScript to manage active state in the bottom menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all menu items
    menuItems.forEach(el => el.classList.remove('active'));
    // Add active class to the clicked item
    item.classList.add('active');
  });
});
