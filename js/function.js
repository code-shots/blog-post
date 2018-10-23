document.addEventListener('DOMContentLoaded', () => {
	// Creating waypoint
	let waypoint = new Waypoint({
	  element: document.querySelector('#p5'),
	  handler: function() {
			anime({
				targets: '#p5',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 300,
			})

			this.destroy();
	  },
		context: document.querySelector('.article'),
		offset: '100%',
	})
})
