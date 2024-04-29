
import { useState } from "react";
import { questions } from "../data";
import Question from "./Question"

export default function Questions() {

  const [accordionSelected, setAccordionSelected] = useState<null | string>(null)

  return (
    <section className="py-10 lg:px-[10%] px-[20px]">
      <h2 className="text-4xl text-center pb-3">Preguntas frecuentes</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {questions.map((question, index) => <Question {...question} key={index} setAccordionSelected={setAccordionSelected} accordionSelected={accordionSelected} />)}
      </div>
    </section>
  )
}