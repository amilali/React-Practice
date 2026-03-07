// https://fakestoreapi.com/products
// [
//   {
//    "id": 1,
//    "title": "Fjallraven Backpack",
//    "price": 109.95,
//    "category": "men's clothing"
//   },
//   {
//    "id": 2,
//    "title": "Mens Casual Premium Jacket",
//    "price": 22.3,
//    "category": "men's clothing"
//   }
//  ]

// 1. need to make one dropdown where we select the product category

// 2. based on category we show the data in table

// | Title | Price | Category |
//| ----- | ----- | -------- |


import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    // setLoading(true);
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     setData(resJson);
    //     setLoading(false);
    //   })
    //   .catch((e) => console.log(e));

      async function fetchProducts(){
        try {
          setLoading(false);
          const response = await fetch("https://fakestoreapi.com/products")
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          throw new Error(error);
        }
      }
      fetchProducts();
  }, []);

  let categoryData = [...new Set(data.map((e) => e.category))];

  let filterData = (
    category ? data.filter((e) => e.category === category) : data
  ).sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

  if (keywords) {
    filterData = filterData.filter(
      (e) =>
        e.title.substr(0, keywords.length).toLowerCase() ==
        keywords.toLowerCase()
    );
  }

  if (loading) return <center>Loading....</center>;
  
  return (
    <>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        {categoryData.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </select>
      <input
        type="text"
        name="Search"
        id=""
        placeholder="Search here"
        onChange={(e) => setKeywords(e.target.value)}
      />

      {/* Table */}

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Price</th>
            <th>category</th>
          </tr>
        </thead>

        <tbody>
          {filterData.length > 0 ? (
            filterData.map((e, i) => (
              <tr id={e.id}>
                <td>{i}</td>
                <td>{e.title}</td>
                <td>{"$" + e.price}</td>
                <td>{e.category}</td>
              </tr>
            ))
          ) : (
            <center>Not found!</center>
          )}
        </tbody>
      </table>
    </>
  );
}
