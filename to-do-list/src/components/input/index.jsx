import './index.css'
const Input = () => {
	const doSomething = (event) => {
		if (event.key === 'Enter' || event.keyCode === 13) {
			console.log(event.target.value)
		}
	}

  return (
    <div className="input">
      <input type="text" placeholder="Enter Your Hobby" className="input" onKeyUp={doSomething}/>
			<button type="submit" className="btn btn-primary">Add</button>
    </div>
  );
}

export default Input;
