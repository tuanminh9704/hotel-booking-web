import { Button, Col, Layout, Row } from "antd";
import { Link } from "react-router";
import './Home.scss'
import { Content, Footer } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { getHotels } from "../../Service/HotelService";
import ListHotel from "./ListHotel";

function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(()=> {
    const fetchAPI = async  () => {
      const response = await getHotels();
      setHotels(response)
    }

    fetchAPI()
  }, [])

  

  return (
    <>
      <Layout className='layout-home'>
        <header className="layout-home__header">
          <div className="logo">
            <Link to='/'>Hotelbooking.com</Link>
          </div>
          <div className="option">
            <div className="language">
              <img src="https://t-cf.bstatic.com/design-assets/assets/v3.142.0/images-flags/Vn@3x.png" alt="Tiếng Việt"></img>
            </div>
            <Row className="login/logout" gutter={20}>
              <Col span={12}><Button className="login">Đăng nhập</Button></Col>
              <Col span={12}><Button className="logout">Đăng ký</Button></Col>
            </Row>
          </div>
        </header>
        <Content className="layout-home__content">
          <Row gutter={20}>
            <Col span={5}>
              Bộ lọc
            </Col>
            <Col span={19}>
              <ListHotel data={hotels}/>
            </Col>
          </Row>
        </Content>
        <Footer className="layout-home__footer">
          2025 copyright @Nhom5
        </Footer>
      </Layout>
    </>
  )
}

export default Home;