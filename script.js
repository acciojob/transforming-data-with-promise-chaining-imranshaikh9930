//your JS code here. If required
const inputVal = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click",()=>{
	new Promise((resolve,reject)=>{

	setTimeout(()=>{

		output.textContent = `Result: ${inputVal.value}`
		resolve(inputVal.value);
		
		
	},2000)
	
	}).then((res)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let result = inputVal.value * 2;
				output.textContent = `Result: ${result}`;

				resolve(result);
			},1000)
		})
	}).then((number)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let newNumber =  number - 3;
				output.textContent = `Result:${newNumber}`;
				resolve(newNumber);
			},1000)
		})
	}).then((number)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let num = number +  10;
				output.textContent = `Result: ${num}`;
				resolve(num);
			},1000)
		})
	}).then((finalResult)=>{
		output.textContent =  `Final Result: ${finalResult}`;
	})
	
	
})
