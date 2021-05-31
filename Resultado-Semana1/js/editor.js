const $navMenu = document.querySelector('.navmenu');
const $navMenuIconOpen = document.querySelector('.navmenu-icon--open');
const $navMenuIconClose = document.querySelector('.navmenu-icon--close');

const $searchMenu = document.querySelector('.searchmenu');
const $searchMenuIconOpen = document.querySelector('.searchmenu-icon--open');
const $searchMenuIconClose = document.querySelector('.searchmenu-icon--close');

const $codeEditorButton = document.querySelector('.code-editor__button');
const $codeEditorButtonBorder = document.querySelector('.code-editor__button-border');

const $colorChanger = document.querySelector('.personalization__color-changer');
$colorChanger.value = '#9c44dc';
const $codeEditorWindowBorder = document.querySelector('.code-editor__window-border');

const $submitButton = document.querySelector('.submit-button');
const $submitButtonBorder = document.querySelector('.submit-button-border');

const navMenuAppear = () => {

    $navMenu.classList.add('navmenu--appear');
    $navMenuIconOpen.classList.add('menu-icon--disappear');
    $navMenuIconClose.classList.add('menu-icon--appear');

    $searchMenu.classList.remove('searchmenu--appear');
    $searchMenuIconOpen.classList.remove('search-icon--disappear');
    $searchMenuIconClose.classList.remove('search-icon--appear');
};

const navMenuDisappear = () => {

    $navMenu.classList.remove('navmenu--appear');
    $navMenuIconOpen.classList.remove('menu-icon--disappear');
    $navMenuIconClose.classList.remove('menu-icon--appear');
};

const searchMenuAppear = () => {

    $searchMenu.classList.add('searchmenu--appear');
    $searchMenuIconOpen.classList.add('search-icon--disappear');
    $searchMenuIconClose.classList.add('search-icon--appear');

    $navMenu.classList.remove('navmenu--appear');
    $navMenuIconOpen.classList.remove('menu-icon--disappear');
    $navMenuIconClose.classList.remove('menu-icon--appear');
};

const searchMenuDisappear = () => {

    $searchMenu.classList.remove('searchmenu--appear');
    $searchMenuIconOpen.classList.remove('search-icon--disappear');
    $searchMenuIconClose.classList.remove('search-icon--appear');
};

const buttonBorderAppear = () => {

    $codeEditorButtonBorder.style.padding = '6px';
    $codeEditorButtonBorder.style.backgroundColor = '#5081FB36';
};

const buttonBorderDisappear = () => {

    $codeEditorButtonBorder.style.padding = '0';
    $codeEditorButtonBorder.style.backgroundColor = '#5081FB12';
};

const editorBorderChangeColor = () => {

    $codeEditorWindowBorder.style.backgroundColor = $colorChanger.value;
};

const submitButtonHoverOn = () => {

    $submitButtonBorder.style.backgroundColor = '#7BA4FC';
}

const submitButtonHoverOff = () => {

    $submitButtonBorder.style.backgroundColor = '#5081FB';
}

const submitButtonBorderAppear = () => {

    $submitButtonBorder.style.backgroundColor = '#5081FB';
};

const submitButtonBorderDisappear = () => {

    $submitButtonBorder.style.backgroundColor = '#7BA4FC';
};

$navMenuIconOpen.addEventListener('click' , navMenuAppear);

$navMenuIconClose.addEventListener('click' , navMenuDisappear);

$searchMenuIconOpen.addEventListener('click' , searchMenuAppear);

$searchMenuIconClose.addEventListener('click' , searchMenuDisappear);

$codeEditorButton.addEventListener('mousedown' , buttonBorderAppear);

$codeEditorButton.addEventListener('mouseup' , buttonBorderDisappear);
$codeEditorButtonBorder.addEventListener('mouseup' , buttonBorderDisappear);

$colorChanger.addEventListener('input', editorBorderChangeColor);

$submitButton.addEventListener('mouseenter' , submitButtonHoverOn);

$submitButton.addEventListener('mouseleave' , submitButtonHoverOff);

$submitButton.addEventListener('mousedown' , submitButtonBorderAppear);

$submitButton.addEventListener('mouseup' , submitButtonBorderDisappear);

$submitButton.addEventListener('click' , (event) => {

    event.preventDefault();
})