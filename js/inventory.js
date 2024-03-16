const inventoryVsConsumptionCtx = document.getElementById('inventoryVsConsumptionChart').getContext('2d');
const inventoryVsConsumptionChart = new Chart(inventoryVsConsumptionCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Inventory Rates',
            data: [0.9, 1.2, 1.3, 0.8, 1.5, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7],
            backgroundColor: '#00AF54',
            borderRadius: 8,
            borderWidth: 1,
            barThickness: 30,
        }, {
            label: 'Purchase Rates',
            data: [1.1, 1.4, 1.2, 1.3, 1.7, 1.2, 1.5, 1.3, 1.6, 1.7, 1.8, 1.9],
            backgroundColor: '#B8E716',
            borderRadius: 8,
            borderWidth: 1,
            barThickness: 30,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        hover: {
            mode: 'index',
            intersect: false,
            onHover: (event, chartElement) => {
                event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#000'
            }
        },
    },
    plugins: [{
        beforeDraw: function (chart) {
            if (chart.tooltip._active && chart.tooltip._active.length) {
                const activePoint = chart.tooltip._active[0];
                const ctx = chart.ctx;
                const datasetIndex = activePoint.datasetIndex;
                const index = activePoint.index;

                // Get the y position of the top edge of the two bars
                const yTop1 = chart.getDatasetMeta(0).data[index].y;
                const yTop2 = chart.getDatasetMeta(1).data[index].y;
                const topY = Math.min(yTop1, yTop2);

                const x = activePoint.element.x;
                const barWidth = activePoint.element.width;
                const bottomY = chart.scales['y'].bottom;

                // The space above the highest bar that you want to keep
                const spaceAboveBar = -10;

                // Draw a background rectangle with border radius
                ctx.save();
                ctx.fillStyle = '#CAF9E0';
                const borderRadius = 5;
                const rectHeight = bottomY - topY - spaceAboveBar;
                const rectY = topY + spaceAboveBar;

                // Start drawing the path with rounded corners
                ctx.beginPath();
                ctx.moveTo(x - barWidth + borderRadius, rectY);
                ctx.lineTo(x + barWidth * 2 - borderRadius, rectY);
                ctx.quadraticCurveTo(x + barWidth * 2, rectY, x + barWidth * 2, rectY + borderRadius);
                ctx.lineTo(x + barWidth * 2, bottomY - borderRadius);
                ctx.quadraticCurveTo(x + barWidth * 2, bottomY, x + barWidth * 2 - borderRadius, bottomY);
                ctx.lineTo(x - barWidth + borderRadius, bottomY);
                ctx.quadraticCurveTo(x - barWidth, bottomY, x - barWidth, bottomY - borderRadius);
                ctx.lineTo(x - barWidth, rectY + borderRadius);
                ctx.quadraticCurveTo(x - barWidth, rectY, x - barWidth + borderRadius, rectY);
                ctx.closePath();
                ctx.fill();

                ctx.restore();
            }
        }
    }]

});



function generateCustomLegend(chart) {
    const legendContainer = document.getElementById('turnover-legend-container');
    legendContainer.innerHTML = chart.data.datasets.map((dataset, index) => {
        return `
            <div class="legend-item">
                <span class="legend-color" style="background-color: ${dataset.backgroundColor};"></span>
                <span class="legend-label">${chart.data.datasets[index].label}</span>
            </div>
        `;
    }).join('');
}

generateCustomLegend(inventoryVsConsumptionChart);