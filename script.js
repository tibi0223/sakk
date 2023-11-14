palya = document.getElementById('palya')
for (let j = 0; j < 8; j++) {
    sor=document.createElement('div')
    sor.className="sor" 
    for (let i = 0; i < 8; i++) {
        cella=document.createElement('div')
        cella.innerHTML=""
        cella.className="cella"
        if (j%2)
            if(i%2) cella.classList.add("feher")
            else cella.classList.add("fekete")
        else
        if(i%2) cella.classList.add("fekete")
        else cella.classList.add("feher")
        sor.appendChild(cella)
    }
palya.appendChild(sor)
}
palya.children[1].children[1].style.backgroundImage="url('sakk/sakk1.png')"
palya.children[4].children[6].style.backgroundImage="url('sakk/sakk1.png')"
