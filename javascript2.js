var key = window.location.search;

console.log(key);

var length = key.length;

var str = key.slice(1,length + 1);

console.log(str);

var detailsString = localStorage.getItem(str);

var details = JSON.parse(detailsString);

document.getElementById('fn').innerHTML = details.personalDetails.firstname;
document.getElementById('ln').innerHTML = details.personalDetails.lastname;
document.getElementById('dob').innerHTML = details.personalDetails.dob;
document.getElementById('country').innerHTML = details.personalDetails.country;
document.getElementById('gender').innerHTML = details.personalDetails.gender;

document.getElementById('jr').innerHTML = details.professionalDetails.jobrole;
document.getElementById('exp').innerHTML = details.professionalDetails.exp;
document.getElementById('dom').innerHTML = details.professionalDetails.domain;
document.getElementById('tech').innerHTML = details.professionalDetails.technology;

document.getElementById('h1').innerHTML = details.hobby.hobby1;
document.getElementById('h2').innerHTML = details.hobby.hobby2;
document.getElementById('h3').innerHTML = details.hobby.hobby3;