import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bar =(props) =>{
    const [countOfProgess, setCountOfProgess] = React.useState(0);
 
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCountOfProgess((oldProgress) => {
          if (oldProgress == 100) return 100;
          return Math.min(oldProgress + Math.random() * 10, 100);
        });
      }, 199);
   
      return () => {
        clearInterval(timer);
      };
    }, []);
 
    return(
    <div style={{ display: 'block',
     width: 700, padding: 30 }}>
      Current Progress is: {parseInt(countOfProgess)} %

        <div style={{height: 200}}>
  
        <ProgressBar now={countOfProgess} variant='success'/>
        </div>
      </div>  

    )
}

 export default Bar;