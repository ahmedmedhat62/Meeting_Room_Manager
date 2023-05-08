exports.makeDropDown = function(divDropDown) {
    const dropBtn = divDropDown.children[0];
    const divDropDownContent = divDropDown.children[1];
    const ulDropDown = divDropDownContent.children[0];

    dropBtn.style.width = '100px';
    dropBtn.style.height = '35px';
    dropBtn.style.background = 'none';
    dropBtn.style.color = 'inherit';
    dropBtn.style.border = '2px solid black';
    divDropDown.style.width = '100px';
    ulDropDown.style.listStyleType = 'none';
    ulDropDown.style.margin = '0';
    ulDropDown.style.padding = '0';
    ulDropDown.style.textAlign = 'center';
    divDropDownContent.style.display = 'none';
    dropBtn.addEventListener('mouseenter', (e) => {
        divDropDownContent.style.display = 'block';
    });
    dropBtn.addEventListener('mouseleave', (e) => {
        divDropDownContent.style.display = 'none';
    });
    divDropDownContent.addEventListener('mouseenter', (e) => {
        divDropDownContent.style.display = 'block';
    });
    divDropDownContent.addEventListener('mouseleave', (e) => {
        divDropDownContent.style.display = 'none';
    });
}