//Fetch rental data from JSON:
const requestURL = "https://belchaparro.github.io/scoots/data/scoots-data.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];

        for (let i = 0; i < rentals.length; i++ ) {
            let vehicleBox = document.createElement("div");
            vehicleBox.classList.add("vehicle-box")
            vehicleBox.innerHTML = `<img src="${rentals[i].image}" alt="${rentals[i].model}">
            <p>Model: ${rentals[i].model}<br>
                Capacity: ${rentals[i].capacity}<br>
                Prices: 
            </p>
                <table>
                        <tr>
                            <th colspan="2">Reservation</th>
                            <th colspan="2">Walk-in</th>
                        </tr>
                        <tr>
                            <th>Half Day (3hrs)</th>
                            <th>Full Day</th>
                            <th>Half Day (3hrs)</th>
                            <th>Full Day</th>
                        </tr>
                        <tr>
                            <td>$${rentals[i].reservation[0]["half-day"]}</td>
                            <td>$${rentals[i].reservation[0]["full-day"]}</td>
                            <td>$${rentals[i]["walk-in"][0]["half-day"]}</td>
                            <td>$${rentals[i]["walk-in"][0]["full-day"]}</td>
                        </tr>
                </table>
            
            <hr>`

            if (rentals[i].category == "Honda Motor Scooters") {
                document.querySelector("#type1").appendChild(vehicleBox);
            }
            else if (rentals[i].category == "ATV Side-by-Side") {
                document.querySelector("#type2").appendChild(vehicleBox);
            }
            else if (rentals[i].category == "Jeep Rentals") {
                document.querySelector("#type3").appendChild(vehicleBox);
            }
      }
    });