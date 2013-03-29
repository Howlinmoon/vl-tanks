/*	future comparison
DPS		10		30		15	25		20+aa
VS		Heavy		Tiger		Cruis	Launcher	Snip		win	loss
-------------------------------------------------------------------------------------------------
Heavy		n/a		--		++	--		--	|	1	3	but survive long, need more abilities?
Tiger		++		n/a		++	--		--	|	2	2
Cruis		--		--		n/a	0		0	|	0	2	but fast, need more abilities to be usefull
Launch		++		++		0	n/a		0	|	2	0
Sniper		++		++		0	0		n/a	|	2	0
-------------------------------------------------------------------------------------------------

more ideas:
	1 or 2 skill for each tank
	heavy - some skills for save team?
	tiger - less defence?
	cruiser - some skill for team support, or survival? evasion?
	launcher - aoe skill?
	sniper - some semi-hide skill?
*/

//Heavy
TYPES.push({
	name: 'Heavy',
	type: 'tank',
	description: ["Heavy armor", "Low damage", "Weak against Sniper and Tiger"],
	life: [230, 20],				//[tank life in level 0, life increase in each level]
	damage: [10, 1],	//10 dps		//[tank damage in level 0, damage increase in each level]
	range: 80,					//tank shooting range
	scout: 100,					//tank scout range
	armor: [50, 0.5, 70],				//[tank armor in level 0, armor increase in each level, max armor]
	speed: 30,
	attack_delay: 1,
	turn_speed: 4,
	//no_repawn: 1,
	//no_collisions: 1,
	//bonus: 1,					//tank will be available only in single mode, random and mirror
	//ignore_armor: 1,				//tank will ignore armor
	size: ['M', 50],				//[tank size: S/M/L, icon width and height(same)]
	icon_top: ['top1.png', 'top2.png'],		//tank base images
	icon_base: ['base1.png', 'base2.png'],		//tank top images
	preview: 'preview.png',				//tank preview image
	abilities: [					//name; skill icon; active or passive; broadcast activation in multiplayer? 0-no, 1-yes, 2-yes, but on later
		{name: 'Soldiers',	passive: false,		broadcast: 0}, 
		{name: 'Nothing',	passive: false,		broadcast: 1},
		],
	bullet: 'bullet.png',				//bullet_image
	fire_sound: 'shoot.ogg',			//shooting sound
	accuracy: 90,					//chance to hit target, %
	});

//Tiger
TYPES.push({
	name: 'Tiger',
	type: 'tank',
	description: ["Medium armor", "Huge damage", "Strong against slow enemies", "Weak against fast enemies"],
	life: [200, 13],
	damage: [30, 1],	//30 dps
	range: 80,
	scout: 100,
	armor: [40, 0.3, 50],
	speed: 25,
	attack_delay: 1,
	turn_speed: 3,
	size: ['M', 50],
	preview: 'preview.png',
	icon_top: ['top1.png', 'top2.png'],
	icon_base: ['base1.png', 'base2.png'],
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 1}, 
		],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//Cruiser
TYPES.push({
	name: 'Cruiser',
	type: 'tank',
	description: ["Light armor", "Fast", "Weak against all", "Strong in team play"],
	life: [200, 13],
	damage: [15, 1],	//15 dps
	range: 90,
	scout: 110,
	armor: [20, 0.3, 30],
	speed: 35,
	attack_delay: 1,
	turn_speed: 5,
	size: ['M', 50],
	preview: 'preview.png',
	icon_top: ['top1.png', 'top2.png'],
	icon_base: ['base1.png', 'base2.png'],
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 1}, 
		],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//Launcher
TYPES.push({
	name: 'Launcher',
	type: 'tank',
	description: ["Missiles", "Long range, but slow", "Penetrates armor", "High accuracy"],
	life: [100, 10],
	damage: [50, 5],	//25 dps
	range: 150,
	scout: 110,
	armor: [10, 0, 10],
	speed: 25,
	attack_delay: 2,
	turn_speed: 2,
	size: ['M', 50],
	preview: 'preview.png',
	icon_top: ['top1.png', 'top2.png'],
	icon_base: ['base1.png', 'base2.png'],
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 1}, 
		],
	bullet: 'missle.png',
	fire_sound: 'shoot.ogg',
	accuracy: 100,
	});

//Sniper
TYPES.push({
	name: 'Sniper',
	type: 'tank',
	description: ["Long range", "Huge damage", "Penetrates armor", "Slow speed and attack"],
	life: [100, 10],
	damage: [50, 2],	//25 dps
	range: 150,
	scout: 110,
	armor: [10, 0, 10],
	speed: 23,
	attack_delay: 2,
	turn_speed: 2,
	size: ['M', 50],
	ignore_armor: 1,
	preview: 'preview.png',
	icon_top: ['top1.png', 'top2.png'],
	icon_base: ['base1.png', 'base2.png'],
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 1}, 
		],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 80,
	});

