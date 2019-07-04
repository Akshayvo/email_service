import React from "react";

function Domain(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label> Enter Domain Name </label><br></br>
                        <input type="text" className="form-control" placeholder="Domain name"/>
                    </div>
                    <button >click </button>    
                </div>
            </div>
        </div>
    )
}

export default Domain;