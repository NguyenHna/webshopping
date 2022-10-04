import banner from "./App.module.css";

function Banner() {
  const handdleClick = () => {
    window.location.replace("/shop");
  };

  return (
    <>
      <div className={banner.wapper}>
        <p>NEW INSPIRATION 2020</p>
        <h3>20% OFF ON NEW SEASON</h3>
        <button onClick={handdleClick}>Browse collections</button>
      </div>
    </>
  );
}

export default Banner;
