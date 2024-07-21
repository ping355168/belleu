$(document).ready(function() {
  const openModalButtons = $('[data-modal-target]');
  const closeModalButtons = $('[data-close-button]');
  const overlay = $('#overlay');
  const modal = $('#modal');
  const modalImage = $('#modal .modal-body img');

  openModalButtons.each(function() {
    $(this).on('click', function() {
      const modalTarget = $(this).data('modal-target');
      openModal(modalTarget, $(this));
    });
  });

  closeModalButtons.each(function() {
    $(this).on('click', function() {
      closeModal(modal);
    });
  });

  function openModal(modalTarget, element) {
    const postClass = element.attr('class');
    const imgSrc = `./img/${postClass}.jpg`;
    modalImage.attr('src', imgSrc);
    $(modalTarget).addClass('active');
    overlay.addClass('active');
  }

  function closeModal(modal) {
    modal.removeClass('active');
    overlay.removeClass('active');
  }

  overlay.on('click', function() {
    closeModal(modal);
  });

  $('.waterfall #modal').on('click', function() {
    const modalTarget = $(this).data('modal-target');
    openModal(modalTarget, $(this));
  });
});




