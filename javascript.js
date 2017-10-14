document.getElementById('save').addEventListener('click',saveResume);
document.getElementById('retrieve').addEventListener('click',retrieveResume);

function saveResume () {
    var details = {
        'personalDetails': 
        {'firstname': 'bhargava',
         'lastname': 'vadlamani',
         'dob': '03/06/1987',
         'country': 'India',
         'gender': 'Female'},
        'professionalDetails': 
        {'jobrole': 'programmer',
         'exp': '7',
         'domain': 'banking',
         'technology': 'opensource'},
        'hobby': 
        {'hobby1': 'singing', 
         'hobby2': 'spirituality', 
         'hobby3': 'staring'}
    };
    
    var fname = '';
    
    details.personalDetails.firstname = document.getElementById('fn').value;
    details.personalDetails.lastname = document.getElementById('ln').value;
    details.personalDetails.dob = document.getElementById('dob').value;
    details.personalDetails.country = document.getElementById('add').value;
    if (document.getElementById('male').checked) {
       details.personalDetails.gender = 'Male';
    } else if (document.getElementById('female').checked) {
       details.personalDetails.gender = 'Female';
    } else {
       details.personalDetails.gender = 'Other';
    }
    
    details.professionalDetails.jobrole = document.getElementById('jr').value;
    details.professionalDetails.exp = document.getElementById('exp').value;
    details.professionalDetails.domain = document.getElementById('dom').value;
    details.professionalDetails.technology = document.getElementById('tech').value;
    
    details.hobby.hobby1 = document.getElementById('h1').value;
    details.hobby.hobby2 = document.getElementById('h2').value;
    details.hobby.hobby3 = document.getElementById('h3').value;
    
    var arr = document.getElementById('fn').value.split('');
    
    for(i=0;i<arr.length;i++) {
        if (arr[i] === ' ') {
          ;  
        } else {
            fname = fname + arr[i];
        }
    }
    
    fname = fname.toLowerCase();
    
    localStorage.setItem(fname, JSON.stringify(details));
    
    document.getElementById('fn').value = '';
    document.getElementById('ln').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('add').value = '';
    
    document.getElementById('jr').value = '';
    document.getElementById('exp').value = '';
    document.getElementById('dom').value = '';
    document.getElementById('tech').value = '';
    
    document.getElementById('h1').value = '';
    document.getElementById('h2').value = '';
    document.getElementById('h3').value = '';
    
    window.location = '/Users/bhargavavadlamani/Desktop/iCloud Drive (Archive)/Desktop/js/ResumeBuilder/ready.html';
    
}

function retrieveResume() {
    
    var arr = document.getElementById('retrieveInput').value.split('');
    
    var f1name = '';
    console.log(arr);

    for(i=0; i<arr.length; i++) {
        if (arr[i] === ' ') {
          ;  
        } else {
            f1name = f1name + arr[i];
        }
    }
    
    f1name = f1name.toLowerCase();
                             
    /* purpose is to navigate to another page */
    window.location = '/Users/bhargavavadlamani/Desktop/iCloud Drive (Archive)/Desktop/js/ResumeBuilder/page2.html?' + f1name; 
}