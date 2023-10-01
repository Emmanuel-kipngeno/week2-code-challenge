// index.js
document.addEventListener('DOMContentLoaded', () => {
    const animalList = document.getElementById('animal-list');
    const animalName = document.getElementById('animal-name');
    const animalImage = document.getElementById('animal-image');
    const animalVotes = document.getElementById('animal-votes');
    const voteButton = document.getElementById('vote-button');
  
    // Fetch character data from the server
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(data => {
        // Display a list of all animal names
        data.forEach(character => {
          const li = document.createElement('li');
          li.textContent = character.name;
          li.classList.add('animal-name');
          li.addEventListener('click', () => {
            // Show animal details on click
            showAnimalDetails(character);
          });
          animalList.appendChild(li);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  
    // Function to show animal details
    function showAnimalDetails(character) {
      animalName.textContent = character.name;
      animalImage.src = character.image;
      animalVotes.textContent = `Votes: ${character.votes}`;
      voteButton.addEventListener('click', () => {
        // Add votes to the animal and update the displayed votes
        character.votes++;
        animalVotes.textContent = `Votes: ${character.votes}`;
      });
    }
  });