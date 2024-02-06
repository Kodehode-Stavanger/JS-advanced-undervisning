// Events

// submit

const travelForm = document.getElementById("travel-form");

travelForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formDataObject = Object.fromEntries(new FormData(travelForm));
  console.log(formDataObject);
});
