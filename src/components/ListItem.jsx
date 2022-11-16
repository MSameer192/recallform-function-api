import React, {useEffect} from 'react';
import axios from 'axios';



export default function ListItem({item}) {
    
   
    useEffect(() => {
        
        const postUrl = 'https://reqres.in/api/users'
        axios.post(postUrl, {
            "name": "morpheus",
            "job": "leader"
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    return (
        <div className="list-group contact-group">

            
                        <a href="/" className="list-group-item">
                            <div className="media">
                                <div className="pull-left">
                                    <img
                                        className="img-circle"
                                        src={item.avatar}
                                        alt="avatar-pic"
                                    />
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">
                                        {`${item.first_name} ${item.last_name}`} <small>Software Engineer at Facebook, Inc.</small>
                                    </h4>
                                    <div className="media-content">
                                        <i className="fa fa-map-marker" /> San Francisco,
                                        California, United States
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="fa fa-skype" /> jdoe.doe
                                            </li>
                                            <li>
                                                <i className="fa fa-mobile" /> +63 912 212 2451
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope-o" /> {item.email}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </a>
                    



        </div>
    );
}
