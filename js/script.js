function read_file(fileName, id) {
    $.get(fileName, function(data) {
		//data = data.replace(/[\n]/g, "\n").replace(/[\t]+/g, "");
		//$("#"+id).html(data);
		data = "<pre style='background: #393e42; color:white;'>" + data + "</pre>";
		$("#"+id).append(data);
    }, 'text');
};
