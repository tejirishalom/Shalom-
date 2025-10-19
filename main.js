const content = document.getElementById("projects")

const show = document.getElementById("show-more")

show.onclick = function (){
    if (content.className == "open"){
        content.className = "";
        show.innerHTML= "Show More";
    }else {
        content.className = "open";
        show.innerHTML = "Show Less"
    }
};


const about = document.getElementById("about")

const click = document.getElementById("show")

click.onclick = function (){
    if (content.className == "new"){
        content.className = "";
        click.innerHTML= "Show More";
    }else {
        content.className = "new";
        click.innerHTML = "Show Less"
    }
};