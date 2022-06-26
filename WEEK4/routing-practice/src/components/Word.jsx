import { useParams } from "react-router-dom";

const Word = (props) => {

  const {word} = useParams();

  return (
    <div>The {isNaN(+word)? "word" : "number"} is : {word}</div>
  )
}
export default Word;