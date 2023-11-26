function filterSelection(category) {
    var cards = document.querySelectorAll('#clickable-card');
  
    cards.forEach(function(card) {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  function openModal() {
    // Implemente a lógica para abrir o modal conforme necessário
    alert('Modal aberto!');
  }
  