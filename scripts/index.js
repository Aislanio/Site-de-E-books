let tipoUsuario = 1;
const img = document.querySelector("#image_padrao");

setInterval(() => {
    switch (tipoUsuario) {
    case 1:
        img.src = "img/exemplos/index/undraw_Bibliophile_hwqc.svg";
        tipoUsuario++
        break;
    case 2:
        img.src = "img/exemplos/index/undraw_book_reading_kx9s.svg";
        tipoUsuario++
        break;
    case 3:
        img.src = "img/exemplos/index/undraw_javaScript_frameworks_8qpc.svg";
        tipoUsuario++
        break;
    case 4:
        img.src = "img/exemplos/index/undraw_mathematics_4otb.svg";
        tipoUsuario++
        break;
    case 5:
        img.src = "img/exemplos/index/undraw_Notebook_tlkl.svg";
        tipoUsuario++
        break;
    case 6:
        img.src = "img/exemplos/index/undraw_book_lover_mkck.svg";
        tipoUsuario = 1;
        break;
}
}, 3000);
