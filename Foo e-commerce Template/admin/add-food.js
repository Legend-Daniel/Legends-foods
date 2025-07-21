// First Get the forms from the the html codes
document.addEventListener('DOMcontentLoaded', function(){
    const form1 = document.getElementById('foodForm1');
    const form2 = document.getElementById('foodForm2');

    // listen to the submit button

    form2.addEventListener('submit', function (event){
        event.defaultPrevented(); // Prevent the page from reloading

        // Get data from Form1
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const categoory = document.getElementById('category').value;
        const price = document.getElementById('price').value;
        const image = document.getElementById('image').files[0]?.name ||'';

        // Get data from form2

        const ingredient = document.getElementById('ingredients').value;
        const nutrition = document.getElementById('nutrition').value;
        const stock = document.getElementById('stock').value






    })
})

