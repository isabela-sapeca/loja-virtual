document.addEventListener('DOMContentLoaded', () => {


    //Dropdown
    const dropFilter = document.querySelector("#drop-filtro");

    dropFilter.onclick = function(){
      dropFilter.classList.toggle('is-active');
    } 

    //Janela Modal
    const btnModal  = document.querySelector('#btnModal');
    const modalProd = document.querySelector('#modal-prod');
    const btnModalClose = document.querySelector('#btnModalClose');
    const backModalClose = document.querySelector('#backModalClose');

    function abrirModal(modalProd){
      
        modalProd.classList.add('is-active');
    }

    function fecharModal(modalProd){
       modalProd.classList.remove('is-active');
    }

    btnModal.onclick = function(){
      abrirModal(modalProd);
    }

    btnModalClose.onclick = function(){
      fecharModal(modalProd);
    }
    backModalClose.onclick = function(){
      fecharModal(modalProd);
    }


    //"navbar-burger" 
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
       
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });