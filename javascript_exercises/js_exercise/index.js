const div = document.querySelector('#container');

/* add <p> with red text */
const para = document.createElement('p');
para.textContent = "Hey! I'm red";
para.style.color = 'red';
div.appendChild(para);

/* add <h3> with blue text */
const head = document.createElement('h3');
head.textContent = "I'm a blue h3!"
head.style.color = 'blue';
div.appendChild(head);

/* div with black border and pink bg color */
const subDiv = document.createElement('div');
subDiv.innerHTML = `<h1>I'm in a div</h1>   
                    <p>ME TOO!</p>`
subDiv.setAttribute('style', 'border:3px solid black; background-color:pink');
div.appendChild(subDiv);

/* NB: Though not safe, the innerHTML attribute is used here to 
keep things tidy and neat*/

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'yellow';
});