import React from 'react';


export default function FavoritesItem({item}) {
    return (
        <div>

            <div className="list-group people-group">
                <a href="/" className="list-group-item">
                    <div className="media">
                        <div className="pull-left">
                            <img
                                className="img-circle"
                                src={item.avatar}
                                alt="..."
                            />
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{`${item.first_name} ${item.last_name}`}</h4>
                            <small>Software Engineer</small>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    );
}
