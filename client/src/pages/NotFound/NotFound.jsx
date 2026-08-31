import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-code">404</div>
      <h1>Page Not Found</h1>
      <p className="muted">The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;