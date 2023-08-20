const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening eveyone");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Inertia");
    speak("Going online")
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Rehan sir";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine Rehan sir tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Hero";
        speech.text = finalText;
    }
    else if(message.includes('say hi to vice principal mam')) {
        const finalText = "good moring mam  tell me how can i help you";
        speech.text = finalText;
    }
 
    else if(message.includes('who made you')) {
        const finalText = "i am made by Rehan sir";
        speech.text = finalText;
    }

     else if(message.includes('say hello to my friends and teachers ')) {
        const finalText = "hello eveyone tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open yadav brand 2')) {
        window.open("https://www.youtube.com/watch?v=gX8LCV0Lkyc", );
        const finalText = "Opening yadav brand 2";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com", );
        const finalText = "Opening youtube";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    

    else if(message.includes('open wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    else if(message.includes('shut down')) {
        window.close('Calculator:')
        const finalText = "shut downj";
        speech.text = finalText;
    }


    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }
      

    speech.volume = 2;
    speech.pitch = 2;
    speech.rate = 2;

    window.speechSynthesis.speak(speech);
}