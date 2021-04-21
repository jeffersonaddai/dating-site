var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'image1.jpg',
        age: 20        
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'image2.jpg',
        age: 25
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'image3.jpg',
        age: 18
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'image4.jpg',
        age: 45
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'image5.jpg',
        age: 42
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'image3.jpg',
        age: 47
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'image3.jpg',
        age: 19
    },
];

window.addEventListener('load', function() {
    
    
    function search() {
        const results = document.getElementById('results');
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        // get maximum and minimum age
        var maxAge = document.getElementById("maxAge").value;
        var minAge = document.getElementById("minAge").value;
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        
        var usersLength = users.length;
        var resultDiv = document.createElement('div')
        resultDiv.id = 'results';
        for(var i = 0; i < usersLength; i++) {
            var resultsHtml = '';
            var div = document.createElement('div')

            div.classList.add('service');
            div.classList.add('mar-right40')
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    // Check if not less than minimum age
                    if(minAge == '' || minAge <= users[i].age){
                        console.log(minAge);
                        if(maxAge == '' || maxAge >= users[i].age){
                            resultsHtml += `
                            <div class="service mar-right40"> <img src="images/${users[i].avatar}" />
                            <div class="shadows"></div>
                            <div class="title">
                              <h2>${users[i].name}</h2>
                            </div>
                            <div class="content">
                              <p>${users[i].hobby}</p>
                              <p>${users[i].age}</p>
                              <div class="button"><a href="#">More Info </a></div>
                            </div>
                          </div>
                            `; 
                        }
                    } 
                }
            }
            div.innerHTML = resultsHtml;
                
            resultDiv.append(div);
        }

        results.replaceWith(resultDiv);

    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});