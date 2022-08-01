const imagens = document.querySelector("#img");
const img = document.querySelectorAll(".car_cert");

let cont = 0;

function carousel()
{
    cont++

    if (cont>img.length -1)
    {
        cont = 0;
    }

    imagens.style.transform = `translateX(${-cont *690}px)`;
}

setInterval(carousel,5000);
