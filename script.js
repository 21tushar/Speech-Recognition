const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function(e){
    const acceptedColors = ['red', 'blue', 'pink', 'yellow', 'brown', 'purple', 'black', 'white', 'green', 'orange', 'maroon', 'lime', 'wheat', 'aqua', 'crimson', 'silver', 'navy', 'orchid']

    for(let i = e.resultIndex; i < e.results.length; i++){
        const script = e.results[i][0].transcript.toLowerCase().trim()

        if(acceptedColors.includes(script)){
            document.body.style.backgroundColor = script
            document.querySelector('h1').innerText = script
            document.querySelector('h1').style.color = 'white' 
        }
        else{
            alert('Say A Color Name')
        }
    }
}

rec.start();
