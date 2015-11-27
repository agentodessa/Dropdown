;(function ($) {
	'use strict';
	$.fn.dropdown = function (parameters) {
		console.log(parameters);
		$.extend(true, {}, $.fn.dropdown.settings, parameters);
	};







	$.fn.dropdown.settings = {
		onChange: function (value, text, $selected) {
		},
		dropdown: function (select) {
			console.log(select)
			var
				placeholder = select.placeholder || false,
				values = select.values || {},
				html = ''
				;
			html += '<i class="dropdown icon"></i>';
			if (select.placeholder) {
				html += '<div class="default text">' + placeholder + '</div>';
			}
			else {
				html += '<div class="text"></div>';
			}
			html += '<div class="menu">';
			$.each(select.values, function (index, option) {
				html += (option.disabled)
					? '<div class="disabled item" data-value="' + option.value + '">' + option.name + '</div>'
					: '<div class="item" data-value="' + option.value + '">' + option.name + '</div>'
				;
			});
			html += '</div>';
			return html;
		},
		selector : {
			dropdown     : '.select',
			icon         : '> .select.icon',
			item         : '.item',
			label        : '> .label'
		},
		className : {
			active      : 'active',
			visible     : 'visible'
		}
	}


})
(jQuery);