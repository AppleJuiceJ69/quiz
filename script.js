// UNFINISHED

//NEEDS MORE QUIZZES
// NEEDS CORRECT STATE FOR END.
const submitButton = document.getElementById('myButton');
const btn = document.querySelectorAll('.btn')
const question = document.querySelector('h3')
const scored = document.getElementById('quizScore')




const popupContainer = document.getElementById('popup-container')


let onclick = false;
let answer = false;
let changequiz = false;
let quizCount = 0;
let maxQuizzes = 2;
let score = 0;

const quiz2 = ()=>{
        btn.forEach((button)=>{
        question.textContent = 'How old is Andrew'
        switch(button.id){
            case button.id = 'btn-1':
                button.textContent = 5;
                answer = false;
            break;
            case button.id = 'btn-2':
                button.textContent = 10;
                answer = false;
            break;
            case button.id = 'btn-3':
                button.textContent = 22;
                answer = true;
            break;
            case button.id = 'btn-4':
                button.textContent = 30;
                answer = false;
            break;
            case button.id = 'btn-5':
                button.textContent = 5;
                answer = false;
            break;
        }

button.addEventListener('click', ()=>{
    switch(button.id){
        case button.id = 'btn-1':
            onclick = true;
            answer = false;
        
        break;

        case button.id = 'btn-2':
            onclick = true;
            answer = false;
        
            
        break;

        case button.id = 'btn-3':
            onclick = true;
            answer = true;
         
            
        break;

        case button.id = 'btn-4':
            onclick = true;
            answer = false;
         
            
        break;

        case button.id = 'btn-5':
            onclick = true;
            answer = false;
          
        break;
    
    }
    })
})
}
quiz2()


    const quiz1 = ()=>{
        btn.forEach((button)=>{
        // add two switch statements, one with changing text content, and other that changes quiz on click.
        question.textContent = 'Oldest President'
        switch(button.id){
            case button.id = 'btn-1':
                button.textContent = 'donald trump';
                answer = false;
            break;
            case button.id = 'btn-2':
                button.textContent = 'biden';
                onclick = true;
                answer = true;
            break;
            case button.id = 'btn-3':
                button.textContent = 'obama';
                answer = false;
            break;
            case button.id = 'btn-4':
                button.textContent = 'regan';
                answer = false;
            break;
            case button.id = 'btn-5':
                button.textContent = 'tom';
                answer = false;
            break;
        }
        button.addEventListener('click', ()=>{
            switch(button.id){
                case button.id = 'btn-1':
                    onclick = true;
                    answer = false;
                 
                break;

                case button.id = 'btn-2':
                    onclick = true;
                    answer = true;
                    
                break;

                case button.id = 'btn-3':
                    onclick = true;
                    answer = false;
                
                break;
                
                case button.id = 'btn-4':
                    onclick = true;
                    answer = false;
                 
                break;

                case button.id = 'btn-5':
                    onclick = true;
                    answer = false;
                     
                break;
            }
           
        })
    })
    }

quiz1()
      
const quizPopup = ()=>{
    popupContainer.style.display = 'flex';
}
// it should still be able to go to next even if false. 
// Problem is that when it's false we can't go to next quiz.
scored.value = 1;
const myScore = scored.value;

const submit = (e)=>{
   e.preventDefault();
    if(onclick === true && answer === true ){
       score += 1;
        quizCount += 1;
        myScore.textContent += 1;
        quiz2()
    }
    else if(onclick === true && answer === false){
        quizCount += 1;
        quiz2()
    }
// this runs the popup when last quiz is finished.
    if(quizCount === maxQuizzes){
        console.log(score);
        quizPopup()
    }
}



submitButton.addEventListener('click', submit )



// I used boolean values to make this easier to understand.
// if answer is true, then when i click submit it returns true.


// now we need to create more, and then we need to add more a scoring system, 
// if submit == true, and the value is false then 0 out of N where n is the amount of quizzes.
// else{ 1 / n}
// if takes === max amount of quizzes- then show score.

// RANDOM QUIZZES.
// TRY THIS, you could have random quizzes. This way quizzes won't be in order. This will be in the switch statement where we call or functions.


// IF WE HAD A HUNDRED QUIZZES, WE COULD PUT IT INSIDE ONE FUNCTION, THEN ADD PARAMATERS AND ARGUMENTS FOR EACH. THIS WAY IT WILL MAKE IT EASIER TO WRITE QUIZZES. ARE WE COULD USE CLASSES.
// ADDING ON TO THIS IT COULD HAVE RANDOM NUMBERS, CHARACTERS, QUESTION, ETC.


