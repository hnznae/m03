console.log('Hello, Welcome to De La Salle University!')

function computeSupply(age, day) {
	 roundedDay = Math.round(day);
	 const maxAge = 100;
	 leftAge = maxAge - age;
	 total = (roundedDay * 365) * (leftAge);

	console.log(`You need to ${total} to last you until the ripe old age of ${maxAge}` +'\n')

	console.log(`You are currently: ${age} years old`)
	console.log(`You take a total amount: ${roundedDay} per day`)
	console.log(`Your maximum life expectancy is: ${maxAge}`)
	console.log(`You have ${leftAge} years left` +'\n')

}
computeSupply(19, 2.4)
computeSupply(80, 4.8)
computeSupply(24, 10)
