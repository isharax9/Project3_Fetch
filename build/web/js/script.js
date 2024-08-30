/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function getRequest() {
    
    var data = {
      name:"Sahan"  
    };
    
    fetch("X",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            }
    )
            .then(
                    response => {
                        if (response.ok) {
                            return response.text();
                        } else {
                            throw new Error("Response Error");
                        }
                    }
            )
            .then(
                    text => {
                        console.log(text);
                    }
            )
            .catch(
                    error => {
                        console.log(error);
                    }
            );
}