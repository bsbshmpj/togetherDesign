const $menuUpBtn = document.querySelector(".menuUpBtn");
const $menuDownBtn = document.querySelector(".menuDownBtn");

const $menuChangeWrap = document.querySelector(".menuChangeWrap");
const $menuTextWrap = document.querySelector(".menuTextWrap");
const $menuTogetherBtn = document.querySelector(".menuTextWrap > .togetherBtn");
const $menuProtectBtn = document.querySelector(".menuTextWrap > .protectBtn");
const $menuRaiseBtn = document.querySelector(".menuTextWrap > .raiseBtn");

const $togetherText = document.querySelector(".menuChangeWrap > .togetherBtn");
const $protectText = document.querySelector(".menuChangeWrap > .protectBtn");
const $raiseText = document.querySelector(".menuChangeWrap > .raiseBtn");

// 메뉴 축소
const menuUp = () => {
    $menuUpBtn.style.display = `none`;
    $menuDownBtn.style.display = `block`;

    $menuTextWrap.style.transition = `height 0.3s ease-out`;
    $menuTextWrap.style.height = `0px`;

    $menuChangeWrap.style.background = `rgb(242, 242, 242)`;

    $menuChangeWrap.style.transition = `all 0.5s ease-in`;
    $menuChangeWrap.style.borderRadius = `13px`;
};

// 메뉴 확장
const clickMenuDownBtn = () => {
    $menuUpBtn.style.display = `block`;
    $menuDownBtn.style.display = `none`;

    $menuTextWrap.style.transition = `height 0.3s ease-out`;
    $menuTextWrap.style.height = `140px`;

    $menuChangeWrap.style.background = `rgb(239, 239, 239)`;
    $menuChangeWrap.style.transition = `all 0s ease-in`;
    $menuChangeWrap.style.borderRadius = `13px 13px 0 0`;
};

// 아 코드 너무 더럽다...

const clickTogetherBtn = () => {
    $togetherText.style.display = `block`;
    $protectText.style.display = `none`;
    $raiseText.style.display = `none`;

    $menuTogetherBtn.style.color = `rgb(141, 141, 141)`;
    $menuProtectBtn.style.color = `rgb(228, 114, 133)`;
    $menuRaiseBtn.style.color = `rgb(245, 171, 60)`;
};
const clickProtectBtn = () => {
    $togetherText.style.display = `none`;
    $protectText.style.display = `block`;
    $raiseText.style.display = `none`;

    $menuTogetherBtn.style.color = `#39c35e`;
    $menuProtectBtn.style.color = `rgb(141, 141, 141)`;
    $menuRaiseBtn.style.color = `rgb(245, 171, 60)`;
};
const clickRaiseBtn = () => {
    $togetherText.style.display = `none`;
    $protectText.style.display = `none`;
    $raiseText.style.display = `block`;

    $menuTogetherBtn.style.color = `#39c35e`;
    $menuProtectBtn.style.color = `rgb(228, 114, 133)`;
    $menuRaiseBtn.style.color = `rgb(141, 141, 141)`;
};

$menuUpBtn.addEventListener("click", menuUp);
$menuDownBtn.addEventListener("click", clickMenuDownBtn);

$menuTextWrap.addEventListener("click", menuUp);

$menuTogetherBtn.addEventListener("click", clickTogetherBtn);
$menuProtectBtn.addEventListener("click", clickProtectBtn);
$menuRaiseBtn.addEventListener("click", clickRaiseBtn);
