var buttonSearch = document.querySelector(".button-search");
var searchHotelForm = document.querySelector(".search-hotels");

buttonSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchHotelForm.classList.toggle("search-hotels-show");
});
