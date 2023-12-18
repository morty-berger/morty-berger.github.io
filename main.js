

/// this will uncheck the menu togel input check box when you resize the window 

function uncheckCheckbox() {
    const checkbox = document.getElementById('menu-togel');
    checkbox.checked = false; // Uncheck the checkbox
  }
  
  window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      uncheckCheckbox();
    }
  });











///  const container = document.getElementById('product-list--scroll');
///  const scrollButton = document.getElementById('scrollButton');
///  
///    function checkOverflow() {
///        if (container.scrollWidth > container.clientWidth) {
///            container.style.justifyContent = 'flex-start';
///            scrollButton.style.display = 'block';
///        } else {
///            container.style.justifyContent = 'center';
///            scrollButton.style.display = 'none';
///        }
///    }
///    
///    window.addEventListener('resize', checkOverflow);
///    container.addEventListener('scroll', checkOverflow);
///    
///    // Initial check on page load
///    checkOverflow();
///  
 
const containers = document.querySelectorAll(" .product-list--scroll--id");
const scrollButtons = document.querySelectorAll(" .scrollButton--id");
  
function checkOverflow() {
    containers.forEach((container, index) => {
        const scrollButton = scrollButtons[index];

        if (container.scrollWidth > container.clientWidth) {
            container.style.justifyContent = 'flex-start';
            scrollButton.style.display = 'block';
        } else {
            container.style.justifyContent = 'center';
            scrollButton.style.display = 'none';
        }
    });
}
  
window.addEventListener('resize', checkOverflow);
containers.forEach(container => {
    container.addEventListener('scroll', checkOverflow);
});
  
// Initial check on page load
checkOverflow();

  

////const scrollButton = document.getElementById('scrollButton');
////
////function checkOverflow() {
////    if (container.scrollWidth > container.clientWidth) {
////      scrollButton.style.display = 'block'; // Show myDiv if overflow exists
////    } else {
////      scrollButton.style.display = 'none'; // Hide myDiv if no overflow
////    }
////}
////
////window.addEventListener('resize', checkOverflow);
////container.addEventListener('scroll', checkOverflow);
////
////// Initial check on page load
////checkOverflow();