//Miner
TYPES.push({
	name: 'Miner',
	type: 'tank',
	description: ["Lands mines", "Low damage", "Light armor", "Weak against air and long range units"],
	life: [200, 10],
	damage: [10, 1],	//10 dps
	range: 80,
	scout: 100,
	armor: [20, 0.3, 30],
	speed: 30,
	attack_delay: 1,
	turn_speed: 4,
	size: ['M', 50],
	icon_top: ['top1.png', 'top2.png'],
	icon_base: ['base1.png', 'base2.png'],
	preview: 'preview.png',
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 0}, 
		],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//Tech
TYPES.push({
	name: 'Tech',
	type: 'tank',
	description: ["Can send virus to deactivate enemy", "Low damage", "Light armor", "Weak against air and long range units"],
	life: [200, 10],
	damage: [10, 1],	//10 dps
	range: 80,
	scout: 100,
	armor: [20, 0.3, 30],	
	speed: 30,
	attack_delay: 1,
	turn_speed: 4,
	size: ['M', 50],
	icon_top: ['top1.png', 'top2.png'],
	icon_base: ['base1.png', 'base2.png'],
	preview: 'preview.png',
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 0}, 
		],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//Truck
TYPES.push({
	name: 'Truck',
	type: 'tank',
	description: ["Uses soldiers for attack", "Very low damage", "Depends on soldiers only"],
	life: [200, 10],
	damage: [5, 1],	//5 dps
	range: 80,
	scout: 100,
	armor: [10, 0, 10],
	speed: 30,
	attack_delay: 1,
	turn_speed: 4,
	size: ['M', 50],
	icon_top: [],
	icon_base: ['base1.png', 'base2.png'],
	preview: 'preview.png',
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 0}, 
		],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//Helicopter
TYPES.push({
	name: 'Helicopter',
	type: 'tank',
	description: ["Medium armor", "Missiles", "Strong against all"],
	life: [200, 10],
	damage: [20, 1],	//20 dps
	range: 80,
	scout: 100,
	armor: [40, 0.5, 50],	
	speed: 30,
	attack_delay: 1,
	turn_speed: 6,
	bonus: 1,
	no_collisions: 1,
	size: ['M', 50],
	icon_top: [],
	icon_base: ['base1.png', 'base2.png'],
	preview: 'preview.png',
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 0}, 
		],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//Bomber
TYPES.push({
	name: 'Bomber',
	type: 'tank',
	description: ["Bombs", "Fast speed", "Low defence"],
	life: [100, 10],
	damage: [15, 1],	//15 dps
	range: 60,
	scout: 100,
	armor: [10, 0, 10],
	speed: 35,
	attack_delay: 1,
	turn_speed: 4,
	bonus: 1,
	no_collisions: 1,
	size: ['M', 50],
	icon_top: [],
	icon_base: ['base1.png', 'base2.png'],
	preview: 'preview.png',
	abilities: [
		{name: 'Soldiers',	passive: false,		broadcast: 0}, 
		],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//Soldier
TYPES.push({
	name: 'Soldier',
	type: 'human',
	description: ["Infantry", "No armor", "Low damage", "Supports in battle"],
	life: [50, 5],
	damage: [7, 1],	//7 dps
	range: 50,
	scout: 60,
	armor: [0, 0, 0],
	speed: 25,
	attack_delay: 1,
	turn_speed: 4,
	no_repawn: 1,
	size: ['S', 30],
	preview: 'preview.png',
	icon_top: [],
	icon_base: ['top1.png', 'top2.png'],
	abilities: [],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//TOWER
TYPES.push({
	name: 'Tower',
	type: 'tower',
	description: ["Tower for defence"],
	life: [700,0],
	damage: [30, 0],	//30 dps
	range: 110,
	scout: 120,
	armor: [0,0,0],
	speed: 0,
	attack_delay: 1,
	turn_speed: 4,
	no_repawn: 1,
	size: ['L', 50],
	preview: '',
	icon_top: ['top1.png', 'top2.png'],
	icon_base: ['base1.png', 'base2.png'],
	abilities: [],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});

//BASE
TYPES.push({
	name: 'Base',
	type: 'tower',
	description: ["Main base"],
	life: [1000,0],
	damage: [30, 0],	//30 dps
	range: 110,
	scout: 120,
	armor: [50,0,50],
	speed: 0,
	attack_delay: 1,
	turn_speed: 4,
	no_repawn: 1,
	size: ['L', 90],
	preview: '',
	icon_top: [],
	icon_base: ['base1.png', 'base2.png'],
	abilities: [],
	bullet: 'bullet.png',
	fire_sound: 'shoot.ogg',
	accuracy: 90,
	});
