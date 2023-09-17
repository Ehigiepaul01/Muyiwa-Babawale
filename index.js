const hamburger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".menu");
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active")
    navList.classList.toggle("show")
})


  // Find the button element by its ID
  const downloadButton = document.getElementById('downloadButton');
  
  // Define the file URL
  const fileURL = 'https://example.com/path-to-your-file.pdf';
  
  // Add a click event listener to the button
  downloadButton.addEventListener('click', function() {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileURL;
    link.target = '_blank'; // Open the link in a new tab (optional)
    link.download = 'filename.pdf'; // Specify the file name to be downloaded
    link.click(); // Simulate a click on the anchor element
  });


  