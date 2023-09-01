// Add a click event listener to the card class
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    // Get the title and description elements within the clicked card
    const title = card.querySelector('h1');
    const description = card.querySelector('p');

    // Toggle the active class to trigger animation
    card.classList.toggle('active');

    // If the card is active, hide title and show description
    if (card.classList.contains('active')) {
      title.style.display = 'none';
      description.style.display = 'block';
      setTimeout(() => {
        description.style.opacity = '1';
      }, 10);
    } else { // If the card is not active, show title and hide description
      description.style.opacity = '0';
      setTimeout(() => {
        description.style.display = 'none';
        title.style.display = 'block';
      }, 300);
    }
  });
});
