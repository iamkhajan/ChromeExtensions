console.log("chrome extension started")

let paragraphs = document.getElementsByTagName('p')

for (elt of paragraphs){
    elt.style['background-color'] = '#FF00FF'
}