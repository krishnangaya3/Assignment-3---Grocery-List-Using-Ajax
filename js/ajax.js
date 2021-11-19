function getGroceryList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var groceryData = JSON.parse(this.response);

            var table = document.querySelector('#groceryTable');
            table.innerHTML = "";
            var header = table.createTHead();
            var headerRow = header.insertRow();
            var headerCell = headerRow.insertCell();
            headerCell.innerHTML = 'SL No.';
            headerCell = headerRow.insertCell();
            headerCell.innerHTML = 'Name';
            headerCell = headerRow.insertCell();
            headerCell.innerHTML = 'Quantity';
            headerCell = headerRow.insertCell();
            headerCell.innerHTML = 'Unit';
            headerCell = headerRow.insertCell();
            headerCell.innerHTML = 'Department';
            // headerCell = headerRow.insertCell();
            // headerCell.innerHTML = 'Notes';

            var bodyRow = table.createTBody();
            for(var i=0; i<groceryData.Items.length; i++) {
                var row = bodyRow.insertRow();
                var cell1 = row.insertCell();
                cell1.innerHTML = groceryData.Items[i].SLNo;

                var cell2 = row.insertCell();
                cell2.innerHTML = groceryData.Items[i].Name;

                var cell3 = row.insertCell();
                cell3.innerHTML = groceryData.Items[i].Quantity;

                var cell4 = row.insertCell();
                cell4.innerHTML = groceryData.Items[i].Unit;

                var cell5 = row.insertCell();
                cell5.innerHTML = groceryData.Items[i].Department;

                // var cell6 = row.insertCell();
                // cell6.innerHTML = groceryData.Items[i].Notes;
            }
        }
    }

    xhttp.open('GET', 'data/groceryList.json', true);
    xhttp.send();
}