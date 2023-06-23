/*
<nav>
    <ul class="nav-list">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="examples.html">Examples</a></li>
    </ul>
</nav>
*/

function addList(ul, text, link) {
    const liCurrent = document.createElement("li");
        
    liCurrent.classList.add("nav-item");

    const a = document.createElement("a");
    const aText = document.createTextNode(text);

    a.classList.add("nav-link");
    a.href = link;

    ul.appendChild(liCurrent);
    liCurrent.appendChild(a);
    a.appendChild(aText);
}

function giveList(nav) {
    const ul = document.createElement("ul");
    const links = [
        ["index.html", "HOME"],
        ["examples.html", "Examples"]
    ];
    
    ul.classList.add("nav-list");
    
    links.forEach(function(value, index, array) {
        addList(ul, value[1], value[0]);
    });
    
    nav.appendChild(ul);
}

function createNav() {
    const nav = document.createElement("nav");
    const article = document.getElementsByTagName("article");
    giveList(nav);
    
    document.body.insertBefore(nav, document.body.childNodes[0]);
}


