const root = document.querySelector(':root')
ColorMe()
function ColorMe(){
    let cores = ['red','blue','green','purple','yellow','white','orange']
    let randNumOne = (Math.floor(Math.random() * cores.length))
    let randNumTwo = (Math.floor(Math.random() * cores.length))
    console.log(`numero1:${randNumOne}, numero2:${randNumTwo}`);
    root.style.setProperty('--colorOne',cores[randNumOne])
    root.style.setProperty('--colorTwo',cores[randNumTwo])
}
