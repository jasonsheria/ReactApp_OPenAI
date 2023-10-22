
import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../img/logo.jpg'
import profile from '../../img/profile.jpg'
import Header from '../../Header'
import { AiFillAppstore } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";
import { AiTwotoneBell } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillFilter } from "react-icons/ai";

import Pagination from './pagination'
import Records from './Records'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';


const Index = () => {
    const [name, setName] = useState('')
    const [lastname, setLastame] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    function MyVerticallyCenteredModal(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body style={{ color: 'black' }}>
                    {user ? (

                        <div id="FormContainer">
                            <div class="ImgContainer" style={{ backgroundImage:'url('+user.image+')'}}>


                            </div>


                            <form id="form">
                                <h1 id="FormHeading">Ajouter User</h1>
                                <div class="Name">
                                    <li><label>First Name:</label>
                                        <input type="text" name="name" value={user.name} placeholder="John" />
                                    </li>
                                    <li><label>Last Name:</label>
                                        <input type="text" placeholder="Doe" name='lastName' />
                                    </li>
                                </div>
                                <li>
                                    <label>Email:</label>
                                    <input type="email" name='email' value ={user.email} placeholder="johndoe123@gmail.com" />
                                </li>
                                <div class="Phone">
                                    <li>
                                        <label>Country:</label>
                                        <select>


                                            <option>Afghanistan</option>
                                            <option>Albania</option>
                                            <option>Algeria</option>
                                            <option>Andorra</option>
                                            <option>Angola</option>
                                            <option>Argentina</option>
                                            <option>Armenia</option>
                                            <option>Australia</option>
                                            <option>Austria</option>
                                            <option>Azerbaijan</option>
                                            <option>Croatia</option>
                                        </select>
                                    </li>
                                    <li>
                                        <label> phoneNumber :</label>



                                        <input type="pattern" placeholder="123-456-789" value={user.phoneNumber} name='phoneNumber' />


                                    </li>


                                </div>
                                <div class="password">
                                    <li><label>Password:</label> <input type="password" placeholder='************' /></li>
                                    <li><label>Confirm Password:</label> <input type="password" placeholder='************' /></li>
                                </div>
                                <li class="Subscribe" onClick={handleCreate}>

                                    <button type="submit" onClick={props.onHide}>Enregistrer</button>

                                </li>
                            </form>



                        </div>

                    ) : (
                        <div id="FormContainer">
                            <div class="ImgContainer" style={{ background:'url(https://wallpapercg.com/media/ts_sq/7898.webp)' }}>


                            </div>


                            <form id="form">
                                <h1 id="FormHeading">Ajouter User</h1>
                                <div class="Name">
                                    <li><label>First Name:</label>
                                        <input type="text" name="name" placeholder="John" />
                                    </li>
                                    <li><label>Last Name:</label>
                                        <input type="text" placeholder="Doe" name='lastName' />
                                    </li>
                                </div>
                                <li>
                                    <label>Email:</label>
                                    <input type="email" name='email' placeholder="johndoe123@gmail.com" />
                                </li>
                                <div class="Phone">
                                    <li>
                                        <label>Country:</label>
                                        <select>


                                            <option>Afghanistan</option>
                                            <option>Albania</option>
                                            <option>Algeria</option>
                                            <option>Andorra</option>
                                            <option>Angola</option>
                                            <option>Argentina</option>
                                            <option>Armenia</option>
                                            <option>Australia</option>
                                            <option>Austria</option>
                                            <option>Azerbaijan</option>
                                            <option>Croatia</option>
                                        </select>
                                    </li>
                                    <li>
                                        <label> phoneNumber :</label>



                                        <input type="pattern" placeholder="123-456-789" name='phoneNumber' />


                                    </li>


                                </div>
                                <div class="password">
                                    <li><label>Password:</label> <input type="password" placeholder='************' /></li>
                                    <li><label>Confirm Password:</label> <input type="password" placeholder='************' /></li>
                                </div>
                                <li class="Subscribe" onClick={handleCreate}>

                                    <button type="submit" onClick={props.onHide}>Enregistrer</button>

                                </li>
                            </form>



                        </div>
                    )}

                </Modal.Body >

            </Modal >
        );
    }
    const [loading, setLoading] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState([])
    const [user, setUser] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    const handleCreate = (e) => {
        e.preventDefault();
        let forms = document.querySelector('form')

        let form = new FormData(forms)

        axios.post(`http://localhost:8082/api/jask/create`, {
            name: form.get('name') + ' ' + form.get('lastName'),
            email: form.get('email'),
            phoneNumber: form.get('phoneNumber')
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        )
            .then((res) => {
                const persons = res.data;
                refresh();
                setLoading(false);
            }).
            catch((error) => {
                // console.log(error)
            })
    }
    function refresh() {
        axios.get(`http://localhost:8082/api/jask/home`)
            .then(res => {
                const persons = res.data;
                setData((persons.data))
                setLoading(false);
            })
    }
    useEffect(() => {
        refresh()
    }, [])
    const GetData = (id) => {
        axios.post(`http://localhost:8082/api/jask/find`, { id: id })
            .then((res) => {
                const resp = res.data

                setUser(resp.data);


            })

    }
    return (
        <div>
            <Header />
            <section className="container">
                <div className="container-md cards bg-white p-0 ">
                    <div className="row justify-content-center g-2">
                        <div className="col-2 pt-4">

                            <div className='header'>
                                <div className="t-header">
                                    <img src={logo} className="img-fluid rounded" width={30} height={30} alt="" />
                                    <div className="titre">
                                        Jask Crud
                                    </div>
                                </div>
                                <div className="mt-5">

                                    <button className="btn  mt-3" >
                                        <span><AiFillAppstore /></span>
                                        <p>
                                            dashboard
                                        </p>

                                    </button>
                                    <button className="btn mt-3" >
                                        <span><AiFillUnlock /></span>
                                        <p>
                                            admin
                                        </p>


                                    </button>
                                    <button className="btn mt-3" >
                                        <span><AiTwotoneBell /></span>
                                        <p>
                                            Notifications
                                        </p>


                                    </button>
                                    <button className="btn mt-3" >
                                        <span className="mr-2"><AiOutlineUser /></span>
                                        <p>
                                            login
                                        </p>


                                    </button>

                                </div>



                            </div>



                        </div>
                        <div className="col-10 stable align-items-center">
                            <div className="text-center">
                                <div className="row pt-4  " style={{ borderBottom: '1px solid #8080803d', marginLeft: '-4px', marginRight: '0px' }}>
                                    <div className='col-3 pt-2'>

                                        <h6 style={{ color: 'black' }}>  BIENVENUE DANS TABLE  </h6>
                                        <p style={{ color: 'black', opacity: 0.5, fontSize: "12px" }}> table des opérations </p>
                                    </div>
                                    <div className="col-5">
                                        <div className="search-bar">
                                            <input id=" inputTxt" type="text" placeholder="Search ..." />
                                            <i className="bi bi-search"></i>
                                        </div>
                                        <div className="list-group">
                                        </div>
                                    </div>
                                    <div className='col-4 pt-2'>
                                        <span className="btn-icon"><AiTwotoneBell /></span>
                                        <span className="btn-icon"><AiTwotoneBell /></span>
                                        <span >
                                            <img src={profile} className="btn-icon" style={{ width: '35px', height: "32px", padding: '0px' }} alt="" />
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <div className="shead">
                                        <div className="titre">
                                            Liste Agent
                                        </div>
                                        <div className="sshead">
                                            <a name="" id="" className="btn bg-white shadow" href="#" role="button"> <AiFillFilter /> Filtre</a>
                                            <a name="" id="" className="btn shadow btn-primary" href="#" role="button" onClick={() => { setUser(null); setModalShow(true) }}> <AiOutlinePlus /> Nouveau</a>
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}

                                            />
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <Records data={currentRecords} refresh={refresh} setModalShow={setModalShow} GetData={GetData} />
                                        <Pagination
                                            nPages={nPages}
                                            currentPage={currentPage}
                                            setCurrentPage={setCurrentPage}

                                        />

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </section>
        </div>
    )
}
export default Index;
