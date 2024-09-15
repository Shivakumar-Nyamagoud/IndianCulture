document.getElementById("send-button").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value.trim().toLowerCase();
    if (userInput) {
        addUserMessage(userInput);
        getBotResponse(userInput);
        document.getElementById("user-input").value = ""; // Clear input after sending
    }
});

function addUserMessage(message) {
    let chatBox = document.getElementById("chat-box");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerHTML = message;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

function getBotResponse(userInput) {
    let botMessage = "";

    // List of keywords or key phrases and their corresponding bot responses
    if (userInput.includes("karnataka")) {
        botMessage = "Karnataka is known for its rich history, architecture, and natural beauty. Key attractions include the Hampi ruins, Mysore Palace, and the Western Ghats. Karnataka is also famous for its classical music, dance forms like Yakshagana, and cuisine including dishes like Bisi Bele Bath and Mysore Pak.";
     }else if (userInput.includes("hi") || userInput.includes("hello") || userInput.includes("hey")) {
            botMessage = "Hi there! How can I help you learn more about Indian culture today?";
        }
        

    else if (userInput.includes("maharashtra")) {
        botMessage = "Maharashtra is home to India's financial capital, Mumbai, and famous for its diverse culture, Bollywood, and historical landmarks like the Ajanta and Ellora caves, and the Gateway of India. It is known for its traditional festivals like Ganesh Chaturthi and vibrant cuisine such as Vada Pav and Puran Poli.";
    } else if (userInput.includes("uttar pradesh") || userInput.includes("up")) {
        botMessage = "Uttar Pradesh, the heartland of India, is known for the Taj Mahal, Varanasi (a spiritual city), and the Ganges River. The state is rich in cultural and religious heritage with festivals like Holi and Diwali celebrated in grandeur. UP's cuisine includes delicacies like kebabs, biryani, and sweets like Petha.";
    } else if (userInput.includes("rajasthan")) {
        botMessage = "Rajasthan is famous for its royal heritage, forts, and palaces such as Jaipur’s Amber Fort, Jodhpur’s Mehrangarh Fort, and Udaipur's City Palace. Known as the 'Land of Kings,' Rajasthan is also famous for its desert landscapes, folk music, dance forms like Ghoomar, and rich cuisine including Dal Baati Churma.";
    } else if (userInput.includes("kerala")) {
        botMessage = "Kerala, known as 'God's Own Country,' is famous for its backwaters, Ayurvedic practices, and beautiful beaches. The state is rich in traditions, with festivals like Onam and traditional art forms like Kathakali and Mohiniyattam. Kerala is also known for its cuisine, especially dishes like appam, puttu, and Kerala fish curry.";
    } else if (userInput.includes("india") && userInput.includes("known for")) {
        botMessage = "India is known for its rich cultural heritage, diverse traditions, festivals, art, and architecture.";
    } else if (userInput.includes("taj mahal")) {
        botMessage = "The Taj Mahal, a symbol of love, was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Located in Agra, it is one of the Seven Wonders of the World.";
    } else if (userInput.includes("classical dances")) {
        botMessage = "India's classical dance forms include Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam, and Sattriya.";
    } else if (userInput.includes("festivals")) {
        botMessage = "Famous festivals in India include Diwali, Holi, Dussehra, Eid, Christmas, Pongal, Navratri, and Baisakhi.";
    } else if (userInput.includes("oldest language")) {
        botMessage = "Tamil, considered one of the oldest languages in India, has a history dating back over 2,000 years. Sanskrit is also an ancient language of great importance.";
    } else if (userInput.includes("monuments")) {
        botMessage = "India is home to iconic monuments like the Red Fort, Qutub Minar, India Gate, Hawa Mahal, and the Ajanta and Ellora Caves.";
    } else if (userInput.includes("religions")) {
        botMessage = "India is the birthplace of Hinduism, Buddhism, Jainism, and Sikhism. Major religions also include Islam, Christianity, and Zoroastrianism.";
    } else if (userInput.includes("cuisine")) {
        botMessage = "Indian cuisine is diverse, with flavors varying by region. Popular dishes include biryani, dosa, butter chicken, samosas, and sweets like gulab jamun and jalebi.";
    } else if (userInput.includes("yoga")) {
        botMessage = "Yoga is an ancient Indian practice involving physical postures, meditation, and breathing techniques that promote mental, physical, and spiritual well-being.";
    } else if (userInput.includes("namaste")) {
        botMessage = "Namaste is a traditional Indian greeting where one folds their hands in a prayer pose. It means 'I bow to you' and reflects respect and humility.";
    } else if (userInput.includes("rangoli")) {
        botMessage = "Rangoli is an art form made with colored powders or flowers, typically drawn on the ground during festivals. It symbolizes prosperity and good fortune.";
    } else if (userInput.includes("textiles")) {
        botMessage = "India is famous for its textiles like silk, cotton, and wool. Popular varieties include Banarasi silk, Pashmina shawls, and Khadi.";
    } else if (userInput.includes("mahatma gandhi")) {
        botMessage = "Mahatma Gandhi was a leader of the Indian independence movement. He promoted non-violence and truth as a means of resistance and continues to inspire millions worldwide.";
    } else if (userInput.includes("languages")) {
        botMessage = "India has 22 official languages, including Hindi, Bengali, Telugu, Marathi, Tamil, and Urdu. Hundreds of dialects are spoken across the country.";
    } else if (userInput.includes("national anthem")) {
        botMessage = "The Indian National Anthem is 'Jana Gana Mana,' written by Nobel laureate Rabindranath Tagore. It celebrates India's unity in diversity.";
    } else {
        botMessage = "Sorry, I don't have information on that. Ask me about Indian heritage, monuments, festivals, or languages!";
    }

    addBotMessage(botMessage);
}

function addBotMessage(message) {
    let chatBox = document.getElementById("chat-box");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.innerHTML = message;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}
