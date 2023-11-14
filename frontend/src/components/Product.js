import React, { useEffect, useState } from "react";
import { popularProducts } from "../data";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Product = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const url = cat
        ? `http://localhost:5000/api/products?category=${cat}`
        : `http://localhost:5000/api/products`;

      try {
        const res = await axios.get(url);

        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  // useEffect(() => {
  //   cat &&
  //     setFilteredProducts(
  //       products.filter((item) =>
  //         Object.entries(filters).every(
  //           ([key, value]) => item[key].includes[value]
  //         )
  //       )
  //     );
  // }, [products, cat, filters]);

  useEffect(() => {
    const fData = products.filter(
      (item) =>
        item.size.includes(filters?.size) || item.color.includes(filters?.color)
    );
    // console.log(fData, "filtersd");
    setFilteredProducts(fData);
  }, [filters]);

  useEffect(() => {
    let sortedData;
    if (sort == "latest") {
      sortedData = filteredProducts.sort((a, b) => a.createdAt - b.createdAt);
    } else if (sort == "asc") {
      sortedData = filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedData = filteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedData);
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((productItem) => (
            <ProductCard productItem={productItem} key={productItem.id} />
          ))
        : products
            .slice(0, 8)
            .map((productItem) => (
              <ProductCard productItem={productItem} key={productItem.id} />
            ))}
    </Container>
  );
};

export default Product;

// product =products
// productCard = product
