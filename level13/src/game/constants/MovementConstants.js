define(['ash'], function (Ash) {

	var MovementConstants = {
	
		BLOCKER_TYPE_GAP: 1,
		BLOCKER_TYPE_GANG: 3,
		BLOCKER_TYPE_DEBRIS: 4,
		BLOCKER_TYPE_WASTE_RADIOACTIVE: 5,
		BLOCKER_TYPE_WASTE_TOXIC: 6,
		
		PASSAGE_TYPE_HOLE: 1,
		PASSAGE_TYPE_ELEVATOR: 2,
		PASSAGE_TYPE_STAIRWELL: 3,
		PASSAGE_TYPE_BLOCKED: 4,
	
	};
	
	return MovementConstants;
	
});
