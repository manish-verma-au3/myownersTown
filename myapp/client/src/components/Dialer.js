import React,{useState, useRef, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

function Dialer() {

    const [result, setResult] = useState('');
    const [myoutput, setmyOutput] = useState('');
    const [myLoading, setmyLoading] = useState(false);
    const inputRef = useRef(null);

    function handleClick(num){
        setResult(result + num);
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    function dataSubmit(){
        console.log("sendme", result);
        setmyLoading(true)
        var checkarr =[];
        var myarr = [];

        for(let i=0; i<result.length; i++){
            checkarr.push(result[i])
          }
          console.log('checkarr', checkarr);

          if(checkarr[0] === '0' && checkarr[1] === ' '){
            //   validCode = true;
               for(let i=0; i<checkarr.length; i++){
                if(checkarr[i] === '2'){
                  myarr.push(['A','B','C'])
                }
                if(checkarr[i] === '3'){
                  myarr.push(['D','E','F'])
                }
                if(checkarr[i] === '4'){
                  myarr.push(['G','H','I'])
                }
                if(checkarr[i] === '5'){
                  myarr.push(['J','K','L'])
                }
                if(checkarr[i] === '6'){
                  myarr.push(['M','N','O'])
                }
                if(checkarr[i] === '7'){
                  myarr.push(['P','Q','R','S'])
                }
                if(checkarr[i] === '8'){
                  myarr.push(['T','U','V'])
                }
                if(checkarr[i] === '9'){
                  myarr.push(['W','X','Y','Z'])
                }
            }
        }else{
            alert('wrong code');
            setmyLoading(false);   
          }
          //post data hosted the link on heroku 
          axios.post('https://mysuperherosapi.herokuapp.com/myhero', {
            input: myarr
          })
          .then(function (response) {
           setmyLoading(false);   
           setmyOutput(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
       
    }

    function clearMe(){
        setmyLoading(false)
        setResult("")
        setmyOutput("")
    }

console.log(result)
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
               
                <div style={{marginTop:'40px'}}>
                {myLoading ?
                <div>
                    <Spinner animation="border" role="status">
                         <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
                :
                <div>
                    <h3 style={{color:'red'}}>{myoutput}</h3>
                </div>
                }

                </div>
                <div style={{marginTop:'50px'}}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text"  value={result} ref={inputRef}
                         placeholder="Ex: Dial '0 4855' for HULK" />
                    </Form.Group>
                    </Form>
                </div>
                        <div className="keypad">
                           <button  onClick={() => handleClick(1)}>
                                <h4>1</h4>
                                <div><h6>@.?</h6></div>
                           </button>
                           <button  onClick={() => handleClick(2)}>
                                <h4>2</h4>
                                <div><h6>ABC</h6></div>
                           </button>
                           <button  onClick={() => handleClick(3)}>
                                <h4>3</h4>
                                <div><h6>DEF</h6></div>
                           </button>
                           <button  onClick={() => handleClick(4)}>
                                <h4>4</h4>
                                <div><h6>GHI</h6></div>
                           </button>
                           <button  onClick={() => handleClick(5)}>
                                <h4>5</h4>
                                <div><h6>JKL</h6></div>
                           </button>
                           <button  onClick={() => handleClick(6)}>
                                <h4>6</h4>
                                <div><h6>MNO</h6></div>
                           </button>
                           <button  onClick={() => handleClick(7)}>
                                <h4>7</h4>
                                <div><h6>PQRS</h6></div>
                           </button>
                           <button  onClick={() => handleClick(8)}>
                                <h4>8</h4>
                                <div><h6>TUV</h6></div>
                           </button>
                           <button  onClick={() => handleClick(9)}>
                                <h4>9</h4>
                                <div><h6>WXYZ</h6></div>
                           </button>
                           <button onClick={() => dataSubmit()}>
                                <h4>.</h4>
                                <div><h6>send</h6></div>
                           </button>
                           <button  onClick={() => handleClick(0)}>
                                <h4>0</h4>
                                <div><h6>zero</h6></div>
                           </button>
                           <button onClick={() => handleClick(' ')}> 
                                <h4>#</h4>
                                <div><h6>space</h6></div>
                           </button>
                         </div>
            
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col style={{marginTop:'20px'}}>
                <Button variant="primary" size="lg" block onClick={() => clearMe()}>
                    Clear
                </Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Dialer
