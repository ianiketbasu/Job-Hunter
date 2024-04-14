import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page notfound">
      <div className="content">
        <img src="/notfound.png" alt="page not found" />
        <Link to={"/"}>Return to home</Link>
      </div>
    </section>
  );
}

export default NotFound;
