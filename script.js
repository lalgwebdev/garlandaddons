jQuery(document).ready(function(){
//	console.log("Page Loaded");
	
// ************************************************
// Set Receipt wanted on Confirm Payment page
// It's loaded by AJAX so have to use Event Capture to pick up the 'load' event.

	document.body.addEventListener("load", setReceipt, true);

	function setReceipt(event) {
//	console.log('load event');
		// Check the Receipt checkbox on the Pay Later form.
		jQuery('.CRM_Contribute_Form_AdditionalPayment #is_email_receipt').attr('checked', true);
	}
	
});
