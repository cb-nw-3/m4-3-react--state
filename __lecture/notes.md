After forking this into your class org, you can add the lectures slides, and or notes, here for easy student access.

React State:

```jsx
const Counter = () => {
  const [count, setCount] = React.useState(0);

  return(
    <button onClick= {(event) =>{
      setCount(count+1)
    }
    }>add one<button>

    <p>{count}</p>
  )
};
  //this is a deconstructed array. Like a deconstructed object, we pull out variables. But, if it were an object, we would have to use the exact keys, since it's an array, we can use the named variable that we want. count is just a variable that holds the value of useState and setCount is a function that changes the value of count.

  //setCount() makes the page re-rending and changes only the element that was changed
```

<!-- ```jsx
const SearchInput = () =>{
  const [searchTerm, setSearchTerm] = React.useState('')

  return(
    <input
     value={searchTerm}/>
  )
} -->

````js
class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      t: this.props.initialT,
    }
  }
  render() {
    // Not actually the right formula
    const temperatureInFahrenheit =
      this.state.t * 0.5 + 32;
    return (
      <div>
        <p>Temperature: {temperatureInFahrenheit}</p>
        <button
          onClick={() => this.setState({
            t: this.state.t + 10
          })}
        >
          Make it hotter
        </button>
      </div>
    )
  }
}
render(<Temperature initialT={0} />)

```
````
