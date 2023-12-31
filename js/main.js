function openMenu()
{
    document.getElementById('container').style.right='0%';
    document.getElementById('menu').style.opacity='1';
}
function closeMenu()
{
    document.getElementById('container').style.right='-100%';
    document.getElementById('menu').style.opacity='0';
}

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

const pre_carremento = document.querySelector("div.pre-carregamento");

function preCarregamento(){
    pre_carremento.style.opacity = "0";

    setTimeout(() => {
        pre_carremento.style.display = "none";
    }, 1500);
}
