$(document).ready(()=>{
	
	var collection = [
	   {
		  title: "Death’s Daughter and the Ebony Blade",
		  source: "/series/shinigami_sodaterareta.html",
		  image: "https://cdn.novelupdates.com/images/2019/09/shinigami_sodaterareta_1d.jpg"
		}
	]
	
	let ul = $('#post');
	
	for(let x = 0;x < collection.length;x++){
		
		let li = document.createElement('li');
		let a = document.createElement('a');
        let img = document.createElement('img');
        let p = document.createElement('p');
        
        a.setAttribute('href','');
        img.setAttribute('src','');
        
        a.href = collection[x].source;
        p.textContent = collection[x].title;
        img.src = collection[x].image;
        
        a.append(img);
        a.append(p);
        li.append(a);
        ul.append(li);
		
	}
	
})