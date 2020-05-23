window.onload = () => {
    console.log("Twtich Clicker active !")
    let targetNode = document.querySelector(".community-points-summary")
    const config = {attributes: false, childList: true, subtree: true}
    
    // Check for already present button
    if(document.querySelector(".community-points-summary button.tw-button")){
        document.querySelector(".community-points-summary button.tw-button").click()
    }

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
    
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {

                let points_button = document.querySelector('.community-points-summary button.tw-button')

                if(points_button){
                    console.log(points_button)
                    points_button.click()
                }
            }
        }
    };

};