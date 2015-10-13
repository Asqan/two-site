$(document).ready(function () {
	$("#name").on('click', function () {
		$("#name").addClass('animated zoomOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(this).removeClass('animated zoomOutUp');


			$("#mail").on('click', function () {
				$("#mail").addClass('animated zoomOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
					$(this).removeClass('animated zoomOutRight');
					
					$('#area').on('click', function () {
						$('#area').addClass('animated zoomInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass('animated zoomInLeft');


					$('#btn').on('click', function () {
						$('#btn').addClass('animated zoomOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass('animated zoomOutLeft');

						});
					});
				});
			});
		});
	  });
	 });
	});
	});
		