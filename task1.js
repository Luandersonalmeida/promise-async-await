// Task 1: Translate the story into code.
const onMyBirthday = (isKayoSick) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			if (!isKayoSick){
				resolve(2);
			} else {
				reject(new Error("I am sad"));
			}
		}, 2000);
		
	});
}
console.time("Timer")
onMyBirthday(false).then((result) => {
	console.timeLog("Timer")
	console.log(`I have ${result} cakes`)
}).catch((error) => {
	console.timeLog("Timer")
	console.log(error)
}).finally(() => {
	console.log("Party")
})