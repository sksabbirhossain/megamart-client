import React, { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return {
    product,
    loading,
    error,
  };
};

export default useProductDetails;
