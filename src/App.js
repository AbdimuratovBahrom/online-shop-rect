import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import "./App.css";
// import About from './pages/about';
// import Main from './pages/main';
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Select } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const items1 = [
  { label: "Main", path: "/" },
  { label: "About", path: "/about" },
  { label: "Favourites", path: "/favourites" },
].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          ></Breadcrumb>
          <div className="InputBox">
          
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Category"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Phone",
              },
              {
                value: "2",
                label: "Laptop",
              },
              {
                value: "3",
                label: "TV",
              },
              {
                value: "4",
                label: "Appliances",
              },
              {
                value: "5",
                label: "Sport",
              },
              {
                value: "6",
                label: "Photo and  audio",
              },
            ]}
          />
          <input className="inputBefore" placeholder=" Цена от "  />
          <input className="inputAfter" placeholder="до" />
          </div>
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <RouterProvider router={router}></RouterProvider>
            {/* <About></About> */}
            {/* <Main></Main> */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
}
export default App;
