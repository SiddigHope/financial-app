import React, { Component } from "react";
import DataGridView from "../shared/DataGridView";
import NewBank from "./NewBank";
import NewUser from "./NewUser";
// import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
// import { banks } from "../../data";
import { deleteBank, getAllBanks } from "../shared/functions/banks";
import { withSnackbar } from "notistack";

class Banks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: true,
      toggleUserModal: false,
      rows: [],
      type: "",
      item: [],
      columns: [],
      bank_id: 0,
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     rows: banks,
  //   });
  // }

  componentDidMount() {
    const columns = [
      {
        headerAlign: "center",
        field: "id",
        headerName: "#",
        width: 150,
        align: "center",
      },
      {
        headerAlign: "center",
        field: "name",
        headerName: "اسم البنك",
        width: 200,
        align: "center",
      },
      {
        headerAlign: "center",
        field: "address",
        headerName: "عنوان البنك",
        width: 200,
        align: "center",
      },
      {
        headerAlign: "center",
        field: "logo",
        headerName: "شعار البنك",
        width: 200,
        editable: true,
        align: "center",
        renderCell: (params) => (
          <img
            src={params.value}
            className="shadow"
            style={{ width: 60, height: 60, borderRadius: 30 }}
            alt="bank logo"
          />
        ),
      },
      {
        headerAlign: "center",
        field: "manage",
        headerName: "ادارة",
        width: 200,
        align: "center",
        renderCell: (params, index) => (
          <div>
            <button
              onClick={() => this.toggleModal(true, "update", params.row)}
              className="btn btn-sm btn-gradient-info"
            >
              {" "}
              {"تعديل"}{" "}
            </button>
            <button
              onClick={() => this.toggleUserModal(true, params.row.id)}
              className="btn btn-sm btn-gradient-primary"
            >
              <i className="mdi mdi-account-plus"></i>
            </button>
            <button
              onClick={() => this.deleteBank(params.row)}
              className="btn btn-sm btn-gradient-danger"
            >
              {" "}
              {"حذف"}{" "}
            </button>
          </div>
        ),
      },
    ];
    this.setState({
      columns,
    });
    this.getData();
  }

  getData = async () => {
    this.setState({
      rows: await getAllBanks(),
    });
  };

  toggleModal = (modalStatus, type, item) => {
    console.log(item);
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
    // console.log(modalStatus)
  };

  toggleUserModal = (modalStatus, id) => {
    this.setState({
      toggleUserModal: modalStatus,
      bank_id: id,
    });
  };

  deleteBank = (item) => {
    const deleted = deleteBank(item.id);
    if (deleted) {
      this.setState({
        rows: this.state.rows.filter((row) => item.id != row.id),
      });
      this.props.enqueueSnackbar("تمت عملية الحذف", { variant: "success" });
    } else {
      this.props.enqueueSnackbar("لم تتم عملية الحذف", { variant: "error" });
    }
  };

  render() {
    const newButton = (
      <button
        onClick={() => this.toggleModal(true, "add")}
        className="btn btn-sm btn-gradient-success text-white"
        // style={{ zIndex: 11111 }}
      >
        <i className="mdi mdi-plus"></i>
      </button>
    );
    return (
      <div>
        <NewBank
          toggleModal={this.toggleModal}
          modalStatus={this.state.toggleModal}
          updateData={this.getData}
          type={this.state.type}
          item={this.state.item}
        />
        <NewUser
          toggleUserModal={this.toggleUserModal}
          modalStatus={this.state.toggleUserModal}
          id={this.state.bank_id}
        />
        {/* {JSON.stringify(UserClass.getUser())} */}
        <DataGridView
          title={"البنوك"}
          page={"banks"}
          button={newButton}
          columns={this.state.columns}
          rows={this.state.rows}
        />
      </div>
    );
  }
}

export default withSnackbar(Banks);
