window.onload = () => {
    window.setInterval(getPoints, 5000)
    function getPoints(){
        if(document.querySelector(".community-points-summary button.tw-button")){
            document.querySelector(".community-points-summary button.tw-button").click()
        }
    }
};