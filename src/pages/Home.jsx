import banner from "../assets/restaurant-banner.jpg";
function Home() {
  return (
    <div
  className="container text-center mt-5 p-5"
  style={{
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
  }}
>

     <h1
  className="display-3 fw-bold"
  style={{
    color: "#FFD700",
    letterSpacing: "2px",
    textShadow: "0 0 15px rgba(255,215,0,0.4)"
  }}
>
        🍽️ Restaurant Ordering System
      </h1>

      <p
  className="lead mt-4"
  style={{
    color: "#F8FAFC",
    fontSize: "28px",
    fontWeight: "500",
    textShadow: "0 0 10px rgba(255,255,255,0.2)"
  }}
>
  Order your favorite food online quickly and easily.
</p>

      <button
  className="btn btn-warning btn-lg px-5 py-3 fw-bold mt-4"
  style={{
    borderRadius: "30px"
  }}
>
  🍕 Order Now
</button>

<br />

      <img
  src={banner}
  alt="Restaurant"
  className="img-fluid mt-5"
  style={{
    maxWidth: "300px",
    borderRadius: "20px",
    border: "3px solid #FFD700",
    boxShadow: "0 0 25px rgba(255,215,0,0.5)"
  }}
/>
    <p
  style={{
    color: "#F8FAFC",
    fontSize: "20px",
    marginTop: "20px",
    fontStyle: "italic"
  }}
>
  Experience Fine Dining at Your Fingertips
</p>
      <div className="mt-4">
        <h2 className="text-warning mt-5">
  ⭐ Why Choose Us?
</h2>

        <div className="row mt-4">

  <div className="col-md-3">
    <div
  className="card text-white p-3"
  style={{
    background: "rgba(0,0,0,0.4)",
    border: "1px solid #FFD700",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(255,215,0,0.2)"
  }}
>
  🚚 Fast Delivery
</div>
  </div>

  <div className="col-md-3">
    <div
  className="card text-white p-3"
  style={{
    background: "rgba(0,0,0,0.4)",
    border: "1px solid #FFD700",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(255,215,0,0.2)"
  }}
>
  🍔 Fresh Food
</div>
  </div>

  <div className="col-md-3">
    <div
  className="card text-white p-3"
  style={{
    background: "rgba(0,0,0,0.4)",
    border: "1px solid #FFD700",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(255,215,0,0.2)"
  }}
>
  💰 Best Prices
</div>
  </div>

  <div className="col-md-3">
    <div
  className="card text-white p-3"
  style={{
    background: "rgba(0,0,0,0.4)",
    border: "1px solid #FFD700",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(255,215,0,0.2)"
  }}
>
  📱 Easy Ordering
</div>
  </div>

</div>
      </div>

    </div>
  );
}

export default Home;