const mainBody = document.getElementsByTagName('body');
console.log(mainBody);
function changeBackgroundColor(event) {
    const backgroundColor = event?.target?.value;
    mainBody[0].style.backgroundColor = backgroundColor;
}