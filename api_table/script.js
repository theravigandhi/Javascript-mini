// yourScript.js

const url = "https://dogapi.dog/api/v2/breeds";
const breedsDataElement = document.getElementById("breedsData");

const headers = {
  "Content-Type": "application/json",
};

const getData = async () => {
  try {
    let response = await fetch(url, { headers });

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();

    console.log(data);

    // Access the "data" array containing breeds
    const breeds = data.data;

    // Display all data in a table
    breeds.forEach((breed) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${breed.attributes.name}</td>
        <td>${breed.attributes.description}</td>
        <td>${breed.attributes.life.min}-${breed.attributes.life.max} years</td>
        <td>${breed.attributes.male_weight.min}-${
        breed.attributes.male_weight.max
      } kg</td>
        <td>${breed.attributes.female_weight.min}-${
        breed.attributes.female_weight.max
      } kg</td>
        <td>${breed.attributes.hypoallergenic ? "Yes" : "No"}</td>
      `;
      breedsDataElement.appendChild(row);
    });
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

getData();
