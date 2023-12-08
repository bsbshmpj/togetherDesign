const $menuUpBtn = document.querySelector(".menuUpBtn");
const $menuDownBtn = document.querySelector(".menuDownBtn");

// 메뉴 축소
const clickMenuUpBtn = () => {
    $menuUpBtn.style.display = `none`;
    $menuDownBtn.style.display = `block`;
}

// 메뉴 확장 
const clickMenuDownBtn = () => {
    $menuUpBtn.style.display = `block`;
    $menuDownBtn.style.display = `none`;
}

$menuUpBtn.addEventListener("click", clickMenuUpBtn);
$menuDownBtn.addEventListener("click", clickMenuDownBtn);
