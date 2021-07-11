const slide = document.querySelector(".slider-bar")
const objSlide = [{
        "heading": "chicago",
        "img": "chicago.jpg",
        "title": "Thank you, Chicago - A night we won't forget."
    },
    {
        "heading": "los angeles",
        "img": "la.jpg",
        "title": "We had the best time playing at Venice Beach!"
    },
    {
        "heading": "new york",
        "img": "ny.jpg",
        "title": "The atmosphere in New York is lorem ipsum."

    }
]

function slideBar() {
    const head = slide.querySelector("h3").textContent.toLowerCase();
    for (var x in objSlide) {
        if (objSlide[x].heading === head) {
            return (1 + parseInt(x) == objSlide.length) ? 0 : 1 + parseInt(x)
        }
    }
}

function test() {
    setInterval(() => {
        var index = slideBar();
        var str = `<img src="./img/${objSlide[index].img}" alt="" style="width:100%">
    <div class="slider-heading">
        <h3 class="">${objSlide[index].heading}</h3>
        <span>${objSlide[index].title}</span>
    </div>`

        slide.innerHTML = str;
    }, 4000)
}
test()