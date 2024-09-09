const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',  
                'rgba(54, 162, 235, 0.8)',  
                'rgba(255, 206, 86, 0.8)',  
                'rgba(75, 192, 192, 0.8)',  
                'rgba(153, 102, 255, 0.8)', 
                'rgba(255, 159, 64, 0.8)'   
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',  
                'rgba(54, 162, 235, 1)',  
                'rgba(255, 206, 86, 1)',  
                'rgba(75, 192, 192, 1)',  
                'rgba(153, 102, 255, 1)', 
                'rgba(255, 159, 64, 1)'   
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'rgba(255, 99, 132, 1)'
                }
            },
            x: {
                ticks: {
                    color: 'rgba(54, 162, 235, 1)'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(75, 192, 192, 1)'
                }
            }
        }
    }
});

// Add click event listeners to each grid item
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        const labels = item.getAttribute('data-labels').split(',');
        const values = item.getAttribute('data-values').split(',').map(Number);

        // Update chart data
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = values;
        myChart.update();
    });
});
