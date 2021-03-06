var ctx = document.getElementById("chartContainer");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: (function(){
				   var arr = [];
				   for(var i=0; i<5; i++){
					   arr.push(movieData_Array[i].rankTitle);
				   }
				   return arr;
			   })("Movie Title:"),

			datasets: [{
				label: 'Movie Ratings',
				data: [movieData_Array[0].rating, movieData_Array[1].rating, movieData_Array[2].rating, movieData_Array[3].rating, movieData_Array[4].rating],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: false,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});