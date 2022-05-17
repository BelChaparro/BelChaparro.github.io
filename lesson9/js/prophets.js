const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            let birthDate = document.createElement("p");
            birthDate.textContent = "Day of Birth: " + prophets[i].birthdate;
            let birthPlace = document.createElement("p");
            birthPlace.textContent = "Place of birth: " + prophets[i].birthplace;
            let image = document.createElement("img");
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order);
            card.appendChild(h2);
            card.appendChild(birthDate);
            card.appendChild(birthPlace);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
    });
