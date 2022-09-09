//

console.log('hi');

// how to set local storage value

localStorage.setItem('name', 'Nsebo');

// how to get local storage data
// retrieve data
// getItem

const firstName = localStorage.getItem('name');

console.log(firstName);

// remove local storage item // removeItem

localStorage.removeItem('name');

// 3 item  local storage

localStorage.setItem('name', 'Nsebo');
localStorage.setItem('age', '33');
localStorage.setItem('city', 'Oslo');

localStorage.clear();

// create a project
// Add tailwindCSS
// create a BTN which toggl3 between light and dark theme
// if you click on the btn it will make
// the bg of the body dark and if you click
// again
