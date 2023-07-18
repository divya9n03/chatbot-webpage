document.addEventListener("DOMContentLoaded", function () {
    var userInput = document.getElementById("userInput");
    var sendBtn = document.getElementById("sendBtn");
    var chatbox = document.getElementById("chatbox");

    sendBtn.addEventListener("click", function () {
        handleUserInput();
    });

    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });

    function handleUserInput() {
        var inputText = userInput.value.trim();
        if (inputText !== "") {
            appendUserMessage(inputText);
            handleUserRequest(inputText);
            userInput.value = "";
        }
    }

    function handleUserRequest(inputText) {
        var response;
        // Handle different use cases based on user input
        axios.post('/handle_request', {
            input: inputText
        })
        .then(function (res) {
            response = res.data.response;
            // Continue with your code to handle the response
            // For example, update the chatbot interface with the response
        })
        .catch(function (error) {
            console.error(error);
        });
        }
        if (inputText.toLowerCase().includes("regulation")) {
            response = "Our company follows strict compliance regulations.";
        } else if (inputText.toLowerCase().includes("privacy")) {
            response = "Privacy is a top priority for us. We adhere to all privacy regulations.";
        } else if (inputText.toLowerCase().includes("security")) {
            response = "Security is paramount. We have implemented robust security measures.";
        } else {
            response = "I'm sorry, I'm not able to assist with that request.";
        }

        appendBotMessage(response);
    


    function appendUserMessage(message) {
        var userMessage = document.createElement("p");
        userMessage.textContent = "You: " + message;
        chatbox.appendChild(userMessage);
    }

    function appendBotMessage(message) {
        var botMessage = document.createElement("p");
        botMessage.textContent = "Chatbot: " + message;
        chatbox.appendChild(botMessage);
    }
});
