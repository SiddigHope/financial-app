import React, { Component } from "react";
// import { currencies } from "../../data";
import NewUser from "./NewUser";
import { deleteUser, getAllUsers } from "../shared/functions/users/central";
import { withSnackbar } from 'notistack';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      rows: [],
      type: "",
      item: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    console.log(await getAllUsers());
    this.setState({
      rows: await getAllUsers(),
    });
  };

  toggleModal = (modalStatus, type, item) => {
    this.setState({
      toggleModal: modalStatus,
    });
    if (type) {
      this.setState({
        type,
      });
    }
    if (item) {
      this.setState({
        item,
      });
    } else {
      this.setState({
        item: [],
      });
    }
  };

  deleteItem = (item) => {
    const deleted = deleteUser(item.id);
    if (deleted) {
      this.setState({
        rows: this.state.rows.filter((row) => item.id != row.id),
      });
      this.props.enqueueSnackbar("تم حذف المستخدم بنجاح", {variant: "success"})
      return
    }
    this.props.enqueueSnackbar("اعد مرة اخرى لم تتم العملية", {variant: "error"})
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title float-right">{" مستخدمين النظام "}</h4>
              <button
                onClick={() => this.toggleModal(true, "add")}
                className="btn btn-sm btn-gradient-primary text-white mr-2 float-left"
              >
                <i className="mdi mdi-plus"></i>
              </button>
              <NewUser
                toggleModal={this.toggleModal}
                updateData={this.getData}
                item={this.state.item}
                type={this.state.type}
                modalStatus={this.state.toggleModal}
              />
              <div className="table-responsive">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th> {"#"} </th>
                      <th> {"الاسم"} </th>
                      <th> {"الايميل"} </th>
                      <th> {"ادارة"} </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rows.map((item, index) => (
                      <tr key={index}>
                        <td> {item.id} </td>
                        <td> {item.name} </td>
                        <td> {item.email} </td>
                        <td>
                          <button
                            onClick={() => this.deleteItem(item)}
                            className="btn btn-sm btn-gradient-danger"
                          >
                            {" "}
                            {"حذف"}{" "}
                          </button>
                          <button
                            onClick={() =>
                              this.toggleModal(true, "update", item)
                            }
                            className="btn btn-sm btn-gradient-info"
                          >
                            {" "}
                            {"تعديل"}{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(Users)