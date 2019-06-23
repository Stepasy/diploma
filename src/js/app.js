import getData from './modules/getData';
import chart from './modules/chart';
import toggleActive from './modules/togggle-active';

(($) => {
  $(() => {
    // getData();
    chart.init();
    toggleActive.init();
  });
})(jQuery);
