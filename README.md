# keyword-search-volume

This project helps you to find the number of times any keyword is searched on Youtube. I've used technologies like html, css, javascript and bootstrap to build this project. In javascript I've used API calls concept to get the data from the url. I've used "get" API call to fetch the data and to represent the results.
I've used google api's of youtube and for the API key I've used google cloud to generate the API.


project explanation:

It consists of an input element to input any keyword of your choice and after entering it when you click on search button it will start searching and give the volume of the keyword you entered. i.e, the number of times it is searched on youtube....

When you click on search button it will call the event listener in javascript file and start fetching the data, we are getting the json data to "data" variable, which is an object , it containes pageInfo(Object) as a key and totalResults as a value for it, we want this data which is the actual volume of the keyword, so we are displaying it on the web page....
