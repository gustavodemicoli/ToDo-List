const createAndAppend = function (elementType, elementContent, parentElement ) {
    const newElement = document.createElement(elementType)
    newElement.textContent = elementContent;
    parentElement.appendChild(newElement);

    return newElement
}

export const addProject = function(project) {

    const div = document.querySelector('.header');

}
