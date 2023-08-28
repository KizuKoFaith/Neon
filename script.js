fetch('/maindata.json')

.then(function (response) {

    // The JSON data will arrive here
		return response.json();
  })
.then(function (data) {
    	let display = document.getElementsByClassName("grid");
    	// Loop items from Json
		for(let i = 0; i < data.length; i++){
			let li, div, img, p;
			li = document.createElement('li');
			div = document.createElement('div');
			img = document.createElement('img');
			p = document.createElement('p');
			//Set element attributes
			li.setAttribute('class','w3-card-4');
			div.setAttribute('class','item');
			img.setAttribute('src','');
			p.setAttribute('id','title');
			// Set data to elements 
			p.textContent = data[i].title;
			img.src = data[i].cover;
			// Append child to parent
			div.appendChild(img,p);
			display.appendChild(div);
		}
  })
.catch(function (err) {
    // If an error occured, you will catch it here
		console.log(err);
		window.alert(err);
  });