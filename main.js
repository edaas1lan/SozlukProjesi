const wordInput=document.getElementById('word');
const button= document.querySelector('button');
const translatedDiv=document.getElementById('translatedDiv');
const title=document.getElementById('title');
const meaning=document.getElementById('meaning');
const audio=document.getElementById('audio');
const mainPopup=document.querySelector('.main-popup');
const close=document.querySelector('.popup-close');


async function fetchApi(){

    translatedDiv.style.display='none';
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`
    const result= await fetch(url).then((res)=>res.json());
    console.log(result);
    if(result.title){
        mainPopup.style.display='block';
        wordInput.value = '';
    }
    else{
        mainPopup.style.display='none';
        translatedDiv.style.display='block';
        title.textContent=result[0].word;
        meaning.textContent=result[0].meanings[0].definitions[0].definition;
        audio.src=result[0].phonetics[0].audio;
        wordInput.value = '';
    }
}

button.addEventListener('click',fetchApi)

close.addEventListener('click',()=>{//basıldıgında mesaj kutusu kapansın
    mainPopup.style.display='none';
})
mainPopup.addEventListener('click',e=>{//herhangi bir yere basıldıgında da kapansın

    console.log(e.target);
    if(e.target.className ==='main-popup')
    {
        mainPopup.style.display='none';
    }
})
