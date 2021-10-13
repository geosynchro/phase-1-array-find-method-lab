function superbowlWin(array) {
    for (let i = 0; i < array.length; i++) {
        if(array.find(element => array[i].result === "W")) {
         return array[i].year;
        }
    } 
}

