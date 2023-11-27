"use strict";

const cheeses = [
    {
        "name": "Cheddar",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Brie",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Gouda",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Parmesan",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Roquefort",
        "type": "blue",
        "country_of_origin": "France"
    },
    {
        "name": "Camembert",
        "type": "soft",
        "country_of_origin": "France"
    },
    {
        "name": "Manchego",
        "type": "semi-hard",
        "country_of_origin": "Spain"
    },
    {
        "name": "Gruyère",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Provolone",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Mozzarella",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Monterey Jack",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Feta",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Edam",
        "type": "semi-hard",
        "country_of_origin": "Netherlands"
    },
    {
        "name": "Colby",
        "type": "semi-hard",
        "country_of_origin": "United States"
    },
    {
        "name": "Gorgonzola",
        "type": "blue",
        "country_of_origin": "Italy"
    },
    {
        "name": "Havarti",
        "type": "semi-soft",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Swiss",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Pepper Jack",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Stilton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Asiago",
        "type": "semi-hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cambozola",
        "type": "blue",
        "country_of_origin": "Germany"
    },
    {
        "name": "Fontina",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Limburger",
        "type": "semi-soft",
        "country_of_origin": "Germany"
    },
    {
        "name": "Jarlsberg",
        "type": "semi-hard",
        "country_of_origin": "Norway"
    },
    {
        "name": "Danish Blue",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Munster",
        "type": "semi-soft",
        "country_of_origin": "France"
    },
    {
        "name": "Blue Castello",
        "type": "blue",
        "country_of_origin": "Denmark"
    },
    {
        "name": "Brick",
        "type": "semi-soft",
        "country_of_origin": "United States"
    },
    {
        "name": "Ricotta",
        "type": "soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Queso Fresco",
        "type": "soft",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Cotija",
        "type": "hard",
        "country_of_origin": "Mexico"
    },
    {
        "name": "Wensleydale",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Emmental",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Double Gloucester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Cabrales",
        "type": "blue",
        "country_of_origin": "Spain"
    },
    {
        "name": "Pecorino Romano",
        "type": "hard",
        "country_of_origin": "Italy"
    },
    {
        "name": "Red Leicester",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Caerphilly",
        "type": "semi-hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Wensleydale with Cranberries",
        "type": "hard",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Stichelton",
        "type": "blue",
        "country_of_origin": "United Kingdom"
    },
    {
        "name": "Halloumi",
        "type": "semi-soft",
        "country_of_origin": "Cyprus"
    },
    {
        "name": "Sbrinz",
        "type": "hard",
        "country_of_origin": "Switzerland"
    },
    {
        "name": "Manouri",
        "type": "soft",
        "country_of_origin": "Greece"
    },
    {
        "name": "Taleggio",
        "type": "semi-soft",
        "country_of_origin": "Italy"
    },
    {
        "name": "Cashel Blue",
        "type": "blue",
        "country_of_origin": "Ireland"
    }
];


alert("Welcome to Cheese Us!");
// Define an array of cheese objects with name and country properties.

// Function to prompt the user and handle the search.
function searchCheese() {
    const searchBy = prompt("Search by cheese name or country of origin?");
    if (searchBy === null) {
        // User clicked cancel, do nothing.
        return;
    }
    if (searchBy.toLowerCase() !== "cheese name" && searchBy.toLowerCase() !== "country of origin" && searchBy.toLowerCase() !== "country" && searchBy.toLowerCase() !== "cheese") {
        alert("Invalid input");
        return;
    }
    if (searchBy.toLowerCase() === "cheese name" || searchBy.toLowerCase() === "cheese"){
        const byCheeseName = prompt("Enter Cheese Name");
        for (let i = 0; i < cheeses.length; i++) {
            if (byCheeseName === cheeses[i].name){
                alert(`${cheeses[i].name} \n ${cheeses[i].type} \n ${cheeses[i].country_of_origin}`);
            }
        }
    } else {
        prompt("Enter Country of Origin");
    }

    const searchString = prompt("Enter Search:");
    if (searchString === null) {
        // User clicked cancel, do nothing.
        return;
    }
    // Perform the search based on user input.
    const results = cheeses.filter(cheese => {
        if (searchBy.toLowerCase() === "cheese name") {
            return cheese.name.toLowerCase().startsWith(searchString.toLowerCase());
        } else {
            return cheese.country.toLowerCase().startsWith(searchString.toLowerCase());
        }
    });
    // Display the results to the user.
    if (results.length === 0) {
        alert("No matching cheeses found.");
    } else {
        alert("Matching cheeses:\n" + results.map(cheese => `${cheese.name} (${cheese.country})`).join("\n"));
    }
}
// Attach the search function to the button click event.
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchCheese);










