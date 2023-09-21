import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">techNotes</span>
        </h1>
      </header>
      <main className="public__main">
        {/* <section class="hero"> */}
        <div class="hero-text">
          <h1>Replace Your Sticky Note System</h1>
          <p>
            A secure and intuitive Employee Notes Management System to organize
            your workplace.
          </p>
          <Link to="/login">
            <button>Get Started</button>
          </Link>
        </div>
        {/* </section> */}
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
