import { blue } from '@mui/material/colors';
import Button from '@mui/material/node/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Cards({image,type,actionType}) {
  return (
    <Card style={{}}>
      <Card.Body style={{ margin:100,gap:10,display: 'flex',flexDirection:'column', width:200,height:275}}>
        <img style={{padding:10}} src={image} />
        <div style={{
            backgroundColor:'blue',
            height:"auto",
            display: 'flex',
            justifyContent:'center',
            padding: 5,
            borderRadius: 100
        }}> <Link to={`/${actionType}/${type}`} style={{ textDecoration: 'none',color:'white'}}>{actionType} as {type}</Link> </div>

      </Card.Body>
    </Card>
  );
}

export default Cards;