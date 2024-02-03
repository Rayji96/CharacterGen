async function sendRequest(message, key) {

    let data = {
        model: "gpt-4",
        messages: [
            {
              role: "system",
              content: "You are an assistant designed to add specific details to a randomly generated fantasy DnD backstory provided by the user. The backstory should have specific details so that it doesn't seem randomly generated. Keep the details within 1024 words."
            },
            {
              role: "user",
              content: message
            }
        ]
    }

    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + key,
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.choices[0].message.content)
            document.getElementById('loader').style.visibility = 'hidden';
            document.getElementById('generate-button').style.visibility = 'visible';
            document.getElementById('key').style.visibility = 'visible';
            document.getElementById('generated').innerHTML = data.choices[0].message.content.replaceAll("\n","</br>");
        })
        .catch((error) => {
            console.log(error);
            document.getElementById('loader').style.visibility = 'hidden';
            document.getElementById('generate-button').style.visibility = 'visible';
            document.getElementById('key').style.visibility = 'visible';
            document.getElementById('generated').innerHTML = error;
        });
}

function generate () {
    let key = document.getElementById('key').value
    sendRequest(totalBackstory, key)
    document.getElementById('generate-button').style.visibility = 'hidden';
    document.getElementById('key').style.visibility = 'hidden';
    document.getElementById('loader').style.visibility = 'visible';
    document.getElementById('generated').innerHTML = ""
}

