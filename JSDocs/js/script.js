console.log('nse');

// example 1

/**
 * Add two numbers
 **/

function addNumbers(a, b) {
  return a + b;
}

addNumbers();

// example 2

/**
 *  Display a greeting message to the users.
 **/

function helloApp() {
  return `<span>Hello my friendly users</span>`;
}
helloApp();

// example 3

/**
 * Add three numbers together
 * @param {number} a first value
 *  @param {number} b second value
 *  @param {number} c third value
 * **/

function addThreeNumbers(a, b, c) {
  return a + b + c;
}
addThreeNumbers(10, 40, 80);

// example 4 @return

/**
 *   @return {dataType} returnDescription
 **/
/**
 *  Display cat names
 * @param {string} cat1 first value
 * @param {string} cat2 second value
 * @param {string} cat3 third value
 * @param {string} cat4 four value
 * @return {string} list of cat names
 **/

function addFourCats(cat1, cat2, cat3, cat4) {
  return `<ul>
<li>${cat1}</li>
<li>${cat2}</li>
<li>${cat3}</li>
<li>${cat4}</li>
</ul>`;
}
addFourCats('milo', 'shawn', 'Betty', 'Zoey');

// example 5

// @example

/**
 * Add four numbers together
 *  @param {number} f first value
 *  @param {number} g second value
 *  @param {number} h third value
 *  @param {number} i four value
 *  @return {number} sum of Numbers
 *  @example
 *
 * const a = 20;
 * const b = 80;
 * const c = 1;
 * const d = 9;
 * const sum = addFourNumbers (f, g, h, i);
 *
 **/

function addFourNumbers(f, g, h, i) {
  return f + g + h + i;
}
// addFourNumbers(a, b, c, d);
