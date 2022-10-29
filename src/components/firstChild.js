import '../App.css';

function firstChild(props) {
    console.log("See in child", props)
  return (
    <div className="App">
        <h1> Good {props.props}</h1>
    </div>
  );
}

export default firstChild;
