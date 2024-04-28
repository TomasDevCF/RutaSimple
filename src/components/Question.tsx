

interface Props {
  question: string;
  response: string;
  setAccordionSelected: React.Dispatch<React.SetStateAction<string | null>>;
  accordionSelected: string | null;
}

export default function Question({ question, response, accordionSelected, setAccordionSelected }: Props) {

  function changeAccordionSelected() {
    if (accordionSelected === question) {
      setAccordionSelected(null)
    } else {
      setAccordionSelected(question)
    }
  }

  return (
    <article
      className="flex flex-col rounded-lg border-gray-400 border border-solid p-6 py-4 h-max"
    >
      <b className="text-lg flex justify-between gap-x-2 cursor-pointer" onClick={changeAccordionSelected}>
        {question}
        <button className="min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px]">
          {accordionSelected === question ? <ArrowUp /> : <ArrowDown />}
        </button>
      </b>
      {accordionSelected === question && <p className="text-black/60 text-md">{response}</p>}
    </article>
  )
}

function ArrowUp() {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}