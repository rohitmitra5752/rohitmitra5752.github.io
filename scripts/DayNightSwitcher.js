$(function(){
	$("#dayNightSwitcher > #dnSwitcherBox").change(function(){
		if (this.checked) {
			$("body").removeClass("day").addClass("night");
		} else {
			$("body").removeClass("night").addClass("day");
		}
	});
});