$.fn.dataTable.ext.type.order['grade-pre'] = function ( d ) {
	var grade = String(d).replace( /<[\s\S]*?>/g, "" );
	switch ( grade ) {
		case 'A+': return 1;
		case 'A':  return 2;
		case 'A-': return 3;
		case 'B+': return 4;
		case 'B':  return 5;
		case 'B-': return 6;
		case 'C+': return 7;
		case 'C':  return 8;
		case 'C-': return 9;
		case 'T':  return 10;
		case 'F':  return 99;
	}
	return 100;
};

$(document).ready(function() {
	$('#report thead tr th#https_provided').each( function() {
	    this.setAttribute( 'title', "Does the website provide HTTPS?");
	});
	$('#report thead tr th#https_required').each( function() {
	    this.setAttribute( 'title', "Does the website require HTTPS?");
	});
	$('#report thead tr th#grade').each( function() {
	    this.setAttribute( 'title', "Grade from Qualys SSL Labs");
	});
	$('#report thead tr th#dnssec').each( function() {
	    this.setAttribute( 'title', "Does the domain use DNSSEC?");
	});
	$('#report thead tr th#tlsa').each( function() {
	    this.setAttribute( 'title', "Are TLSA resource records (DANE) published for the website?");
	});

	var tlsTable = $('#report').DataTable({	
		"pageLength": 25,
		"columns": [
			null,
			null,
			null,
			null,
			null,
			null,
			{ "type": "grade" },
			null,
			null
		]
	});

	reportTable.$('td').tooltip({
		"delay": 0,
		"track": true,
		"fade": 100
	});
});
