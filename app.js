// creating our variables
const addTaskBtn = document.querySelector('.add-task');
const addTaskContainer = document.querySelector('.add-task-container');
const inputTask = document.getElementById('input-task');
const container = document.querySelector('.container');
const body = document.querySelector('body')



// creating our theme toggler btn together with it's function
const themeTogglerBtn = document.querySelector('.theme-toggler');
themeTogglerBtn.addEventListener('click', function() {
    body.classList.toggle('dark');
    themeTogglerBtn.textContent == 'daylight' ? themeTogglerBtn.textContent = 'nightie' : themeTogglerBtn.textContent = 'daylight';
})



// creating our rgb toggler btn 
const rgbTogglerBtn = document.querySelector('.rgb-toggler');
rgbTogglerBtn.addEventListener('click', function() {
    rgbTogglerBtn.textContent == 'turn rgb on' ? rgbTogglerBtn.textContent = 'turn rgb off' : rgbTogglerBtn.textContent = 'turn rgb on';
    body.classList.toggle('rgb')



    // resetting from rgb to default colors
    if (!body.classList.contains('rgb')) {
        resetNiceColors();
    }
})




// creating the function for our 'add' btn, This is the main engine for this app as it will carry some other functions and generate the necessary payload elements for the effective functioning of the app.======!We have a little problem with hoisting and function scoping in here, Will rectify it as soon as I figure out a solution.

addTaskBtn.addEventListener('click', function() {
    const btnCont = document.querySelector('.btn-cont')
    const regex = /^[a-zA-Z0-9. ]+$/;


    // creating a container for dynamic el. insertion (This is our main entry point)
    const task = document.createElement('div');
    task.classList.add('task');


    const li = document.createElement('li');
    li.classList.add('list-item')
    li.textContent = `${inputTask.value}`;
    task.append(li);


    // const allBtn = document.querySelectorAll('button')
    const checkButton = document.createElement('button');
    checkButton.textContent = 'Check';
    checkButton.classList.add('check-btn');
    checkButton.classList.add('gradient-background');
    task.append(checkButton);


    const undoBtn = document.createElement('button')
    undoBtn.textContent = 'Undo';
    undoBtn.classList.add('undo-btn');


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';


    deleteButton.classList.add('deleteTask');
    deleteButton.classList.add('gradient-background');
    task.append(deleteButton);


    const errorBox = document.querySelector(".err-message");




    // evaluating our input value(text typed into the input field)
    if (inputTask.value === '' || inputTask.value == " ") {

        // display our error modal
        addTaskContainer.append(errorBox);
        errorBox.textContent = 'Please type in a valid value, The input field is empty.';
        errorBox.style.display = 'flex'
        setTimeout(() => {
            errorBox.style.opacity = 1
            errorBox.style.display = 'none'
        }, 6000);


        // and if an ambitious user tries to type in harmful stuff or just plain nonsense
    } else if (!regex.test(`${inputTask.value}`)) {

        // display our error modal again
        addTaskContainer.append(errorBox);
        errorBox.textContent = 'Sorry, it seems like there are some symbols in there, your input does not look like a task or a chore.';
        errorBox.style.display = 'flex'
        setTimeout(() => {
            errorBox.style.display = 'none'
        }, 6000);


        // finally else😊
    } else {
        addTaskContainer.append(task);
    }



    // add an event listener/handler for our check button
    checkButton.addEventListener('click', function() {
        li.style.textDecoration = 'line-through'
    });



    // add an event listener/handler for our delete button
    deleteButton.addEventListener('click', function() {
        task.remove();
    });



    // evaluate our check button
    checkButton.addEventListener('click', function() {
        checkButton.textContent == 'Check' ? checkButton.textContent = 'Uncheck' : (checkButton.textContent = 'Check', li.style.textDecoration = 'none');
    })



    // add a function to our delete button
    deleteButton.addEventListener('click', function() {
        btnCont.append(undoBtn);
        setTimeout(() => {
            undoBtn.remove()
        }, 8000)

    })



    // add an event listener/handler for our delete button
    undoBtn.addEventListener('click', function() {
        addTaskContainer.append(task);
        undoBtn.remove()

    })



    // clear our input field after a task has been submitted
    inputTask.value = ''



})

// function 'add' btn ends here




// ------------------------------------------------




// write a function that generates random colors
function get_random_color() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}



// grab our random-color btn from our html code
const randomColorBtn = document.querySelector('.random-color-btn')



// add an event listener and a function for it
randomColorBtn.addEventListener('click', function() {



    // grab every single btn out there!
    const allBtn = document.querySelectorAll('button');
    const inputTask = document.getElementById('input-task');
    const errorBox = document.querySelector(".err-message");
    const addTaskBtn = document.querySelector(".add-task");
    const allLi = document.querySelectorAll("li");
    resetColorBtn.style.display = 'flex'



    // iterate through the btns and apply random colors to them
    for (i = 0; i < allBtn.length; i++) {
        allBtn[i].style.border = '3px solid' + get_random_color()
    }
    for (i = 0; i < allLi.length; i++) {
        allLi[i].style.border = '3px solid' + get_random_color();
    }



    inputTask.style.border = '3px solid' + get_random_color();
    errorBox.style.border = '3px solid' + get_random_color();
})



// mouse over function for our random color btn
randomColorBtn.addEventListener('mouseover', function() {
    randomColorBtn.style.border = '3px solid' + get_random_color()
})


const resetColorBtn = document.querySelector('.reset-colors');
resetColorBtn.textContent = 'reset colors😊';



// add an event listener for our reset-color-btn
resetColorBtn.addEventListener('click', function() {
    const allBtn = document.querySelectorAll('button');
    const allLi = document.querySelectorAll("li");
    const errorBox = document.querySelector(".err-message");
    const addTaskBtn = document.querySelector(".add-task");
    const inputTask = document.getElementById('input-task');



    // iterate through the btns and reset their colors to default
    for (i = 0; i < allBtn.length; i++) {
        allBtn[i].style.border = ''
    }
    for (i = 0; i < allLi.length; i++) {
        allLi[i].style.border = '';
    }
    errorBox.style.border = '';
    addTaskBtn.style.border = '';
    inputTask.style.border = '';


    body.classList.remove('rgb')
})



// create a function for resetting our random colors to default
function resetNiceColors() {
    const allBtn = document.querySelectorAll('button');
    const allLi = document.querySelectorAll("li");
    const errorBox = document.querySelector(".err-message");
    const addTaskBtn = document.querySelector(".add-task");
    const inputTask = document.getElementById('input-task');
    for (i = 0; i < allBtn.length; i++) {
        allBtn[i].style.border = ''
    }
    for (i = 0; i < allLi.length; i++) {
        allLi[i].style.border = '';
    }
    errorBox.style.border = '';
    addTaskBtn.style.border = '';
    inputTask.style.border = '';

}
// function resetNiceColors ends here.