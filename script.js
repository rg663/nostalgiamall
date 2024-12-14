// Adding some interactivity to the "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.item button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Item added to cart!');
      });
    });
  });
  