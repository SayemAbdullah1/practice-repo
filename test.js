
//js file is here
const car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    Start: function () {
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    },
};
console.log(car.weight);
console.log(car.color);
car.Start();
