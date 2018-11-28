const BASE_URL = "https://zagster-service.herokuapp.com"
$(updateView)

function updateView() {
    displayMonthlyGraph()
    displaygraph()
    displayRecentGraph()
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    $.getJSON(BASE_URL +"/rides/count/per_month", updatePerMonth)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
        console.log(data)
}

function updatePerMonth(data) {
    numberOfRides = data.count
        console.log(data)
}

function getData(data) {
    rideData = data;
    console.log(rideData);
}

function displaygraph(data) {
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, { 
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Rides Per Month: 2017',
            data: [20, 31, 79, 88, 156, 301, 405, 187, 401, 353, 113, 79, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 0, 153, 0.2)',
                'rgba(255, 51, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 0.3)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 0, 153, 1)',
                'rgba(255, 51, 255, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function displayMonthlyGraph(data) {
    var ctx = document.getElementById("Graph2016");
    var myChart = new Chart(ctx, { 
        type: 'line',
        data: {
            labels: ["September", "October", "November", "December"],
            datasets: [{
                label: 'Rides Per Month: 2016',
                data: [220, 141, 89, 16, 4],
                backgroundColor: [
                    'rgba(0, 0, 153, 0.2)',
                    'rgba(255, 51, 255, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 153, 1)',
                    'rgba(255, 51, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    }

    function displayRecentGraph(data) {
        var ctx = document.getElementById("Graph2018");
        var myChart = new Chart(ctx, { 
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: 'Rides Per Month: 2018',
                    data: [94, 83, 154, 1216, 2400, 1756, 2748, 1912, 3648, 2404],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        }