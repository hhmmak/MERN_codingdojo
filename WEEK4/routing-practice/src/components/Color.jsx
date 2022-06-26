import { useParams } from "react-router-dom";

const Color = (props) => {


  const {word, colorFont, colorBg} = useParams();

  return (
    <div style={{"backgroundColor": colorBg, "color": colorFont}}>The {isNaN(+word)? "word" : "number"} is : {word}</div>
    )
  }
  export default Color;