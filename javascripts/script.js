/* Author:
	F.M. Bonnevier
*/

$(document).ready(function() {

	"use strict";

	function ajaxForm () {

		var $swapContainer = $('[data-swap-container]'),
				$swapButton 		= $('[data-form-button]'),

		bindButtonEvent = function () {
			$swapButton.on('click', function (e) {
				e.preventDefault();
				$( '.bubble').load( '/form.html .survey');
			});
		}();
	}

ajaxForm();

});
