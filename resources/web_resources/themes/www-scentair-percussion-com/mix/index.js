$(function(){
  $('#ContainerMix').mixItUp({
	controls: {
		toggleFilterButtons: true,
    	toggleLogic: 'and'
	},
    callbacks: {
      onMixEnd: function(state){
        console.log(state.activeFilter)    
      }
    }
  });
});