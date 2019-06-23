/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const toggleActive = (($) => {
  const toggle = () => {
    const $currency = $('aside ul a');
    $currency.on('click', function togle(e) {
      e.preventDefault();
      $currency.removeClass('active');
      $(this).addClass('active');
    });
  };
  const init = () => {
    toggle();
  };
  return {
    init,
  };
})(jQuery);
export default toggleActive;
