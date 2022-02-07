import { ListGroup } from "react-bootstrap";
import arts from "data/arts-list.json";

const List = () => {
  return (
    <ListGroup variant="flush" className="main-list">
      {
        arts.map(art => (
          <ListGroup.Item
            key={art.slug}
            as="li"
            className="d-flex justify-content-between align-items-start list-item">
            <div className="ms-2 me-auto">
              <a href={`/sketches/${art.slug}`}> { art.name } </a>
              <div className="fw-bold"> {art.sub} </div>
            </div>
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
};

export default List;
