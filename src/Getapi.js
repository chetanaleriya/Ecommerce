import { useState } from "react";
import Table from 'react-bootstrap/Table'


function Getapi()//this is use in Api
{
    const [dataapi, setApiData] = useState([])
    fetch("http://localhost:5000/").then((result) => {
        result.json().then((data) => {
            setApiData(data)
            console.log(data)
        })
    })
    return (
        <div>
            <Table stripted bordered hover variant="primary">
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>confirm password</th>



                    </tr>
                    {
                        dataapi.map((item, i) =>
                            <tr key={i}>
                                <td>{item._id}</td>
                                <td>{item.name1}</td>
                                <td>{item.email1}</td>
                                <td>{item.password1}</td>
                                <td>{item.cpassword1}</td>



                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Getapi