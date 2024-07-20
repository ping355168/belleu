const openModalButtons = $('[data-modal-target]');
const closeModalButtons = $('[data-close-button]');
const overlay = $('#overlay');

openModalButtons.each(function() {
  $(this).on('click', function() {
    const modal = $($(this).data('modal-target'));
    openModal(modal);
  });
});

overlay.on('click', function() {
  const modals = $('.modal.active');
  modals.each(function() {
    closeModal($(this));
  });
});

closeModalButtons.each(function() {
  $(this).on('click', function() {
    const modal = $(this).closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal.length === 0) return;
  modal.addClass('active');
  overlay.addClass('active');
}

function closeModal(modal) {
  if (modal.length === 0) return;
  modal.removeClass('active');
  overlay.removeClass('active');
}
