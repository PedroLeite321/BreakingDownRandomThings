let limit = prompt("insert limit");
limit > 10 ? limit = 10 : limit == 0? limit = 1 : limit < 0? limit = 1 : limit = limit;
let nowNumber = 1;
const hookSim = (() =>  {
    let state = [];
    let index = 0;
    const useState = (initialValue) =>  {
        if(state === undefined) {
            state = initialValue;
        } //passing the argument to the function.

        const setterFunction = (nextValue) =>    {
            state = nextValue //probably an reassing of the older value
    
        }

        return[state,setterFunction] //It seems to return the function aswell as the state
    }
    //Will return the objects literal for what i'll need. It's a way of doing modularization.
    return {
        useState,
    }
})();

const {useState} = hookSim; //Desconstruct the useState from hookSim, therefore, having access to all its functions.
const counterComponent = () =>  {
    const [counterValue, setCounterValue] = useState(1);
    let newLimit = parseInt(limit,0)
    let holdCounters = [];

    if(nowNumber != newLimit)    {
        holdCounters.push(nowNumber);
        nowNumber++;
        console.log("Bananinha" + counterValue)
        setCounterValue(nowNumber);
    }

}
//the code that print the counter. I think it could be comparable to the useEffect method. 
counterComponent()