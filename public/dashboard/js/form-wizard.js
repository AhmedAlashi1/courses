$(function() {
	'use strict'
	$('#wizard1').steps({
		headerTag: 'h3',
		bodyTag: 'section',
		autoFocus: true,
		titleTemplate: '<span class="number">#index#<\/span> <span class="title">#title#<\/span>'
	});
	$('#wizard2').steps({
		headerTag: 'h3',
		bodyTag: 'section',
		autoFocus: true,
		titleTemplate: '<span class="number">#index#<\/span> <span class="title">#title#<\/span>',
		onStepChanging: function(event, currentIndex, newIndex) {

			if (currentIndex < newIndex) {
				// Step 1 form validation
				if (currentIndex === 0) {
					// var fname = $('#firstname').parsley();
					var validationFormCheck3 = $('#validationFormCheck3').parsley();
					var validationFormCheck4 = $('#validationFormCheck4').parsley();
					if (validationFormCheck3.isValid() && validationFormCheck4.isValid()) {
						return true;
					} else {
                        validationFormCheck4.validate();
                        validationFormCheck3.validate();
					}
				}
                if (currentIndex === 1) {
                    // var fname = $('#firstname').parsley();
                    var validationFormCheck5 = $('#validationFormCheck5').parsley();
                    var validationFormCheck6 = $('#validationFormCheck6').parsley();
                    if (validationFormCheck5.isValid() && validationFormCheck6.isValid()) {
                        return true;
                    } else {
                        validationFormCheck5.validate();
                        validationFormCheck6.validate();
                    }
                }
                if (currentIndex === 2) {
                    // var fname = $('#firstname').parsley();
                    var validationFormCheck7 = $('#validationFormCheck7').parsley();
                    var validationFormCheck8 = $('#validationFormCheck6').parsley();
                    if (validationFormCheck7.isValid() && validationFormCheck8.isValid()) {
                        return true;
                    } else {
                        validationFormCheck7.validate();
                        validationFormCheck8.validate();
                    }
                }
                if (currentIndex === 3) {
                    // var fname = $('#firstname').parsley();
                    var validationFormCheck9 = $('#validationFormCheck9').parsley();
                    var validationFormCheck10 = $('#validationFormCheck10').parsley();
                    if (validationFormCheck9.isValid() && validationFormCheck10.isValid()) {
                        const radioInputs = document.querySelectorAll('input[name="schedules"]');
                        let selectedValue = "";
                        radioInputs.forEach(function(radio) {
                            if (radio.checked) {
                                selectedValue = radio.value;
                            }
                        });
                        return true;
                    } else {

                        validationFormCheck9.validate();
                        validationFormCheck10.validate();
                    }
                }
                if (currentIndex === 4) {
                    // var fname = $('#firstname').parsley();
                    console.log("currentIndex" + currentIndex);
                    var validationFormCheck13 = $('#validationFormCheck7').parsley();
                    if (validationFormCheck13.isValid()) {
                        const radioInputs = document.querySelectorAll('input[name="schedules"]');
                        let selectedValue = "";
                        radioInputs.forEach(function(radio) {
                            if (radio.checked) {
                                selectedValue = radio.value;
                            }
                        });
                        var ParentDay = document.getElementById("Days_Div");
                        switch (selectedValue){
                            case '3_days':
                                ParentDay.children[0].style.display = "block";
                                ParentDay.children[1].style.display = "block";
                                ParentDay.children[2].style.display = "block";
                                ParentDay.children[3].style.display = "none";
                                ParentDay.children[4].style.display = "none";
                                ParentDay.children[5].style.display = "none";
                                break;
                            case '4_days':
                                ParentDay.children[0].style.display = "block";
                                ParentDay.children[1].style.display = "block";
                                ParentDay.children[2].style.display = "block";
                                ParentDay.children[3].style.display = "block";
                                ParentDay.children[4].style.display = "none";
                                ParentDay.children[5].style.display = "none";
                                break;
                            case '5_days':
                                ParentDay.children[0].style.display = "block";
                                ParentDay.children[1].style.display = "block";
                                ParentDay.children[2].style.display = "block";
                                ParentDay.children[3].style.display = "block";
                                ParentDay.children[4].style.display = "block";
                                ParentDay.children[5].style.display = "none";
                                break;
                            case '6_days':
                                ParentDay.children[0].style.display = "block";
                                ParentDay.children[1].style.display = "block";
                                ParentDay.children[2].style.display = "block";
                                ParentDay.children[3].style.display = "block";
                                ParentDay.children[4].style.display = "block";
                                ParentDay.children[5].style.display = "block";
                                break;
                            default:
                                ParentDay.children[0].style.display = "block";
                                ParentDay.children[1].style.display = "block";
                                ParentDay.children[2].style.display = "block";
                                ParentDay.children[3].style.display = "none";
                                ParentDay.children[4].style.display = "none";
                                ParentDay.children[5].style.display = "none";
                                break;
                        }
                        //id submit button disable block
                        console.log("block");
                        document.getElementById("submits").style.display = "block";

                        return true;
                    } else {
                        validationFormCheck13.validate();
                    }
                }
                if (currentIndex === 5) {

                    // var fname = $('#firstname').parsley();
                    var validationFormCheck17 = $('#validationFormCheck17').parsley();
                    if (validationFormCheck17.isValid()) {
                        return true;
                    } else {
                        validationFormCheck17.validate();
                    }
                }
			} else {

				return true;
			}
		}
	});
	$('#wizard3').steps({
		headerTag: 'h3',
		bodyTag: 'section',
		autoFocus: true,
		titleTemplate: '<span class="number">#index#<\/span> <span class="title">#title#<\/span>',
		stepsOrientation: 1
	});
});
