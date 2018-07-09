
  let openModalBtn = document.getElementById('open-modal');

  openModalBtn.addEventListener('click', function(){
  let modalScreen = document.getElementById('modal-screen');
  modalScreen.style.display = 'block';
  });

  let closeModalBtn = document.getElementById('close-modal');
  closeModalBtn.addEventListener('click', function(){
      let modalScreen = document.getElementById('modal-screen');
      modalScreen.style.display = 'none';
  });
