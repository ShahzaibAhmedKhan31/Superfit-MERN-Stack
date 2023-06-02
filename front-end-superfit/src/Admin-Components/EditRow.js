import React from "react"

const EditRow = ({editFormData,handleEditFormChange}) => {
    const inputStyle = {
        padding:0,
        border:"none",
        borderRadius:"0px",
    }
    return (
            <tr>
                <td>
                    <input type="text" required="required" placeholder="Enter name.." name="fullname" style={inputStyle} value={editFormData.fullname} onChange={handleEditFormChange}></input>
                </td>
                <td>
                    <input type="email" required="required" placeholder="Enter email.." name="email" style={inputStyle} value={editFormData.email} onChange={handleEditFormChange}></input>
                </td>
                <td>
                    <input type="password" required="required" placeholder="Enter password.." name="password" style={inputStyle} value={editFormData.password} onChange={handleEditFormChange}></input>
                </td>
                <td>
                    <button type="submit" className="btn btn-danger">Save</button>
                </td>
            </tr>          
    )
}

export default EditRow