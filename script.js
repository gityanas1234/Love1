// Function to ask the marriage question
function askQuestion() {
    // Prompt the user for a response
    let response = prompt("Will you marry me? (Type 'Yes' or 'No')");

    // Handle different responses
    let responseMessage = document.getElementById("response");

    if (response.toLowerCase() === "yes") {
        responseMessage.style.display = "block";
        responseMessage.textContent = "💍 Yes! I am so happy! You are my forever! ❤️";
        responseMessage.style.color = "#32CD32"; // Green for Yes
        responseMessage.style.animation = "fadeIn 2s ease-in";
    } else if (response.toLowerCase() === "no") {
        responseMessage.style.display = "block";
        responseMessage.textContent = "I will always love you, no matter what. 💖";
        responseMessage.style.color = "#f44336"; // Red for No
        responseMessage.style.animation = "fadeIn 2s ease-in";
    } else {
        responseMessage.style.display = "block";
        responseMessage.textContent = "Please give me an answer, my love!";
        responseMessage.style.color = "#ff6347"; // Orange for invalid input
        responseMessage.style.animation = "fadeIn 2s ease-in";
    }
}
