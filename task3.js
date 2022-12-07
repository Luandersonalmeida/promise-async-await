// Task 3: using https://restcountries.eu/ API,
// get country where alpha3Code = col
const fetchData = async () => {
    const res = await fetch('https://restcountries.com/v3.1/alpha/pe');

    const country = await res.json();

    console.log(country);

}

fetchData();