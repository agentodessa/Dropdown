;(function ($) {
	'use strict';
	$.fn.dropdown = function (parameters) {
		console.log(parameters);
		console.log($(this));
		var $original = $(this);
		var moduleSelector = $original.selector || '';




		var settings = $.extend(true, {}, $.fn.dropdown.settings, parameters);





		var selector = settings.selector;
		var module;

		var select = $(selector);
		console.log(select);

		module = {
			init: function () {

			},
			destroy: function () {

			},
			open: function () {

			},
			close: function () {

			}
		};

		$.fn.dropdown.settings = {

			onChange: function (value, text, $selected) {
			},
			selector: {
				dropdown: '.select',
				icon: '.icon',
				item: '.item',
				label: '.label'
			},
			className: {
				active: 'active',
				visible: 'visible'
			}
		};

		$.fn.dropdown.settings.templates = {
			dropdown: function (select) {
				console.log(select)
				var values = select.values || {},
					html = ''
					;
				html += '<i class="dropdown icon"></i>';
				html += '<div class="text"></div>';
				html += '<div class="menu">';
				$.each(select.values, function (index, option) {
					html += (option.disabled)
						? '<div class="disabled item" data-value="' + option.value + '">' + option.name + '</div>'
						: '<div class="item" data-value="' + option.value + '">' + option.name + '</div>'
					;
				});
				html += '</div>';
				return html;
			}
		}
		module.init();
	};

	////TODO
	//(function (name, context, definition) {
	//	if (typeof define === 'function' && define.amd) {
	//		define(definition);
	//	}
	//	else if (typeof module !== 'undefined' && module.exports) {
	//		module.exports = definition();
	//	}
	//	else {
	//		context[name] = definition();
	//	}
	//})
})

(jQuery);