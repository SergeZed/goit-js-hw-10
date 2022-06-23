export default function getRefs() {
  return {
    inputCountry: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfoContainer: document.querySelector('.country-info'),
  };
}
