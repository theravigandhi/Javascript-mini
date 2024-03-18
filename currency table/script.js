const currencyElement = document.getElementById("currency_title");
const updatedTime = document.getElementById("last_updated_time");

const getData = async () => {
  try {
    const apiKey = "cur_live_b5OwrK3x0eSPXhvj5pzY39L8HnPLRfWVXZDhkCjW";
    const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`;

    const res = await fetch(url);
    const response = await res.json();

    console.log(response);

    updatedTime.innerHTML = ` Last Updated Time : <h4>${response.meta.last_updated_at}</h4>`;

    if (response.data) {
      const currencyData = response.data;

      // Assuming currencyData is an object with currency codes as keys
      Object.keys(currencyData).forEach((currencyCode) => {
        console.log(currencyCode);
        const currency = currencyData[currencyCode];

        const curr = document.createElement("tr");
        curr.innerHTML = `<td>${currencyCode}</td> <td>${currency.code}</td> <td>${currency.value}</td>`;

        currencyElement.appendChild(curr);
      });
    } else {
      console.error("Invalid response format:", response);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData();
