/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chart = (($) => {
  const render = () => {
    const ctx = $('#myChart');
    const monthes = ['January', 'February', 'March', 'April', 'May', 'June'];
    let myChart;
    $(window).on('load', () => {
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Bitcoin price',
            data: [5000, 5500, 4500, 6000, 8000, 11000],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        },
      });
    });
    const rateData = {
      Bitcoin: [5000, 5500, 4500, 6000, 8000, 11000],
      Ethereum: [122, 98, 130, 180, 175, 300],
      Ripple: [0.1, 0.3, 0.2, 0.6, 1, 0.9],
      DogeCoin: [600, 400, 323, 850, 404, 110],
      BitcoinCash: [117, 99, 133, 149, 175, 223],
    };
    const $currency = $('aside ul a');
    $currency.on('click', function togle(e) {
      e.preventDefault();
      const coinName = $(this)[0].dataset.name;
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: monthes,
          datasets: [{
            label: `${coinName} price`,
            data: rateData[coinName],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        },
      });
    });
    const $predict = $('.prediction');
    $predict.on('click', () => {
      const activeName = $('aside ul a.active')[0].dataset.name;
      let total = 0;
      $.each(rateData[activeName], (k, v) => {
        total += v;
      });
      const nextMonth = (total + total / 10) * 2 / 8;
      rateData[activeName][6] = nextMonth;
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: `${activeName} price`,
            data: rateData[activeName],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        },
      });
    });
  };
  const init = () => {
    render();
  };
  return {
    init,
  };
})(jQuery);
export default chart;
