module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.",
            "Disbelief destroys the magic.",
            "Every flower blooms in its own sweet time.",
            "Man is born to live and not prepared to live.",
            "The change you started already have far-reaching effects. Be ready.",
            "You can keep a secret.",
            "Your first love has never forgotten you."
        ]

        //random fortunes
        let randomIdx = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIdx];

        res.status(200).send(randomFortunes);

    },

    getFood: (req, res) => {

        const foods = ["Cheeseburger", "Chicken Fingers", "Boneless Wings", "Fries", "Mac-n-Cheese", "Corn Bread"]

        //random food
        let foodIndex = Math.floor(Math.random() * foods.length);
        let randomFoods = foods[foodIndex];

        res.status(200).send(randomFoods);
    },


    getCoffee: (req, res) => {

        const coffee = ["Iced Latte", "Pumkin Spice Latte", "Cold Brew", "Flat White Mocha", "Green Tea Latte", "Americano"]

        //random coffee
        let coffeeIndex = Math.floor(Math.random() * coffee.length);
        let randomCoffee = coffee[coffeeIndex];

        res.status(200).send(randomCoffee);
    },


    getReview: (req, res) => {

        const reviews = ["the best food and coffee ever!",
            "Not so recommended because the food was nasty and the coffee was too bitter.",
            "the food was so good, especially the corn bread!",
            "It's okay, but too expensive!",
            "Service was terrible. the person who took my order was so rude!",
            "I want my money back!!!",
            "Their pumpkin spice latte is the bomb!"
        ]

        //random reviews
        let reviewIndex = Math.floor(Math.random() * reviews.length);
        let randomReview = reviews[reviewIndex];

        res.status(200).send(randomReview);
    }

}