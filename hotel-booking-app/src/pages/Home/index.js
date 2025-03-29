import { Button, Layout } from "antd"
import { Link } from 'react-router-dom'
import './Home.scss'
import video_background from '../../videos/video_background3.mp4';
import {  RightOutlined } from '@ant-design/icons'
import LanguageSelector from "../../components/LanguageSelector";
import HotelSearch from "../../components/Search"
import { BsArrowRight } from "react-icons/bs";

const { Content, Footer } = Layout;

export default function Home() {
  return (
    <>
      <Layout className="layout-welcome">
        <header className="layout-welcome__header">
          <div className="video-background">
            <video autoPlay loop muted playsInline>
              <source src={video_background} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
            <div className="content">
              <div className="login-language">
                <Link to='/login'>Đăng nhập <RightOutlined /> / </Link>
                <LanguageSelector />
              </div>
              <div className="logo">
                <div >HotelBooking.com</div>
              </div>
              <div className="title">
                Tìm chỗ nghỉ tiếp theo
              </div>
              <div className="desciption">Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...</div>
              <Button className="button-discover"><Link to={'/discover'}><span>Khám phá</span><BsArrowRight /></Link></Button>
            </div>
          </div>
          <div className="search" >
            <HotelSearch myStyle={"noborder"} />
          </div>
        </header>
        <Content className="layout-welcome__conten"></Content>
        <Footer className="layout-home__footer">
          2025 copyright @Nhom5
        </Footer>
      </Layout>
    </>
  )
}