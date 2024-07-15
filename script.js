function firstNonRepeatedChar(str) {
 // Write your code here
	let strCount= {}
	for(let i of str){
		strCount[i] = (strCount[i] || 0) + 1
	}
	for(let i of str){
		if(strCount[i] === 1){
			return i
		}
	} 
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
