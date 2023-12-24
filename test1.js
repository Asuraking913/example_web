function Car (maxspeed, driver) {
    this.driver = driver;
    this.maxspeed = maxspeed;
    this.displayLog = function displayLog() {
        console.log('Welcome, ' + this.driver + ' ' + 'you have a maxspeed of ' + this.maxspeed)
    }
}

var myCar = new Car(120, 'Asura King');

console.log(myCar.displayLog())