let searchHistory = [];

// Load search history from local storage
function loadSearchHistory() {
    return localStorage.getItem('weatherSearchHistory');
}

function storeSearchHistory(newSearchHistory) {
    localStorage.setItem('weatherSearchHistory', newSearchHistory);
}

// Display search data
function displayWeatherData(weatherData) {
    // TODO add code to add weather data to the page
}

// Create click event handler
async function handleSearchButtonClick() {
    // Grab city name from form
    cityName = $('input').val();
    // Make API request to get lat/long from cityname
    // Details: https://openweathermap.org/forecast5#name5
    // Make API request to get 5-day forecast from lat/long
    // Details: https://openweathermap.org/forecast5
    weatherData = await fetch(/* whatever */);

    // Save data to local storage
    searchHistory[cityName] = weatherData;
    storeSearchHistory(searchHistory);
    // TODO display new city in search history?

    displayWeatherData({ city: cityName, data: weatherData });
}

function handleSearchHistoryButtonClick(event) {
    const cityName = event.target.value;
    const searchData = searchHistory[cityName];
    displayWeatherData({ city: cityName, data: searchData });
}

// Actually load search history
searchHistory = loadSearchHistory();
Object.keys(searchHistory).forEach((cityName) => {
    const searchData = searchHistory[cityName];
    // TODO add code to add button for this city
    $(historyButton).click(handleSearchButtonClick);
});

// Activate click event handler from button
$('search-btn').click(handleSearchButtonClick);
