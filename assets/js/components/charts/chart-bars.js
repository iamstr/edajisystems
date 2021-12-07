//
// Bars chart
//

var BarsChart = (function () {
  //
  // Variables
  //

  var $chart = $("#chart-bars");
  var datasets=$('[data-girl]');

  //
  // Methods
  //

  // Init chart
  function initChart($chart) {
    // Create chart
    var ordersChart = new Chart($chart, {
      type: "bar",
      data: {
        labels: ["Jan","Feb","Mar","April","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Total Girls",
            data: [...datasets]
          }
        ]
      }
    });

    // Save to jQuery object
    $chart.data("chart", ordersChart);
  }

  // Init chart
  if ($chart.length) {
    initChart($chart);
  }
})();
