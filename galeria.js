function openModal(image) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    
    modalImage.src = image.src;
    modal.style.display = 'block';
  }
  
  function closeModal() {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
  
    modalImage.src = '';
    modal.style.display = 'none';
  }