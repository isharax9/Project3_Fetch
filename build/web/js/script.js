/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */




async function getRequest() {

    var x = 10;

    var data = {
        name: "Sahan"
    };

    var response = await fetch("X",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            }
    );
    if (response.ok) {
        var json = await response.json();
        console.log(json.country);
        console.log(json.city);
    }else{
        console.log("Response Error");
    }
}
