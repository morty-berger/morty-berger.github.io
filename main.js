

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
  