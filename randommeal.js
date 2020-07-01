const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {

  },
  set appetizers(appetizerIn) {

  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const random = Math.floor(Math.random() * dishes.length);
    return dishes[random];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your randomly generated meal costs £${totalPrice} and consists of ${appetizer.name}, ${main.name} and ${dessert.name}.`
  }
};

menu.addDishToCourse('appetizers', 'Tomato Soup', 4.00);
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Burrata', 4.50);
menu.addDishToCourse('mains', 'Steak Hache', 9.50);
menu.addDishToCourse('mains', 'Steak Frites', 13.50);
menu.addDishToCourse('mains', 'Steak Tartare', 12.00);
menu.addDishToCourse('desserts', 'Ice Cream', 5.50);
menu.addDishToCourse('desserts', 'Cheese Board', 12.00);
menu.addDishToCourse('desserts', 'Chocolate Mousse', 7.00);

const meal = menu.generateRandomMeal()

console.log(meal)
