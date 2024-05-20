const baseURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/gamepromo/";
const eventForm = document.getElementById("gamePromoForm");
const postGamePromoMethod = 'POST';
const completeText = document.getElementById("submitBtn"); 
const submissionDetails = document.getElementById("submissionDetails"); 

const handleFormSubmit = event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("website_code", "test");

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
            completeText.innerHTML = "Submitted!";

            submissionDetails.innerHTML = `Submission Details: <br> Name: ${data.name}, Game Name: ${data.game_name}`;
        })
        .catch(error => {
            console.error("error:", error.message);
            submissionDetails.innerHTML = `Error submitting form: ${error.message}`; 
        });
};

eventForm.addEventListener("submit", handleFormSubmit);
