// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
//Sort
function swap(items, firstIndex, secondIndex){
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}
function bubbleSort(items,variable){
	var len = items.length;
	var stop;
	for (i=0; i < len; i++){
		for (j=0,stop=len-i;j < stop; j++){
			if (j+1 != items.length) {
				if (items[j][variable] < items[j+1][variable]){
					swap(items, j, j+1)
				}
			}
		}
	}
} 
//Populate Table
var count = 1;
function popTable(items,variable,variable2,section){
	if (count != 1){
		for (i=0; i<items.length; i++){
			document.getElementById("table").deleteRow(-1);
		}
	}
	else{count++;}
	for (i=0; i < items.length; i++){
		var table = document.getElementById(section);
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = items[i].rankTitle;
		cell2.innerHTML = items[i][variable];
		cell3.innerHTML = items[i][variable2];
	}
}

//Sort by Condition
var genreArray = movieData_Array;
var openArray = movieData_Array;
var ratingArray = movieData_Array;
var totalArray = movieData_Array;

function bttnClick(condition) {
	if (condition == "Genre") {bubbleSort(genreArray,"Genre");popTable(genreArray,"rating","Genre","table");document.getElementById("table").rows[0].cells[2].innerHTML = "Genre";}
	if (condition == "rating") {bubbleSort(ratingArray,"rating");popTable(movieData_Array,"rating","totalRevenue","table");document.getElementById("table").rows[0].cells[2].innerHTML = "Total Revenue";}
	if (condition == "openRevenue") {bubbleSort(openArray,"openRevenue");popTable(openArray,"rating","openRevenue","table");document.getElementById("table").rows[0].cells[2].innerHTML = "Opening Weekend Revenue";}
	if (condition == "totalRevenue") {bubbleSort(totalArray,"totalRevenue");popTable(totalArray,"rating","totalRevenue","table");document.getElementById("table").rows[0].cells[2].innerHTML = "Total Revenue";}
}