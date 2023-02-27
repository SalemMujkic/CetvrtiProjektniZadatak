let meme=document.getElementById("meme");
let title=document.getElementById("title");
let getMemeBtn=document.getElementById("get-meme-btn");

let url="https://meme-api.com/gimme/";

let subreddits=["catmemes", "wholesomememes", "dogmemes", "me_irl"];

let getMeme=()=>{

    let random=subreddits[Math.floor(Math.random()*subreddits.length)]

    fetch(url+random)
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log(data);
        let memeImg=new Image();
        memeImg.onLoad=()=>{
            meme.src=data.url;
            title.innerHTML=data.title;
        };
        meme.src=data.url;
        title.innerHTML=data.title;

    })
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);


 