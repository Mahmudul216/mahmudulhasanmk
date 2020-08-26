$(document).ready(function(){
	
	$("#web").click(function(){
		$(".web-design").show(function(){
			$(".photography").hide();
			$(".all-work").hide();
		});
	});
	 $("#photography").click(function(){
		 $(".photography").show(function(){
			 $(".web-design").hide();
			 $(".all-work").hide();
		 });
	 });

	 $("#all-work").click(function(){
		$(".all-work").show(function(){
			$(".web-design").hide();
			$(".photography").hide();
		});
	});
});