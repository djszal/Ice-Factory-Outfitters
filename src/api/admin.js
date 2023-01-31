import { async } from "q";

export const deleteSingleProduct = async (token, productID) => {
  //   console.log("api token", token);
  try {
    const response = await fetch(
      `http://localhost:4001/api/products/${productID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();

    // console.log("Delete product from API admin.js", data.result.id);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const editSingleProduct = async (
  token,
  productID,
  productName,
  productDesc,
  productPrice
) => {
  try {
    const response = await fetch(
      `http://localhost:4001/api/products/${productID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productName,
          productDesc,
          productPrice,
        }),
      }
    );
    const data = await response.json();

    console.log("Edit product from API admin.js", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
