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

const Employee1 = () => {
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  //to fetch data
  const fetchAll = async () => {
    try {
      const res = await axios.get(
        "http://localhost:6500/api/v1/employee/getAllEmployee"
      );
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
      fetchAll();
    } catch (error) {
      console.log(error);
    }
  };

  //to update employee details
  const handleUpdate = async (record) => {
    try {
      const res = await axios.patch(
        `http://localhost:6500/api/v1/employee/updateEmployee/${record.id}`,
        {
          name: name,
          age: age,
          experience: experience,
          salary: salary,
        }
      );

      console.log(res.data, "response handleUpdate");
      fetchAll();
    } catch (error) {
      console.log(error);
    }
  };

  //to create employee
  const onFinish = async () => {
    try {
      await axios.post("http://localhost:6500/api/v1/employee/addEmployee", {
        name,
        age,
        experience,
        salary,
      });
      setName("");
      setAge("");
      setExperience("");
      setSalary("");
      fetchAll();
    } catch (error) {
      console.log(error);
    }
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
      title: "Age(in years)",
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
          <Button onClick={() => handleUpdate(record)}>Edit</Button>
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
              <Input value={name} onChange={(e) => setName(e.target.value)} />
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
              <Input value={age} onChange={(e) => setAge(e.target.value)} />
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
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
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
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
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
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
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
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
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

export default Employee1;
