$(function(){
	$("#dayNightSwitcher > .dayNightIconSwitcher > .dnSwitcherBox").change(function(){
		if (this.checked) {
			$("body").removeClass("day").addClass("night");
			$(this).parent().siblings(".dayNightTextSwitcher").addClass("hideDay");
		} else {
			$("body").removeClass("night").addClass("day");
			$(this).parent().siblings(".dayNightTextSwitcher").removeClass("hideDay");
		}
	});
	
	$("#dayNightSwitcher > .dayNightTextSwitcher").click(function(){
		if ($(this).hasClass("hideDay")) {
			$(this).removeClass("hideDay");
			$("body").removeClass("night").addClass("day");
			$(this).siblings(".dayNightIconSwitcher").children(".dnSwitcherBox").prop('checked',false);
		} else {
			$(this).addClass("hideDay");
			$("body").removeClass("day").addClass("night");
			$(this).siblings(".dayNightIconSwitcher").children(".dnSwitcherBox").prop('checked',true);
		}
	});
});