/***********************************************************************/
/*                                                                     */
/*    CREATE.JS - Create flight related functionalities                */
/*    Copyright (c) 2013 Yalldo - Developed by lauri@koutaniemi.com    */
/*                                                                     */
/***********************************************************************/

// create flight
function createsubmit() {
	
	// add event and get new events
	ajax("editevent",{id:flightId,name:$("#createname").val(),description:$("#createdesc").val(),start:$("#createdate").val()+" 18:00:00",end:"0000-00-00 00:00:00",sports_id:$("#createsport").val()},function(d) {
		getevents();
		var o = JSON.parse(d);
		if(o.error) info("error: "+o.error);
		else info("flight successfully created");
		page('events');
	});
	
}

