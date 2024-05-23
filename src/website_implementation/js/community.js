const baseURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/gamepromo/";
const eventForm = document.getElementById("gamePromoForm");
const postGamePromoMethod = 'POST';
const completeText = document.getElementById("completeText"); 
const submissionDetails = document.getElementById("submissionDetails"); 

const handleFormSubmit = event => {
    event.preventDefault();
    let formData = new FormData(event.target);

    const requestOptions = {
        method: postGamePromoMethod,
        body: formData,
        redirect: 'follow'
    };

    fetch(baseURL, requestOptions)
        .then(response => response.json().then(data => {
            if (!response.ok) {
                console.log("Server Response:", data);
                submissionDetails.innerHTML = `Error: ${data}`; 
            }
            return data;
        }))

        .then(data => {
            console.log(data);
            eventForm.reset();
            alert("Submission Successfully!")
            completeText.innerHTML = "Submission Successfully!";
            submissionDetails.innerHTML = `<div class="submission-detail-item">
                <h4>Name: ${data.name}</h4>
                <p>Game Name: ${data.game_name}</p>
                <p>Genre: ${data.genre}</p>
                <p>Description: ${data.description}</p>
                ${data.sub_genre ? `<p>Sub Genre: ${data.sub_genre}</p>` : ''}
                ${data.message ? `<p>Message: ${data.message}</p>` : ''}
            </div>`;
        })

        .catch(error => {
            console.error("error:", error.message);
            submissionDetails.innerHTML = `Error submitting form: ${error.message}`; 
        });
};

eventForm.addEventListener("submit", handleFormSubmit);
