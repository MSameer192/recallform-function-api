


export default function CreateUser() {




    return (
        <div>
            <div className="modal-dialog">
                <div className="modal-content animated fadeOutRight">
                    <div className="modal-body">
                        <div className="row modal-close">
                            <div className="col-md-12 padding-bottom-8 padding-top-8 bg-silver">
                                <h4 className="pull-left">
                                    <b>Create New User</b>
                                </h4>
                                <ul className="list-unstyled list-inline text-right">
                                    <li className="close-right-modal">
                                        <span
                                            className="fa fa-times fa-2x"
                                            data-dismiss="modal"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>





                        <div className="row">
                            <div className="col-md-12">
                                <div className="contact-add-content">
                                    <form className="form-horizontal tabular-form margin-top-10" method='post'>
                                        <div className="form-group">
                                            <label
                                                htmlFor="name"
                                                className="col-sm-2 control-label"
                                            >
                                                Name
                                            </label>
                                            <div className="col-sm-10 tabular-border">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Full Name"
                                                    name='name'
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label
                                                htmlFor="email"
                                                className="col-sm-2 control-label"
                                            >
                                                Job
                                            </label>
                                            <div className="col-sm-10 tabular-border">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    name='job'
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label
                                                htmlFor="phone"
                                                className="col-sm-2 control-label"
                                            >
                                                Phone
                                            </label>
                                            <div className="col-sm-10 tabular-border">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Phone"
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="form-group">
                                            <label
                                                htmlFor="address"
                                                className="col-sm-2 control-label"
                                            >
                                                Address
                                            </label>
                                            <div className="col-sm-10 tabular-border">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="address"
                                                    placeholder="Address"
                                                />
                                            </div>
                                        </div> */}
                                        <div className="form-actions">
                                            <button
                                                type="button"
                                                className="btn btn-silver btn-flat"
                                                data-dismiss="modal"
                                            >
                                                Cancel
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-green btn-flat"
                                                data-dismiss="modal"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
