import "./styles.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  align-items: center;
`;

const GeneralContainer = styled.div`
  border: 4px solid;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 10px;
  width: 838px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FormParentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const JustifyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Button = styled.div`
  width: 200px;
  height: 100px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 1.5em;
  color: white;
`;

const Image = styled.img`
  object-fit: fit;
  width: 400px;
`;

const Anchor = styled.a`
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 30px;
  color: blueviolet;
`;

const App = () => {
  const [a, setA] = useState(1);
  const [b, setb] = useState(2);
  const [answer, setAnswer] = useState(null);

  const [extA, setExtA] = useState(1);
  const [extB, setExtB] = useState(2);
  const [extendedAnswer, setExtendedAnswer] = useState(null);

  const greatestCommonDivisor = (a, b) => {
    while (b !== 0) {
      let k = b;
      b = a % b;
      a = k;
    }
    setAnswer(a);
    return a;
  };

  const greatestCommonDivisorRecursive = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return greatestCommonDivisorRecursive(b, a % b);
    }
  };

  const extendedGreatestCommonDivisor = (a, b) => {
    let r1 = a,
      r2 = b;
    let s1 = 1,
      s2 = 0;
    let t1 = 0,
      t2 = 1;
    while (r2 > 0) {
      let q = Math.floor(r1 / r2);
      let r = r1 - q * r2;
      r1 = r2;
      r2 = r;
      let s = s1 - q * s2;
      s1 = s2;
      s2 = s;
      let t = t1 - q * t2;
      t1 = t2;
      t2 = t;
    }
    let finalAnswer = `Greatest Common Divisor: ${r1}, Coeff for bigger integer: ${t1}, Coeff for smaller integer: ${s1}`;
    setExtendedAnswer(finalAnswer);
    return finalAnswer;
  };

  return (
    <div className="App">
      <Anchor
        href="https://github.com/RalfiBahar/PioneerEuclidianWeb"
        target="_blank"
      >
        My Github Repo
      </Anchor>
      <GeneralContainer>
        <FormParentContainer>
          <Form onSubmit={() => {}}>
            <FormContainer>
              Euclidian Algorithm
              <input
                type="text"
                value={a}
                onChange={(e) => setA(e.target.value)}
              />
              <input
                type="text"
                value={b}
                onChange={(e) => setb(e.target.value)}
                className="inp"
              />
            </FormContainer>
          </Form>
          <JustifyContainer>
            <Button onClick={() => greatestCommonDivisor(a, b)}>
              <Text>Get Answer!</Text>
            </Button>
          </JustifyContainer>
          <p>
            Answer:
            <br />
            <br /> {answer}
          </p>
        </FormParentContainer>
        <h2>Implementation: </h2>
        <ImageContainer>
          <Image src={require("./1.PNG")} />
          <div style={{ margin: 15 }}></div>
          <Image src={require("./2.PNG")} />
        </ImageContainer>
      </GeneralContainer>

      {/*Extended */}
      <GeneralContainer>
        <FormParentContainer>
          <Form onSubmit={() => {}}>
            <FormContainer>
              Extended Euclidian Algorithm
              <input
                type="text"
                value={extA}
                onChange={(e) => setExtA(e.target.value)}
              />
              <input
                type="text"
                value={extB}
                onChange={(e) => setExtB(e.target.value)}
                className="inp"
              />
            </FormContainer>
          </Form>
          <JustifyContainer>
            <Button onClick={() => extendedGreatestCommonDivisor(extA, extB)}>
              <Text>Get Answer!</Text>
            </Button>
          </JustifyContainer>
          <p>
            Answer: <br />
            <br />
            {extendedAnswer}
          </p>
        </FormParentContainer>
        <h2>Implementation: </h2>
        <ImageContainer>
          <Image src={require("./3.PNG")} />
        </ImageContainer>
      </GeneralContainer>
    </div>
  );
};

export default App;
