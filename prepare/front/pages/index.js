import React, { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout.js";
import ItemList from "../components/itemList.js";

// import styled from "styled-components";
import { Input, Result } from 'antd';

const { Search } = Input;

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const [haveResult, setHaveResult] = useState(false);
  const [result, setResult] = useState("");

  const items = [{ id: 1, name: "우유", price: "2,090원", deadline: "2022-03-01", img: "../img/milk.jpg" }, { id: 2, name: "샐러드", price: "5,200원", deadline: "2022-03-11", img: "../img/salad.jpg" }, { id: 3, name: "닭가슴살", price: "5,000원", deadline: "2022-02-15", img: "../img/chickenBreast.jpg" }];

  const onHandleSearch = (keyword) => {
    if (keyword.length > 0) {
      setSearchData(keyword);
      setHaveResult(true);
      console.log("onHandleSearch: ");
    } else if (keyword.length <= 0) {
      alert("검색어가 입력되지 않았습니다");
    }
  }

  const onHandleFindResult = () => {
    if (haveResult === true) {
      console.log("keyword를 검색 중입니다.");

      items.map((el, idx) => {
        if (el.name === searchData) {
          console.log(result, el);
          return setResult(el);
        }
      })
    }
  }

  useEffect(() => {
    console.log("onHandleFindResult 작동", result)
    onHandleFindResult();
  }, [haveResult, searchData]);

  return (
    <>
      <AppLayout />
      <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": "55rem" }}>
        <Search style={{ "backgroundColor": "yellow", "width": "30rem", "height": "0rem" }}
          placeholder="검색어를 입력하세요 ex) 우유, 샐러드, 닭가슴살"
          enterButton="Search" size="large"
          onSearch={onHandleSearch}
        />
      </div>
      {
        // console.log("!: ", result.name),
        <ItemList header="상품 목록" data={[result]} />}
    </>
  );
}

export default Home;