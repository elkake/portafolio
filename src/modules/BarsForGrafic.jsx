function BarsForGrafic({ value }) {
  return (
    <div className="bar_container">
      <div>
        <img src={value.img} alt="" />
      </div>
      <section className={`bar ${value.color}`}></section>
    </div>
  );
}

export default BarsForGrafic;
