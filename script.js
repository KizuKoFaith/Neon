fetch('maindata.json')
.then(function (response) {
    // The JSON data will arrive here
		return response.json();
  })
.then(function (data) {
    	let display = document.getElementById("items");
    	// Loop items from Json
		for(let i = 0; i < data.length; i++){
			let encode = "<div class='item w3-col m4 l3'><img src='"+data[i].cover+"'/><p id='title'>"+data[i].title+"</p></div>";
			display.innerHTML = encode;
		}
  })
.catch(function (err) {
    // If an error occured, you will catch it here
		console.log(err);
		window.alert(err);
  });