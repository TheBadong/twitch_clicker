window.onload = () => {
    console.log('DOM fully loaded and parsed');
    let targetNode = document.querySelector(".community-points-summary")
    console.log(targetNode)
    const config = {attributes: false, childList: true, subtree: true}
    
    const callback = function(mutationsList, observer) {
        console.log('mutation detected')
        // Use traditional 'for loops' for IE 11
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {

                let points_button = document.querySelector('.community-points-summary button.tw-button')

                if(points_button){
                    console.log(points_button)
                    points_button.click()
                    console.log('button clicked')
                }
            }
        }
    };
    
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
    
};