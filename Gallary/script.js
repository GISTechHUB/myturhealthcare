document.querySelectorAll('.gallery-item img').forEach(item => {
   item.addEventListener('click', event => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      const img = document.createElement('img');
      img.src = item.src;
      modal.appendChild(img);
      
      // Close the modal when clicked
      modal.addEventListener('click', () => {
         document.body.removeChild(modal);
      });
      
      document.body.appendChild(modal
