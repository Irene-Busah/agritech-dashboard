var salesCtx = document.getElementById('salesTrendsChart').getContext('2d');
var salesTrendsChart = new Chart(salesCtx, {
    type: 'bar',
    data: {
        labels: ['Protein', 'Vegetable', 'Diary', 'Grains', 'Meat', 'Seafood'],
        datasets: [{

            data: [22, 18, 14, 12, 8, 10],
            backgroundColor: '#00AF54',
            borderWidth: 1,
            barThickness: 50,
            borderRadius: 8,
            barPercentage: 0.9,
            categoryPercentage: 1,
        }]
    },
    options: {

        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },


    }

});



document.addEventListener('DOMContentLoaded', () => {
    const exportButton = document.querySelector('.export-button');
    const exportDropdown = document.querySelector('.export-dropdown');
    const overlay = document.querySelector('.overlay');

    exportButton.addEventListener('click', (event) => {
        event.stopPropagation();
        exportDropdown.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    exportDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    overlay.addEventListener('click', () => {
        exportDropdown.classList.remove('show');
        overlay.classList.remove('show');
    });
});



