var graphicPopulation = document.getElementById('graph-Population').getContext('2d');
var population = new Chart(graphicPopulation, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Ocupado', 'Vazio'],
        datasets: [{
            backgroundColor: ['#e74c3c', '#2ecc71'],
            borderColor: ['#e74c3c', '#2ecc71'],
            data: [30, 70]
        }]
    },

    // Configuration options go here
    options: {}
});

const labels = ['1','2','3','4','5','6','7','8'];

var graphUtility = document.getElementById('graph-utility').getContext('2d');
var utility = new Chart(graphUtility, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels,
        datasets: [{
            label: 'Vaga mais ocupada',
            backgroundColor: labels.map(label => getRandomColor()),
            borderColor: ['#e74c3c', '#2ecc71'],
            data: [30, 1, 15, 64, 8, 9, 32, 40]
        }]
    },

    // Configuration options go here
    options: {}
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
