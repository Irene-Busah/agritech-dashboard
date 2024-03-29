const ctx = document.getElementById('foodExpirationChart').getContext('2d');
const foodExpirationChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Protein', 'Vegetable', 'Diary', 'Fruit'],
        datasets: [{
            data: [64, 38, 20, 12],
            backgroundColor: ['#03974A', '#FFB800', '#CAF9E0', '#B8E716'],
            borderColor: ['#fff'],
            borderWidth: 1,
            hoverOffset: 8,
            borderRadius: 8,
        }]
    },
    options: {
        cutout: '70%',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        },
        elements: {
            arc: {
                hoverOffset: 120
            }
        }
    },
    plugins: [{
        afterDraw: function (chart) {
            let ctx = chart.ctx;
            let width = chart.width;
            let height = chart.height;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = 'bold 1.2em Urbanist';
            ctx.fillStyle = '#000'; // Ensure the number is black
            ctx.fillText('25,4832', width / 2, height / 2 - 10);
            ctx.font = '0.8em Urbanist';
            ctx.fillStyle = '#9C9A9A';
            ctx.fillText('Products', width / 2, height / 2 + 20);
            ctx.save();
        }
    }]

});


const legendContainer = document.getElementById('legend-container');
const legendItems = foodExpirationChart.data.labels.map((label, index) => {
    const color = foodExpirationChart.data.datasets[0].backgroundColor[index];
    return `
    <div class="legend-item">
      <span class="legend-color" style="background-color: ${color};"></span>
      <span class="legend-label">${label}</span>
    </div>
  `;
}).join('');
legendContainer.innerHTML = legendItems;
