import React from "react";
//import Movie from "./Movie";
import { Card, CardGroup } from "react-bootstrap";
// import ModalMovie from "./ModalMovie";



function MoviesList(props) {
  // const [showModal, setShowModal] = useState(false);
  return (
      <>
          <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
              {
                  props.trending.map(trend => {
                      return <div key={trend.id}>
                          <Card key={trend.id} >
                              <Card.Body>
                                  <Card.Title>{trend.title}</Card.Title>
                              </Card.Body>
                          </Card>
                      </div>
                  })
              }
          </CardGroup>
          {/* {showModal && <ModalMovie show={showModal} meme={meme} handleColse={() => { setShowModal(false) }} updateCaption={props.updateCaption} />} */}
      </>
  )
}

export default MoviesList;

// function MovieList(props) {
//   // looping through the fetched data


//    return (
//     <>
//        <CardGroup>
//          {props.trending.map((trend) => {
//         return (
//             <div>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>{trend.title}</Card.Title>
//                   <Card.Text></Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           );
//         })}
//       </CardGroup> 
//    </>
//   );
// }

// export default MovieList;