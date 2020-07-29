
 import React, {useEffect, useState} from "react";
//import {Row, Col} from 'react-bootstrap';
import {Card, CardImg, Col, Row, } from "reactstrap";
import {Link} from 'react-router-dom';
import axios from "axios";

const styles = {
    background: {
        backgroundColor: "#103140",
        
    },
    CardImg: {
      maxHeight: "290px"
  },
}
const MovieListComponent =  (props) => {
  
  const [mov , setMov ] = useState([])
  const [movies , setMovies] = useState([]) ;
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    axios(`http://api.themoviedb.org/3/movie/${props}?api_key=b20c1874c88412dd1698a15f5b626ca1&fbclid=IwAR1C-piCaeFMboAHYZBONsm0kzoYLW9utJKuXxKyZPaJ6YQw2zgUAkpXHdo` )
        .then(res => {
            
            setMov({
              adult: res.data.adult,
              backdrop_path: res.data.backdrop_path,
              genres: res.data.genres,
              id: res.data.id,
              imdb_id: res.data.imdb_id,
              overview: res.data.overview,
              poster_path: res.data.poster_path,
              companies: res.data.production_companies,
              countries: res.data.production_countries,
              release_date: res.data.release_date,
              spoken_languages: res.data.spoken_languages,
              status: res.data.status,
              tagline: res.data.tagline,
              title: res.data.title,
              vote_average: res.data.vote_average,
              vote_count: res.data.vote_count,
              budget: res.data.budget,
              runtime: res.data.runtime
          })
            setIsLoaded(true)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        
},[])

console.log(mov) ;
/*function fullIds(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
 const array = fullIds(550, 558); // [90 , ... 4596]
console.log(array)*/

 
  
  return ( 
<Row className="mt-3 pb-3">
    { mov.map( i =>{ props = i;
                      if (5 > 4 ){
                        return (
                    
                      
                          <Col key={mov.id}>
                                    <Card className="p-1" style={styles.background}>
                                        <Link  to={`/movies1/${props}`}>
                                            <CardImg top width="100%" style={styles.CardImg} src={mov.backdrop_path} alt={mov.title}/>
                                        </Link>
                                    </Card>
                                </Col>
                        )}
                      }  
                       
                            
                 )}
                
</Row> 
 )
}

export default MovieListComponent; 