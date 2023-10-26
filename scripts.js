// Questions

// 1. How many child nodes does the body element have in this document?
//document.body.childNodes.
// This HTML document has 4 child nodes.


// 2. What is the relationship between the div with the class of todo-section and the list element with the text of "Reading"?
//list element is the grandchild of the div

// 3. What is the relationship between the div with the class of image-gallery and the html element?
//div is the parent and image-gallery id great grandchild in this html document

// 4. Uncomment the following code:

document.addEventListener('DOMContentLoaded', function () {
     const addButton = document.getElementById('addButton');
     const newTaskInput = document.getElementById('newTask');
     const taskList = document.getElementById('taskList');

     addButton.addEventListener('click', function () {
         const taskText = newTaskInput.value;

         if (taskText !== '') {
             const taskItem = document.createElement('li');
             taskItem.textContent = taskText;

             taskItem.addEventListener('click', function () {
                 taskItem.classList.toggle('completed');
             });

             taskList.appendChild(taskItem);
             newTaskInput.value = '';
         }
     });
 });

// Connect this file to the HTML file and open the HTML file in the browser? We will learn much more about event listeners soon!

// 5. How many variables are declared?
// five variables: addButton, newTaskInput, taskList, taskText, taskItem


// 6. How many function calls do you see?
// one function : document.addEventListener('DOMContentLoaded', function ()


// 7. List the parameters that you see.
// 12 parameters: 'DOMContentLoaded', function (), addButton, newTask, taskList, click, function (), taskText, li, click, function(),completed,taskItem.
// 

// What do you see? What can you learn from the above code?
// this page is interactive and can now add to do items in real time