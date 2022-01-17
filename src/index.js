
// The big function that does the work is in a variable called "init"  (see also the bottom of the script for the first thing that happens before "init" (DOM loading event)):

const init = () => {

    // The first task within the big function is to construct a variable called "inputForm that finds the 'form' element in the document:

    const inputForm = document.querySelector('form');

    // The second task in this function creates an Event Listener on the 'form' (using the variable we just created called inputForm)

    // The even we are listening for is 'submit'(first parameter):

    inputForm.addEventListener('submit', (e) => {

        // The second argument of the event listener is a callback function (with its own parameter 'e' for event)

        // The following code is added to prevent the form from refreshing automatically:

        e.preventDefault();

        // The next task (still within the callback function) is to find the value of the input submitted by the user during the submit event

        // We do this by creating a variable called 'input' and finding the input value directly using queryselector:

        const input = document.querySelector('input#searchByID')

        // Then we log the input value in the console
        console.log(input.value);

        // // The method below is also valid for accessing the input value from an event object:

        // e.target.children[1].value;

        // The next task is to fetch the data from the JSON server and use .then to do something with the data:

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            // The next step is to grab the HTML elements where the retrieved data should be displayed on the page:
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            console.log(data);

            // Then to add the new data to those elements using "innerText":
            title.innerText = data.title;
            summary.innerText = data.summary;
    })
  });
}
// Below is actually step 1, adding an event listener for when the content is loaded in the DOM

// The first parameter is the DOM loading event and the second parameter calls the big function "init":

document.addEventListener('DOMContentLoaded', init);