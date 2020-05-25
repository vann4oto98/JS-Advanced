function createArticle() {

	let article = document.createElement('article');
	let h3 = document.createElement('h3');
	let p = document.createElement('p');

	let lable = document.getElementById('createTitle');
	let textarea = document.getElementById('createContent');
	let section = document.getElementById('articles');


	if (lable === null || textarea === null || section === null) {
		throw new Error('ERROR');
	}
	if(lable.value === '' || textarea.value === ''){
		return ;
	}
	h3.innerHTML = lable.value;
	p.innerHTML = textarea.value;

	
	section.appendChild(article);
	article.appendChild(h3);
	article.appendChild(p);
	
	lable.value = '';
	textarea.value = '';
}