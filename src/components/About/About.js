import "./About.css";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-blurb">
        <span className="purple-text">
          <span className="purple-smoke-text">Currently seeking opportunities for</span>{" "}
          Fall 2023
        </span>
        <p className="gray-text">
        My interests span across the fields of Software, Computer, and Electrical Engineering. This includes software development, embedded systems, hardware, and design.
        </p>
        <p className="white-text">
          Reach out to me on{" "}
          <a className="about-see" href="https://www.linkedin.com/in/saleenshahriar">LinkedIn</a>{" "}
          or by <a className="about-see" href="mailto:s4shahri@uwaterloo.ca">email</a>.
        </p>
      </div>
    </section>
  );
};
