import React, { useState } from "react";
import { ListGroup, Card, Form, Button } from "react-bootstrap";
import Result from "./Result"
let value = 0;
const Questions = (props) => {
    const [question, setQuestion] = useState(props.list[0].question);
    const [id, setId] = useState(props.list[0].id);
    const [option, setOptions] = useState(props.list[0].options[0]);
   
    const [flag, setFlag] = useState(0);
    let Mylist = props.list;



    const [name, setName] = useState("Next")
    const changQuestion = (e) => {



        if (name == "Finish") {
            setFlag(1);
            alert(props.list);
            props.data.setResult(Mylist);
        }
        if (value < props.list.length - 1) {
            value = value + 1;
            console.log(value);
            setId(props.list[value].id);
            setQuestion(props.list[value].question);
            setOptions(props.list[value].options[0]);

        }
        if (value == props.list.length - 1) {
            setName("Finish")
        }


    }
    const decreament = (e) => {

        if (value > 0) {
            value = value - 1;
            console.log(value)
            setName("Next");
            setId(props.list[value].id);
            setQuestion(props.list[value].question);
            setOptions(props.list[value].options[0]);

        }





    }
    const checkCorrect = (e) => {
        if (Mylist[value].answer == e) {
            Mylist[value].score = "1";
        }
        else{
            Mylist[value].score = "0";
        }
    }
    if (flag == 0) {
        return (
            <div className="container">
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                    <div className="d-flex my-4">
                                
                                <Button variant="warning" className="d-flex justify-content-start" onClick={decreament}>Previous</Button>
                                <Button variant="warning" className="flex-row-reverse mx-4" onClick={changQuestion}>{name}</Button>
                    </div>
                        <Card.Subtitle className="btn btn-success">{id}. {question}</Card.Subtitle>
                        <ListGroup variant="flush">
                            {
                                Object.entries(option).map((item) => (
                                    <ListGroup.Item>
                                        <div className="block-example border border-light">
                                            <Form.Check.Input type="radio" name={"quiz" + value} onChange={() => checkCorrect(item[1])} />
                                            <Form.Check.Label>{item[1]}</Form.Check.Label>
                                        </div>
                                    </ListGroup.Item>
                                ))
                            }

                        </ListGroup>
                        
                    </Card.Body>
                    <Card.Footer>Question No: {id}/{props.list.length}</Card.Footer>
                </Card>



            </div>

        )
    }
    else if (flag == 1) {
        return (
            <div>
                <Result Mylist={props.list}></Result>
                <h1>Quiz Finished</h1>
            </div >
        )
    }
    return (<div></div>)
}
export default Questions;