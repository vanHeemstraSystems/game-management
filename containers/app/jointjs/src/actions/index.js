export function addComponent(text, position) {
    debugger
    console.log("addComponent action called with nodeName: ", text, " and position: ", position); // FOR TESTING ONLY
    return {
        type : "ADD_COMPONENT",
        nodeName : text,
        position: position
    }
}
