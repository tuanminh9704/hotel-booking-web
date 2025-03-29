import { useState } from "react";
import { Input, Button, DatePicker, Select } from "antd";
import { SearchOutlined, CalendarOutlined, UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "./HotelSearch.scss";

export default function HotelSearch(props) {
  const { myStyle } = props;

  const [location, setLocation] = useState("Hà Nội");
  const [dates, setDates] = useState([dayjs(), dayjs().add(1, "day")]);
  const [guests, setGuests] = useState("2 người lớn · 0 trẻ em · 1 phòng");

  const handleSearch = () => {
    console.log({
        location,
        checkIn: dates[0]?.format("DD-MM-YYYY"),
        checkOut: dates[1]?.format("DD-MM-YYYY"),
        guests,
      });
  };

  return (
    <div className={"hotel-search-bar " + myStyle }>
      <div className="search-item">
        <SearchOutlined className="icon" />
        <Input
          placeholder="Nhập địa điểm"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-field"
          variant="borderless"
        />
      </div>
      <div className="search-item">
        <CalendarOutlined className="icon" />
        <DatePicker.RangePicker
          value={dates}
          onChange={(dates) => setDates(dates)}
          className="date-picker"
          variant="borderless"
        />
      </div>
      <div className="search-item">
        <UserOutlined className="icon" />
        <Select
          value={guests}
          onChange={setGuests}
          className="select-field"
          variant="borderless"
        >
          <Select.Option value="2 người lớn · 0 trẻ em · 1 phòng">2 người lớn · 0 trẻ em · 1 phòng</Select.Option>
          <Select.Option value="2 người lớn · 1 trẻ em · 1 phòng">2 người lớn · 1 trẻ em · 1 phòng</Select.Option>
          <Select.Option value="3 người lớn · 1 trẻ em · 2 phòng">3 người lớn · 1 trẻ em · 2 phòng</Select.Option>
        </Select>
      </div>
      <Button type="primary" className="search-button" onClick={handleSearch}>Tìm</Button>
    </div>
  );
}