function createFoodArray() {
	var food_array = 
		{'hot dog': '3.25',
		'french fries':'2.00',
		'drink':'1.50'};
	return food_array;
}
function processFood() {
	var hot_dogs = document.getElementById("hotdog").value;
	var french_fries = document.getElementById("frenchfries").value;
	var drinks = document.getElementById("drinks").value;
	var food_array = createFoodArray();
	hot_dog_cost = food_array[0];
	french_fries_cost = food_array[1];
	drinks_cost = food_array[2];
	var cost = []
	i = 0;
	for (var key in food_array) {
		cost[i] = food_array[key];
		i++;
	}
	var hd_cost = Number(hot_dogs) * Number(cost[0]);
	var ff_cost = Number(french_fries) * Number(cost[1]);
	var d_cost = Number(drinks) * Number(cost[2]);
	var subtotal = hd_cost + ff_cost + d_cost;
	var tax = 0;
	var total = 0;
	if (subtotal >= 20) {
		discount = (subtotal * 0.2);
		subtotal_w_disc = subtotal - discount;
		tax = subtotal * .0625;
		total = tax + subtotal; 
		alert("You purchased " + hot_dogs 
		+ " hot dogs, " + french_fries + " french fries, and " +
		 drinks + " drinks. Your subtotal is: $" + subtotal.toFixed(2) 
		 + " and you received a $" + discount.toFixed(2) + " discount. So your subtotal is now $" 
		 + subtotal_w_disc.toFixed(2) + " Your tax is $" + tax.toFixed(2) 
		 + " and your total comes to $" + total.toFixed(2) 
		 + ". Thanks so much for ordering from Joe's Dot Dog stand!")
	}
	else {
		tax = subtotal * .0625;
		total = tax + subtotal;
		alert("You purchased " + hot_dogs 
		+ " hot dogs, " + french_fries + " french fries, and " +
		 drinks + " drinks. Your subtotal is: $" + subtotal.toFixed(2) 
		 + " Your tax is $" + tax.toFixed(2) + " and your total comes to $" + total.toFixed(2) 
		 + ". Thanks so much for ordering from Joe's Hot Dog stand!")
	}
}







