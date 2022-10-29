import '../App.css';

function firstChild(props) {
    //getting data through parent
    console.log("See in child", props)
  return (
    <div className="App">
        {/* Accessing the data */}
        <h1> Good {props.props}</h1>
    </div>
  );
}

export default firstChild;
