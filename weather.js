//make the weather search visible
function weather() {
    var weatherDiv = document.getElementById('weatherDiv');
    weatherDiv.className = 'show';
}

//"close" the weather search
function hideWeather() {
    var weatherDiv = document.getElementById('weatherDiv');
    weatherDiv.className = '';
}

//check if the input is empty
function validateSize(input) {
    if (input == null || input == "") {
        alert("input must not be empty");
        return false;
    }
    return true;
}

//check to see if n is a number
function isNumber(n) {
    //isNaN - check if n = NaN
    //isFinite - check if n is a finite number
    return !isNaN(parseInt(n)) && isFinite(n);
}

//if passes the validation, then a notification presents the "result"
function search() {
    var input = document.forms["weather"]["keyword"].value;
    if (validateSize(input) == true) {
        if (isNumber(input) == true) {
            //check to see if input have exactly 4 digits
            array = input.split("");
            if (array.length == 4) {
                alert('Search result');
            } else {
                alert('post-code must be 4 digits');
            }

        } else {
            alert('post-code must be a number');
        }
    }
}