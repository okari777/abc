function printMem(id, email, research, time, side, status, name){

	data = '<div class="col-md-3 col-sm-4">'+
				'<div class="hexagon hexagonteam gallery-item">' +
				'<div class="hexagon-in1">' + 
				'<div class="hexagon-in2" style="background-image: url(images/Members/'  + id +'.jpg);">' +
				'<div class="overlay">'+
				'<a href="mailto:'+ email +'">' + 
				'<i class="fa fa-envelope"></i>' +
				'</a></div><div class="clear"></div>' + 
				'</div></div></div></div>' + 
				'<div class="col-md-3 col-sm-8 templatemo_servicetxt" >' + 
				'<h2>'+ name +'</h2>' + 			
				'<p><b>Graduate Time: </b>' + time + '<br><b>Research Area: </b>' + research + '<br><b>Status: </b>' + status + '</p></div>';
					
				if (side == 1){
					data ='<div class="templatemo_servicecol2">' + data + '</div>';
				}
	//data =   '<div>' + id + ': ' +  name +'</div>' ;
	document.getElementById(id).innerHTML=data;
}

function printTitle(id, title){
	data = '<div class="col-md-3 col-sm-4">'+
				 '<div class="hexagon hexagonteam gallery-item">' +
				'<div class="hexagon-in1">' + 
				'<div class="hexagon-in2" style="background-image: url(images/mark/'  + id +'.jpg);">' +
				'</div></div></div></div>'+
				'<div class="col-md-3 col-sm-8 templatemo_servicetxt" >' + 
				'<h2>'+ title +'</h2>' + 			
				'</div>';
	document.getElementById(id).innerHTML=data;
}
