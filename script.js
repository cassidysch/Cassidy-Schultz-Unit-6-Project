let submitButton = document.querySelector(".submit");
let suggestButton = document.querySelector(".suggest");
let coolDiv = document.querySelector(".cooldiv");
let count = 0;
let countText = document.querySelector(".counter");

let indie = ["<a href='https://youtu.be/NkdpBWzb2hw'><img class='album' alt='Tally Hall's 'Marvin's Marvelous Mechanical Museum'' src='https://i.imgur.com/sYF7ZuG.jpg'></a>",
    "<a href='https://www.youtube.com/watch?v=sr0zttBcKCw&list=PL7IYk5dPBedupkZG9jiAp_YoPWwO6J0KL'><img class='album' alt='Greer's 'Aeroplane' EP' src='https://res.cloudinary.com/epitaph/image/upload/v1/epitaph/releases/87731_Greer_1YzGgaj.jpg'>",
    "<a href='https://youtu.be/4LeSFBy2bZU'><img class='album' alt='Lemon Demon's 'Spirit Phone' album' src='https://i.imgur.com/SMzu5xr.jpg'></a>"
];

let alternative = ["<a href='https://www.youtube.com/watch?v=JxoDHXRpENo'><img class='album' alt='Glass Beach's 'the first glass beach album' album' src='https://f4.bcbits.com/img/a0854720793_10.jpg'></a>",
    "<a href='https://www.youtube.com/watch?v=yexiRtx1pMo&list=OLAK5uy_m2M0G-RTDx8RQJjxu43ZNNIhZBxqatn6o'><img class='album' alt='Die Sterne's 'In Echt' album' src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/5133a7ZJFFL._UF1000,1000_QL80_.jpg'></a>",
    "<a href='https://www.youtube.com/watch?v=3x9BkUS9dO8&list=PLcZMZxR9uxC8dUreKIZKR7MoRj2i6hOoQ'><img class='album' alt='The Garden's 'haha' album' src='https://res.cloudinary.com/epitaph/image/upload/c_fill,f_auto,h_925,q_auto,w_925/v1/epitaph/releases/0045778743469.png'></a>"
];

let chill = ["<a href='https://youtu.be/TQ5eeJCYt48'><img class='album' alt='Lemon Demon's 'View Monster' album' src='https://i.scdn.co/image/ab67616d0000b273953ce93a8770717f4e067762'></a>",
    "<a href='https://youtu.be/NbtsZJXnzFY'><img class='album' alt='Miracle Musical's 'Hawaii: Part II' album' src='https://assets.fontsinuse.com/static/use-media-items/140/139828/full-1200x1200/60af3937/a3955451029_10.jpeg'></a>",
    "<a href='https://www.youtube.com/watch?v=oolpPmuK2I8&list=PLycVTiaj8OI-kwvNjgvvopMJt__x-y5mD'><img class='album' alt='The Beatles' 'Abbey Road' album' src='https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg'></a>"
];




submitButton.onclick = function() {
    let genreInput = document.querySelector(".genre").value;
    console.log(genreInput);
    if (genreInput === "Alternative") {
        coolDiv.innerHTML = ("");
        for (let album of alternative) {
            coolDiv.insertAdjacentHTML("afterBegin", album);
        }
    } else if (genreInput === "Indie") {
        coolDiv.innerHTML = ("");
        for (let album of indie) {
            coolDiv.insertAdjacentHTML("afterBegin", album);
        }
    } else if (genreInput === "Chill") {
        coolDiv.innerHTML = ("");
        for (let album of chill) {
            coolDiv.insertAdjacentHTML("afterBegin", album);
        }
    }
};

suggestButton.onclick = function() {
    let imgInput = document.querySelector(".suggest-input").value;
    let genreInput = document.querySelector(".suggest-genre").value;
    console.log(imgInput, genreInput);
    coolDiv.innerHTML = ("");
    if (genreInput === "Alternative") {
        if (imgInput !== "") {
            alternative.push("<img class ='album' src='" + imgInput + "'>");
            count++;
        } if (imgInput === "") {
            coolDiv.innerHTML = ("Make sure to paste an image link in the input box!");
        }
    } else if (genreInput === "Indie") {
        if (imgInput !== "") {
            indie.push("<img class ='album' src='" + imgInput + "'>");
            count++;
        } if (imgInput === "") {
            coolDiv.innerHTML = ("Make sure to paste an image link in the input box!");
        }
    } else if (genreInput === "Chill") {
        if (imgInput !== "") {
        chill.push("<img class ='album' src='" + imgInput + "'>");
        count++;
        } if (imgInput === "") {
            coolDiv.innerHTML = ("Make sure to paste an image link in the input box!");
        }
    } else if (genreInput === "Choose a genre") {
        coolDiv.style.marginTop = "3px";
        coolDiv.innerHTML = ("Make sure to select the genre that best applies to your song!");
    }

    /* counter */
    if (count === 1) {
        countText.innerHTML = "You have added " + count + " suggestion.";
    } else if (count > 1) {
        countText.innerHTML = "You have added " + count + " suggestions.";
    }
    countText.style.display = "block";
};