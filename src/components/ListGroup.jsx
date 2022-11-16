import ListItem from './ListItem';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FavoritesItem from './FavoritesItem';
import CreateUser from './CreateUser';

export default function ListGroup() {

    const [user, setUser] = useState([]);

    useEffect(() => {

        const URL = 'https://reqres.in/api/users?page=2'
        axios
            .get(URL)
            .then(Response => {
                setUser(Response.data.data)
            })
            .catch(error => { console.log(error); })

    }, []);


    return (
        <div className="container">
            <div className="col-md-12">
                <div className="page-people-directory">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className="page-title">
                                <b>USERS</b>
                            </h5>
                            <ul className="nav nav-pills nav-stacked nav-User">
                                <li className="active">
                                    <a href="/">
                                        All User
                                        <span className="badge pull-right">128+</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        My User
                                        <span className="badge pull-right">87</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Skype User
                                        <span className="badge pull-right">10</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Google User <span className="badge pull-right">65</span>
                                    </a>
                                </li>
                            </ul>
                            <br />
                            <h5>
                                <b>My Favorites</b>
                            </h5>

                            {
                                user.map(item => {
                                    return (
                                        <FavoritesItem item={item}/>
                                    )
                                })

                            }

                        </div>

                        <div className="col-md-9">
       
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>All Users</h3>
                                </div>
                                <div className="col-md-6">
                                    <button
                                        type="button"
                                        className="btn btn-green btn-raised btn-add-new-contact"
                                    >
                                        <span
                                            className="icon-plus"
                                            data-toggle="modal"
                                            data-target="#modal-pull-right-add"
                                            style={{border: '2px solid black', padding:'10px'}}
                                        >
                                            {" "}
                                            Add New User
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {
                                user.map(item => {
                                    return (
                                        <ListItem item={item} />
                                    )
                                })

                            }






                        </div>
                    </div>
                    <div
                        className="modal modal-pull-right"
                        data-easein="fadeInRight"
                        data-easeout="fadeOutRight"
                        id="modal-pull-right-add"
                        tabIndex={-1}
                        role="dialog"
                        aria-hidden="true"
                        style={{ display: "none" }}
                    >


                        <CreateUser />        

                    </div>
                </div>
            </div>
        </div>

    );
}
