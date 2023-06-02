import React from "react"

 const ReadOnlyRow = ({items,handleEditClick,RemoveUserApi}) => {
    return (
        <tr key={items._id}>
          <td>{items.fullname}</td>
          <td>{items.email}</td>
          <td>{items.password}</td>
          <td>
            <button className="btn btn-danger" onClick={event=>handleEditClick(event,items)}>Edit</button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={()=>RemoveUserApi(items._id)}>Remove</button>
          </td>
        </tr>
    )
}

export default ReadOnlyRow;