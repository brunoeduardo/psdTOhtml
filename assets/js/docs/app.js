(function(){
	var app = angular.module('fooseshoes' , [ ]);


	app.controller('bannerShow', function(){
		this.itens = banner;
	});

	var banner = [
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},				
	];


app.controller('productShow', function(){
		this.product = products;
	});

	var products = [
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},
		{
			title: 'Pink shoes	2013 collections',
			price: 145.99,
			description: 'Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget... ',
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/banner-image.jpg',
			labelDescr:'Now af $ 145,99',
			labelTitle:'Pink Shoes',
		},				
	];

app.controller('productShoes', function(){
		this.itens = shoes;
	});


	var shoes = [
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
		},
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
			onsale: true,
		},
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
		},				
		
	];

app.controller('productBest', function(){
		this.best = bestShoes;
	});


	var bestShoes = [
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
		},
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
		},
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
			outof: true,
		},				
		
	];


app.controller('allProducts', function(){
		this.shoesAll = allShoes;
	});


	var allShoes = [
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
			onsale: true,
		},
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
		},
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
			outof: true,
		},				
				{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
		},
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
		},
		{
			nameProduct: 'Nome do produto',
			priceProduct: 145.99,
			linkView: '#',
			linkShare: '#',
			linkWish: '#',
			linkBuy: '#',
			imgUrl: 'assets/images/shoes.jpg',
			outof: true,
		},	
		
	];

})();