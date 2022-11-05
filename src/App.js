import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    let result = await fetch("https://jsonplaceholder.typicode.com/users/");

    result = await result.json();
    console.log(result);
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.map((user, index) => {
        return (
          <div className="box">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src="https://picsum.photos/200" />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.username}</Card.Text>
                <Button variant="primary ">
                  <Card.Link
                    style={{
                      color: "white",
                      fontSize: "20px",
                      textDecoration: "none",
                    }}
                    href={`https://jsonplaceholder.typicode.com/users/${user.id}/posts`}
                  >
                    Post
                  </Card.Link>
                </Button>
                <Button variant="primary" style={{ margin: "10px" }}>
                  <Card.Link
                    style={{
                      color: "white",
                      fontSize: "20px",
                      textDecoration: "none",
                    }}
                    href={`https://jsonplaceholder.typicode.com/posts/${user.id}/comments `}
                  >
                    Todo
                  </Card.Link>
                </Button>
                <Button variant="primary">
                  <Card.Link
                    style={{
                      color: "white",
                      fontSize: "20px",
                      textDecoration: "none",
                    }}
                    href={`https://jsonplaceholder.typicode.com/users/${user.id}/albums`}
                  >
                    Album
                  </Card.Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default App;
