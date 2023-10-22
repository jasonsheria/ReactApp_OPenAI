import React, { useState } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import dateFormat, { masks } from "dateformat";
import profile from '../../img/profile.jpg'
import axios from 'axios';

const Records = ({ data, refresh, setModalShow, GetData }) => {

    const [showNotification, setShowNotification] = useState(false)
    const [message, setMessage] = useState('')
    const [file, setFile] = useState(null);
    const handleDelete = (id) => {
        alert('voulez vous supprimer?');
        console.log(id);
        axios.post(`http://localhost:8082/api/jask/delete`, { id: id })
            .then((res) => {
                const resp = res.data
                setMessage(resp.message)
                displayNotification()
                refresh();

            })
    }
    const displayNotification = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    }
    const UpdatePicture = (event, id) => {

        var id = id;
        const file = event.target.files[0]
        const formData = new FormData();
        formData.append("file", file)
        formData.append("id", id)

        axios.post(`http://localhost:8082/api/jask/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",

            }
        })
            .then((res) => {
                const resp = res.data
                refresh()
                setMessage(" image changer avec success ")
                displayNotification()


            })


    }
    
    return (
        <>
            <table className="table table-striped
table-hover	
table-borderless

align-middle">
                <thead className="" style={{ fontWeight: 'normal' }}>

                    <tr >
                        <th></th>
                        <th> Image </th>
                        <th> Nom & Post-Nom</th>
                        <th>Telephone </th>
                        <th> Date </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody className="">
                    {data.map((item) => (
                        <tr>
                            <td scope="row">

                                <input id="id_yes" type="checkbox" value="yes" name="validation" />

                            </td>
                            <td>
                                <img src={item.image ? item.image : profile} className="img-fluid rounded-top" style={{ width: '50px', height: '50px' }} alt="" />
                            </td>
                            <td style={{ textTransform: 'capitalize' }}>

                                <input id="Image" type="file" value={file} name="image" onChange={(event) =>
                                    UpdatePicture(event, item.id)
                                } style={{
                                    position: 'relative',
                                    marginLeft: '-69%',
                                    opacity: '0',
                                    width: '187px',
                                    overflow: 'hidden',
                                    height: '28px',
                                    paddingTop: '14px',
                                    paddingBottom: '40px'
                                }} />

                                {item.name}
                            </td>
                            <td>
                                {item.phoneNumber}
                            </td>
                            <td>
                                {dateFormat(item.createdAt, "dddd, mmmm dS, yyyy")}
                            </td>
                            <td className="action" style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-around' }}>
                                <a type="button" name="" id="" className="" onClick={() => handleDelete(item.id)} ><BsFillTrashFill style={{ color: 'red' }} /></a>
                                <a type="button" name="" id="" className="" onClick={() =>{ setModalShow(true); GetData(item.id) }}><AiFillEdit /></a>
                            </td>

                        </tr>
                    ))}


                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <div className={`notification ${showNotification ? "active" : ""}`}>
                {message}
            </div>
        </>
    )
}

export default Records  