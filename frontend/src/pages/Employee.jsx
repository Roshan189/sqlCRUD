import { Table, Space, Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Employee = () => {
  const [tableData, setTableData] = useState([]);
  const [formData, setformData] = useState({
    name: "",
    age: "",
    experience: "",
    salary: "",
  });

  useEffect(() => {
    fetchAll();
  }, []);

  //to fetch data
  const fetchAll = async () => {
    try {
      const res = await axios.get(
        "http://localhost:6500/api/v1/employee/getAllEmployee"
      );
      // console.log("response", res.data);
      setTableData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //to delete data
  const handleDelete = async (record) => {
    try {
      await axios.delete(
        `http://localhost:6500/api/v1/employee/deleteEmployee/${record.id}`
      );
      // console.log(res, "response delete");
      fetchAll();
    } catch (error) {
      console.log();
    }
  };

  // console.log("formData1", formData);

  //to update employee details
  const handleUpdate = async (record) => {
    console.log("record", record);

    const oneFetch = await axios.get(
      `http://localhost:6500/api/v1/employee/getOneEmployee/${record.id}`
    );
    setformData(oneFetch.data);
    // console.log("oneFetch", oneFetch.data);
    // console.log("formData2", formData);

    try {
      const res = await axios.patch(
        `http://localhost:6500/api/v1/employee/updateEmployee/${record.id}`,
        oneFetch.data
      );
      // console.log("formdata", formData);

      console.log("formdataaaaa", formData);
      console.log("response", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //to create employee
  const onFinish = async () => {
    // console.log(values);
    // console.log(formData);
    try {
      await axios.post(
        "http://localhost:6500/api/v1/employee/addEmployee",
        formData
      );
      // console.log(res.data);
      // console.log(formData, "formData");
      setformData({
        name: "",
        age: "",
        experience: "",
        salary: "",
      });

      fetchAll();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Employee Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age(in years",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Salary(in lakhs)",
      dataIndex: "salary",
      key: "salary",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleUpdate(record)}>Edits</Button>
          <Button onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
      ),
    },
  ];


  return (
    <div>
      <>
        <h2>Employee Data</h2>
        <Table columns={columns} dataSource={tableData} />
        {/* <Button type="primary">Add Employee</Button> */}
        <Space>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Please input your age!",
                },
              ]}
            >
              <Input
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Experience"
              name="experience"
              rules={[
                {
                  required: true,
                  message: "Please input your experience!",
                },
              ]}
            >
              <Input
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Salary"
              name="salary"
              rules={[
                {
                  required: true,
                  message: "Please input your salary!",
                },
              ]}
            >
              <Input
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>

        {/* edit user */}
        {console.log(formData, "Roshan")}
        <Space>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={handleUpdate}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                type="text"
                name="name"
                // defaultValue={formData.name || "tt"}
                value={"rrrr"}
                // onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Please input your age!",
                },
              ]}
            >
              <Input
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Experience"
              name="experience"
              rules={[
                {
                  required: true,
                  message: "Please input your experience!",
                },
              ]}
            >
              <Input
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              label="Salary"
              name="salary"
              rules={[
                {
                  required: true,
                  message: "Please input your salary!",
                },
              ]}
            >
              <Input
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </>
    </div>
  );
};

export default Employee;
