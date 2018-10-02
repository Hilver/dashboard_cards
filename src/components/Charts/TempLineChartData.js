import store from '../../store/index.js'

export const tempLineChartData = {
    type: 'line',
    data: {
      labels: store.getters.tempData.map(item => { return item[0]}),
      datasets: [
        {
          label: '℃',
          data: store.getters.tempData.map(item => { return item[1]}),
          lineTension: 0,
          backgroundColor: [
            'transparent'
          ],
          borderColor: [
            '#47b784'
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: false,
          ticks: {
              min: store.getters.tempDataFilter.min,
              max: store.getters.tempDataFilter.max
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#000000',
            fontStyle: 'bold',
            fontSize: 16
          }
        }]
      },
      tooltips: {       
        enabled: true,
        backgroundColor: '#fff',
        borderColor: '#000',
        bodyFontColor: '#000',
        displayColors: false,
        borderWidth: 1,
        yAlign: 'bottom',
        callbacks: {
          label: function (tooltipItems, data) {
            return tooltipItems.yLabel + ' ℃'
          },
          title: function (tooltipItems, data) {
            return false
          }
        }
      }
    }
  }
  
  export default tempLineChartData