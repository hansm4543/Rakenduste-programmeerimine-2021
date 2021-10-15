import React from "react"


const Arvuta = ({ number }) => {
    const algv22rtus = number;
    const [answer, setAnswer] = React.useState(number)
  
    const Times2 = () => {
        setAnswer(answer * 2)
    }
    const Square = () => {
        setAnswer(answer*answer)
    }
    const SQRT = () => {
        setAnswer(Math.sqrt(answer))
    }
    const Divide2 = () => {
        setAnswer(answer/2)
    }
    const Reset = () => {
        setAnswer(algv22rtus)
    }

    return (
      <>
        <h1>Vastus: {answer}</h1>
        <button onClick={Times2}>Korruta 2-ga</button>
        <button onClick={Divide2}>Jaga 2-ga</button>
        <button onClick={Square}>Ruutu v6tmine</button>
        <button onClick={SQRT}>Ruutjuur</button>
        <button onClick={Reset}>Reseti algv22rtus</button>
      </>
    )
}

export default Arvuta