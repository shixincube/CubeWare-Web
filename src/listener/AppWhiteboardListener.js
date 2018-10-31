export class AppWhiteboardListener {
	constructor(vue) {
		this.vue = vue;
	};

	onWhiteboardCreated(whiteboard, from){
		this.vue.$bus.emit('onWhiteboardCreated', {
			whiteboard: whiteboard,
			from: from
		});
	};

	onWhiteboardDestroyed(whiteboard, from){
		this.vue.$bus.emit('onWhiteboardDestroyed', {
			whiteboard: whiteboard,
			from: from
		});
	};

	onWhiteboardApplied(whiteboard, applier){
		this.vue.$bus.emit('onWhiteboardApplied', {
			whiteboard: whiteboard,
			applier: applier
		});
	};

	onWhiteboardRejectApplied(whiteboard, from, applier){
	
		this.vue.$bus.emit('onWhiteboardRejectApplied', {
			whiteboard: whiteboard,
			applier: applier,
			from: from
		});
	};

	onWhiteboardApplyJoined(whiteboard, from, applier){
		
		this.vue.$bus.emit('onWhiteboardApplyJoined', {
			whiteboard: whiteboard,
			applier: applier,
			from: from
		});
	};

	onWhiteboardInvited(whiteboard, from, invites){
		this.vue.$bus.emit('onWhiteboardInvited', {
			whiteboard: whiteboard,
			invites: invites,
			from: from
		});
	};

	onWhiteboardRejectInvited(whiteboard, from, rejectMember){
		console.log('22222222222222222222')
		this.vue.$bus.emit('onWhiteboardRejectInvited', {
			whiteboard: whiteboard,
			rejectMember: rejectMember,
			from: from
		});
	};

	onWhiteboardInviteJoined(whiteboard, from, joinedMember){
		console.log('1111111111111111111')
		this.vue.$bus.emit('onWhiteboardInviteJoined', {
			whiteboard: whiteboard,
			joinedMember: joinedMember,
			from: from
		});
	};

	onWhiteboardJoinFromOthers(whiteboard, from, joinedMember){
		this.vue.$bus.emit('onWhiteboardJoinFromOthers', {
			whiteboard: whiteboard,
			joinedMember: joinedMember,
			from: from
		});
	};

	onSlideUploading(whiteboard, slide, processed, total){
		this.vue.$bus.emit('onSlideUploading', {
			whiteboard: whiteboard,
			slide: slide,
			processed: processed,
			total: total
		});
	};

	onSlideUploadCompleted(whiteboard, slide){
		this.vue.$bus.emit('onSlideUploadCompleted', {
			whiteboard: whiteboard,
			slide: slide
		});
	};

	onSlideUpdated(whiteboard, slide){
		this.vue.$bus.emit('onSlideUpdated', {
			whiteboard: whiteboard,
			slide: slide
		});
	};

	onWhiteboardFailed(whiteboard, error){
		this.vue.$bus.emit('onWhiteboardFailed', {
			whiteboard: whiteboard,
			error: error
		});
	};

	onFileShared(whiteboard, file) {
		this.vue.$bus.emit('onFileShared', {
			whiteboard: whiteboard,
			file: file
		});
	};

	onSlide(whiteboard, slide) {
		this.vue.$bus.emit('onSlide', {
			whiteboard: whiteboard,
			slide: slide
		});
	};

	onCleanup(whiteboard) {
		this.vue.$bus.emit('onCleanup', {
			whiteboard: whiteboard
		});
	};

	onWhiteboardJoined(whiteboard, joinedMember) {
		this.vue.$bus.emit('onWhiteboardJoined', {
			whiteboard: whiteboard,
			joinedMember: joinedMember
		});
	};

	onWhiteboardQuited(whiteboard, quitedMember) {
		this.vue.$bus.emit('onWhiteboardQuited', {
			whiteboard: whiteboard,
			quitedMember: quitedMember
		});
	};
}
