    var data = '{"name": "mkyong","age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';

	var json = JSON.parse(data);
			
	alert(json["name"]); //mkyong
	alert(json.name); //mkyong
	
	alert(json.address.streetAddress); //88 8nd Street
	alert(json["address"].city); //New York
			
	alert(json.phoneNumber[0].number); //111 111-1111
	alert(json.phoneNumber[1].type); //fax
			
	alert(json.phoneNumber.number); //undefined

