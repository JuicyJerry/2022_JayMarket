import React, { useEffect } from "react";
import { List } from "antd";
import PropTypes from "prop-types";

import { Avatar, Card } from "antd";

const { Meta } = Card;

const ItemList = (({ header, data }) => {

  // useEffect(() => {
  //   console.log("ItemList", header, data, data.flat());
  // }, [])

  return (
    console.log(header, " + ", data[0], data[1], data[2]),
    <div
    >
      <Card title={"검색한 결과에 대한 내용"}
        style={{
          backgroundColor: "#f3d2ff", height: "30rem", "width": "100%"
        }}
      >
        <Card type="inner" title={"상품명"} extra={<a href="#">More</a>}>
          {data[0].name}
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title={"가격"}
          extra={<a href="#">More</a>}
        >
          {data[0].price}
        </Card>
      </Card>,
    </div >
  )
})

ItemList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}


export default ItemList;