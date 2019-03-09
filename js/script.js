var buttonSearch = document.querySelector(".button-search");
var searchHotelForm = document.querySelector(".search-hotels");
var formSearchHotels = document.querySelector(".search-hotels");
var dataArrival = formSearchHotels.querySelector("[name=date-arrival]");
var dataADeparture = formSearchHotels.querySelector("[name=date-departure]");
var numberMans = formSearchHotels.querySelector("[name=number-mans]");
var numberChilds = formSearchHotels.querySelector("[name=number-childs]");
var buttonSubmit = formSearchHotels.querySelector(".button-submit");

buttonSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchHotelForm.classList.toggle("search-hotels-show");
});

buttonSubmit.addEventListener("click", function(evt) {
  if(!dataArrival.value || !dataADeparture.value || !numberMans.value ||!numberChilds.value) {
    evt.preventDefault;
    console.log("Не все значения заданы или они пусты");
  } else {
    localStorage.setItem("dataArrival", dataArrival.value);
  }
});

console.log(dataArrival.value);
console.log(dataADeparture);
console.log(numberMans);
console.log(numberChilds);
console.log(buttonSubmit);
