/*
<nav>
    <ul class="nav-list">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="examples.html">Examples</a></li>
    </ul>
</nav>
*/

function giveList(nav) {
    const ul = document.createElement("ul");
    const links = [
        ["index.html", "HOME"],
        ["examples.html", "Examples"]
    ];
    
    ul.classList.add("nav-list");
    
    links.forEach(function(value, index, array) {
        const liCurrent = document.createElement("li");
        
        liCurrent.classList.add("nav-item");
        
        const a = document.createElement("a");
        const aText = document.createTextNode(value[1]);
        
        a.classList.add("nav-link");
        a.href = value[0];
        
        ul.appendChild(liCurrent);
        liCurrent.appendChild(a);
        a.appendChild(aText);
    });
    
    nav.appendChild(ul);
}

function createNav() {
    const nav = document.createElement("nav");
    const article = document.getElementsByTagName("article");
    giveList(nav);
    
    document.body.insertBefore(nav, document.body.childNodes[0]);
}


