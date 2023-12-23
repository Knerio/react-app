import Header from "./Header";
import {Alert, Button} from "react-bootstrap";
import "./calculator.css";
import React, {useState} from "react";

export default function Calculator() {
    const [getCurrentLine, setCurrentLine] = useState("0");
    const [isHidden, setHidden] = useState(true);

    function enter() {
        try {
            setCurrentLine(String(eval(getCurrentLine)));
        } catch (e) {
            setHidden(false);
            setTimeout(() => {
                setHidden(true);
            }, "5000")
        }

    }

    function deleteOne() {
        if (getCurrentLine.length === 1) {
            setCurrentLine("0");
        } else {
            setCurrentLine(getCurrentLine.slice(0, -1));
        }
    }

    function addLine(s) {
        if (s === "=") {
            enter();
            return;
        }

        setCurrentLine((prevLine) => {
            const array = [".", "+", "-", "*", "/"];
            const lastChar = prevLine.slice(-1);

            if (array.includes(lastChar) && array.includes(s)) {
                return prevLine;
            }

            if (prevLine === "0") {
                return s;
            }

            return prevLine + s;
        });
    }

    return (
        <>
            <Header></Header>
            <Alert onClick={() => {setHidden(true)}} hidden={isHidden} key="danger" variant="danger">In '{getCurrentLine}' ist ein Fehler enthalten</Alert>
            <h1 className="h-100 d-flex align-items-center justify-content-center margin-all">{getCurrentLine}</h1>
            <div className="h-100 d-flex align-items-center justify-content-center margin-all">
                {["1", "2", "3", "/"].map((value) => (
                    <Button
                        key={value}
                        onClick={() => addLine(value)}
                        size="sm"
                        variant="outline-secondary"
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div className="h-100 d-flex align-items-center justify-content-center margin-all">
                {["4", "5", "6", "*"].map((value) => (
                    <Button
                        key={value}
                        onClick={() => addLine(value)}
                        size="sm"
                        variant="outline-secondary"
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div className="h-100 d-flex align-items-center justify-content-center margin-all">
                {["7", "8", "9", "-"].map((value) => (
                    <Button
                        key={value}
                        onClick={() => addLine(value)}
                        size="sm"
                        variant="outline-secondary"
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div className="h-100 d-flex align-items-center justify-content-center margin-all">
                {["0", ".", "=", "+"].map((value) => (
                    <Button
                        key={value}
                        onClick={() => addLine(value)}
                        size="sm"
                        variant="outline-secondary"
                    >
                        {value}
                    </Button>
                ))}
            </div>

            <div className="h-100 d-flex align-items-center justify-content-center margin-all">
                <Button onClick={deleteOne} size="sm" variant="outline-secondary">
                    C
                </Button>
            </div>
        </>
    );
}
