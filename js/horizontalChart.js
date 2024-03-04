// Initialize Frequently Consumed by Region Chart
var consumptionCtx = document.getElementById('consumptionRegionChart').getContext('2d');
var consumptionRegionChart = new Chart(consumptionCtx, {
    type: 'bar',
    data: {
        labels: ['Kicukiro', 'Remera', 'Kimironko', 'Gisozi', 'Kacyiru', 'Masaka', 'Gatsata'],
        datasets: [{
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: '#B8E716',
            borderRadius: 5,
            borderWidth: 1,
            barThickness: 30,
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                grid: {
                    display: false
                },
                beginAtZero: true
            },
            y: {
                grid: {
                    display: false
                },
                barPercentage: 0.8,
                categoryPercentage: 10.0
            }
        },
        plugins: {
            legend: {
                display: false // This will hide the legend
            }
        }
    }
});
