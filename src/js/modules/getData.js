export default function getData() {
  $.ajax({
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    type: 'GET',
    qs: {
      start: '1',
      limit: '5000',
      convert: 'USD',
    },
    headers: {
      'X-CMC_PRO_API_KEY': '2f2ddd25-2a9f-4c0d-8ea0-e4d00804d9c0',
    },
    error() {
      return true;
    },
    success(data) {
      console.log(data);
    },
  });
}
