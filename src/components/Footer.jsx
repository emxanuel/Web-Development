import React from "react";

function Footer(){
    var date = new Date();
    return <footer>Copyright {date.getFullYear()}</footer>
}

export default Footer