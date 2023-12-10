
import { useState } from "react";
import Header from "./components/Header";
import { UserInput } from "./components/UserInput";
import Results from "./components/Results";


function App() {
  const [userInput, setInput] = useState({
    initialInvestment :1200,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});
const inputIsValid = userInput.duration -1
function handleChange(inputIdentifier, newValue) {
    setInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    })
}
console.log('fsd',userInput)

  return (
   <>
   <Header />
   <UserInput userInput={userInput} onChangeInput={handleChange} />
   {!inputIsValid && <p className="center">please enter a duration greater than zero</p>}
   {inputIsValid && <Results input={userInput} />}
   </>
  );
}

export default App;
