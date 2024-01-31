const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const foodElement = document.querySelector(".shape1")
const coffeeElement = document.querySelector(".shape2")
const reviewElement = document.querySelector(".shape3")

const paramEl = document.querySelector('.shape4')
const queryEl = document.querySelector('.shape5')



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getFood = () => {
    axios.get("http://localhost:4000/api/food/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getCoffee = () => {
    axios.get("http://localhost:4000/api/coffee/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}


const getReview = () => {
    axios.get("http://localhost:4000/api/review/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}


const getParam = () => {
    axios.get("http://localhost:4000/param/Please Pay At The Counter!")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}


const getQuery = () => {
    axios.get("http://localhost:4000/query?Food=Bread Pudding&Coffee=Vanilla Latte")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
foodElement.addEventListener('click', getFood)
coffeeElement.addEventListener('click', getCoffee)
reviewElement.addEventListener('click', getReview)

paramEl.addEventListener('click', getParam)
queryEl.addEventListener('click', getQuery)
