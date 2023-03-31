import { BIO } from "../../constants/bio";
import "./Bio.css";

export const Bio = () => {
  return (
    <section className="container container-lines">
      <div className="img-bio">
        <img src="https://avatars.githubusercontent.com/u/25284008?v=4" alt="" />
      </div>
      <p className="purple-text">
        📚 Computer Engineering <span className="purple-smoke-text">- University of Waterloo</span>{" "}
      </p>
      <div className="line"></div>
      {BIO.map((e, i) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year}: </span>
          <span className="gray-text">
            {e.title.cargo} at {e.title.name}
          </span>
          {(i !== BIO.length-1) && <div className="line"></div>}
        </div>
      ))}
    </section>
  );
};
