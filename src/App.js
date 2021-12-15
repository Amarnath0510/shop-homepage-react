// import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

function App() {
  return (
    <div className="App">
    
    <Card variant="outlined">
   <Cart1/>
   </Card>
   <Card variant="outlined">
  <Cart2/>
  </Card>
  <Card variant="outlined">
  <Cart3/>
  </Card>
  <Card variant="outlined">
  <Cart4/>
  </Card>
  <Card variant="outlined">
  <Cart5/>
  </Card>
  <Card variant="outlined">
  <Cart6/>
  </Card>
  <Card variant="outlined">
  <Cart7/>
  </Card>
  <Card variant="outlined">
  <Cart8/>
  </Card>

 
 </div>
  );
}



function Cart1(){
  return (

    <div className="container1">
    <img  className="imagecontainer"
    src="https://m.media-amazon.com/images/I/51KoCCrxWqL._UL1500_.jpg" alt="cool dress"/>
 
    <h1>Mens  T-shirt</h1>
    <p>$40-$80</p>
    <Button variant="outlined">View Options</Button>
    
    </div>
  )
}
function Cart2(){
  return (
    <div>
    <img  className="imagecontainer"
    src="https://m.media-amazon.com/images/I/71WuDXpTAlL._SL1500_.jpg" alt="Asus laptop"/>
   
    <h1>Asus Laptop</h1>
   <p>⭐⭐⭐⭐⭐</p>
    <s>$20.00</s>
    <p>$18.00</p>
    
    <Button variant="outlined">Add to Cart</Button>
    </div>
    
  )
}
 function  Cart3() {
   

   return (
     <div>
     <img  className="image2container"
    src="https://m.media-amazon.com/images/I/71iFmu+eP7L._SL1100_.jpg" alt="Christmas Tree"/>
     
     <h1>Christmas tree</h1>
     <s>$50</s>
     <p>$25.00</p>
    <Button variant="outlined">View Options</Button>
    
     </div>
   )
 }
 function Cart4(){
   return (
     <div>
     <img  className="image3container"
     src="https://m.media-amazon.com/images/I/31KuARzVB3L.jpg" alt="Fancy Light"/>
     
     <h1>Fancy Light</h1>
     <p>⭐⭐⭐⭐⭐</p>
     <p>$40.00</p>
     <Button variant="outlined">View Options</Button>     
     </div>
   )
 }
 function Cart5(){
   return (
     <div>
    <img  className="image4container"
     src="https://shop.teamsg.in/wp-content/uploads/2021/03/25-1-scaled.jpg" alt="sunny Cool Bat"/>
    
     <h1>Sunny Gold Bat</h1>
     
    <s>$50.00</s>
    <p>$25.00</p>
   <Button variant="outlined">View Options</Button>
    
    </div>
   )
 }
 function Cart6(){
   return (
     <div>
     <img  className="image5container"
     src="https://images-na.ssl-images-amazon.com/images/I/81hmkKzH-AL.jpg" alt="Economy book"/>
     
     <h1>Economy Book</h1>
     <p>$120-$280</p>
     <Button variant="outlined">Add to Cart</Button>
    
     </div>
  )
}
 function Cart7(){  
   return (
     <div className="container7">
     <img  className="image6container"
     src="https://m.media-amazon.com/images/I/81rEbqDbPUL._SL1500_.jpg" alt="Guitar"/> 
    <h1>Guitar</h1>
    <p>⭐⭐⭐⭐⭐</p>
    <s>$20.00</s>
    <p>$18.00</p>
     <Button variant="outlined">View Options</Button>
     </div>
   )
 }
 function Cart8(){
   return (
     <div>
     <img  className="image7container"
     src="https://m.media-amazon.com/images/I/61QoZCzMx3L._SL1000_.jpg" alt="Alexa speaker"/>
     
     <h1>Amazon alexa</h1>
     <p>⭐⭐⭐⭐⭐</p>
     <p>$40.00</p>
    <Button variant="outlined">View Options</Button>    
    </div>
   )
 }


export default App;
