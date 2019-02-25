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

/* // *************************************************
// Automatically Execute the Custom Search for Printed Cards Required 

//	console.log(url);
//	console.log(refUrl);
	
	//NB depends on Id number of the Custom Search - will change.
	var result = url.includes("civicrm/contact/search/custom?csid=17");
	if (result) {
		jQuery('input#_qf_Custom_refresh-top').click();
		jQuery('.crm-accordion-body').hide();
		jQuery('.crm-accordion-header').text('Searching ...');
	}
 */	
// Remove all the Actions on the Search Results page, except Print/Merge Document

	var url = window.location.href;
	var refUrl = document.referrer;
	var result = url.includes("civicrm/contact/search/custom?csid=17");
	if (result) {
//		console.log('Clearing Actions');
		jQuery('select#task option[value!="3"]').not(':first-child').remove();
	}
	
// Simplify the Print/Merge Document page for Membership Cards

	result = url.includes("civicrm/contact/search/custom?_qf_PDF_display") && 
		refUrl.includes("civicrm/contact/search/custom?csid=17");
	if (result) {
		console.log ('Clearing PDF screen');
	
		jQuery('.crm-contact-task-pdf-form-block table:nth-of-type(1) input.crm-form-file').hide();
		jQuery('.crm-contact-task-pdf-form-block table:nth-of-type(1) tr:nth-of-type(2)').hide();
		jQuery('.crm-contact-task-pdf-form-block select#template').val('71').change();
		
		setTimeout(() => jQuery('.crm-contact-task-pdf-form-block > .crm-accordion-wrapper').hide(), 500);

		jQuery('.crm-submit-buttons #_qf_PDF_upload-bottom').val('Download and clear flags');
		jQuery('.crm-submit-buttons #_qf_PDF_submit_preview-bottom').val('Download');
	}








	
});