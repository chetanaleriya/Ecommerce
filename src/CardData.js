import {Container ,Card,Row, Button} from 'react-bootstrap';  
import { useNavigate } from "react-router-dom";
function CardData(prop)
{
  const navigate = useNavigate();
  const handleClick = (pid) => {
    const data = { name: pid};
    navigate("/item", { state: data });
  };
    return(
        <Container className='p-4'>  
        <Row>      
       {
       prop.data1.map((item) => (  
        <Card  
          style={{width:"200px"}}  
          className="m-2"  
        >  
          <Card.Img src={item.pimage} style={{height:"100px"}}/>
          <Card.Body>  
            <Card.Title style={{color:"red", fontSize:"15px"}}>{item.pname.substring(0, 20)}</Card.Title>
            <Card.Title style={{color:"blue", fontSize:"15px"}}>{item.pprice} Rs</Card.Title>  
            <Card.Text style={{color:"black", fontSize:"10px"}}>{item.pdesc.substring(0, 150)}</Card.Text> 
            <Button variant="primary" onClick={()=>handleClick(item.pid)}>View Detail {item.pid}</Button>
 {/* <Button variant="primary" onClick={()=>navigate("/item")}>View Detail {item.pid}</Button> */}
 </Card.Body>  
        </Card>  
      ))}  
      </Row>  
      </Container>
    )
}
export default CardData