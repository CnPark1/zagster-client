const BASE_URL = "https://zagster-service.herokuapp.com"
$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    $.getJSON(BASE_URL +"/rides/count/g:station/per_day_of_year", updatePerDay)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
        console.log(data)
}

function updatePerDay(data) {
    numberOfRides = data.count
    $("h3#ridesPerDay").html(numberOfRides)
        console.log(data)
}