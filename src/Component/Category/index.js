import category from "./App.module.css";

function Category() {
  return (
    <>
      <div className={category.wapper}>
        <div className={`row  ${category.title}`}>
          <p>Carefully created collections</p>
          <h3>browse our categories</h3>
        </div>
        <div className={`row ${category.item1}`}>
          <a className="col-md-6" href="/shop">
            <img src="/image/product_1.png" />
          </a>
          <a className="col-md-6" href="/shop">
            <img src="/image/product_2.png" />
          </a>
        </div>
        <div className={`row ${category.item2}`}>
          <a className="col-md-4" href="/shop">
            <img src="/image/product_3.png" />
          </a>
          <a className="col-md-4" href="/shop">
            <img src="/image/product_4.png" />
          </a>
          <a className="col-md-4" href="/shop">
            <img src="/image/product_5.png" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Category;
