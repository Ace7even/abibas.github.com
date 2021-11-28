var cart={};

$.getJSON('goods.json', function(data) {
	var goods= data;
	//console.log(goods);
	checkCart();
	showCart();

	function showCart(){
		var out='';
		for (var key in cart){
			out+='<button class="delete"  data-art="'+key+'">x</button>';
			out+='<img src="'+goods[key].image+'" width="48">';
			out+= goods[key].name;
			out+='<button class="minus" data-art="'+key+'">-</button>';
			out+= cart[key];
			out+='<button class="plus" data-art="'+key+'">+</button>';
			out+= cart[key]*goods[key].cost;
			out+='<br>';
		}
		$('#my-cart').html(out);
		$('.plus').on('click', plusgoods);
		$('.minus').on('click', minusgoods);
		$('.delete').on('click', deletegoods);
	}
	function plusgoods(){
		var articul = $(this).atr('data-art');
		cart[articul]++;
		saveCartToLS();
		showCart();
	}
	function minusgoods(){
		var articul = $(this).atr('data-art');
		if (cart[articul]>1) {
			cart[articul]--;
		}
		else{
		 delete cart[articul];
		}
		saveCartToLS();
		showCart();
	}
	function deletegoods(){
		var articul = $(this).atr('data-art');
		}
		saveCartToLS();
		showCart();

});

function checkCart(){
	//проверяю наличие корзины в LocalStorage;
	if( localStorage.getItem('cart')!=null){
		cart= JSON.parse(localStorage.getItem('cart'));
	}
}

function saveCartToLS(){
	localStorage.setItem('cart', JSON.stingify(cart));
}