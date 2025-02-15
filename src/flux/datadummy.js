const datadummy = [
	{
		id: 1,
		recordist: "Claire",
		date: "10/10/2025",
		time: "23:35:00",
		lat: 64.03985877,
		lon: -138.1501049,
		temperature: "-35°C",
		conditions: "Clear",
		tags: "Field Recording",
		// URL original del audio
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055290/Yukon_River_2_fbi0r9.jpg",
	},
	{
		id: 2,
		recordist: "Hanna",
		date: "11/10/2025",
		time: "00:35:00",
		lat: 65.18846044,
		lon: -151.4652797,
		temperature: "-35°C",
		conditions: "Cloudy",
		tags: "Yukon River",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/field_recording_2_xan6ng.jpg",
	},
	{
		id: 3,
		recordist: "Miguel",
		date: "12/10/2025",
		time: "01:35:00",
		lat: 63.93657,
		lon: -138.47639,
		temperature: "-35°C",
		conditions: "Cloudy",
		tags: "Klondike River",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/students_working_5_a43l75.jpg",
	},
	{
		id: 4,
		recordist: "Claire",
		date: "13/10/2025",
		time: "23:35:00",
		lat: 63.90152,
		lon: -137.95093,
		temperature: "-35°C",
		conditions: "Snow",
		tags: "Field Work",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055290/Yukon_River_1_wsuiqa.jpg",
	},
	{
		id: 5,
		recordist: "Joao",
		date: "14/10/2025",
		time: "00:35:00",
		lat: 64.55629475,
		lon: -138.5183446,
		temperature: "-35°C",
		conditions: "Cloudy",
		tags: "Tombstone Territorial Park",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/Tombstone_Park_4_l7hfui.jpg",
	},
	{
		id: 6,
		recordist: "Susan",
		date: "15/10/2025",
		time: "01:35:00",
		lat: 63.90152,
		lon: -137.95093,
		temperature: "-35°C",
		conditions: "Rain",
		tags: "Interviews",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/field_recording_3_gulz7r.jpg",
	},
	{
		id: 7,
		recordist: "Ricardo",
		date: "16/10/2025",
		time: "23:35:00",
		lat: 64.55625,
		lon: -138.51835,
		temperature: "-35°C",
		conditions: "Cloudy",
		tags: "Tombstone Territorial Park",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/Tombstone_Park_3_zieofz.jpg",
	},
	{
		id: 8,
		recordist: "Andres",
		date: "17/10/2025",
		time: "00:35:00",
		lat: 64.27131,
		lon: -138.72133,
		temperature: "-35°C",
		conditions: "Rain",
		tags: "Interviews",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/Tombstone_Park_1_crjb7h.jpg",
	},
	{
		id: 9,
		recordist: "Julia",
		date: "18/10/2025",
		time: "01:35:00",
		lat: 64.03985877,
		lon: -138.1501049,
		temperature: "-35°C",
		conditions: "Cloudy",
		tags: "Klondike River",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/drilling_river_ice_ya1yvt.jpg",
	},
	{
		id: 10,
		recordist: "Joao",
		date: "19/10/2025",
		time: "23:35:00",
		lat: 64.03985877,
		lon: -138.1501049,
		temperature: "-35°C",
		conditions: "Snow",
		tags: "Klondike River",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055293/students_working_2_ibr7vr.jpg",
	},
	{
		id: 11,
		recordist: "Joao",
		date: "20/10/2025",
		time: "00:35:00",
		lat: 64.55629475,
		lon: -138.5183446,
		temperature: "-35°C",
		conditions: "Clear",
		tags: "Field Recording",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055282/Yukon_River-5_faolxu.jpg",
	},
	{
		id: 12,
		recordist: "Susan",
		date: "21/10/2025",
		time: "01:35:00",
		lat: 64.55629475,
		lon: -138.5183446,
		temperature: "-35°C",
		conditions: "Clear",
		tags: "Field Recording",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055281/Yukon_River_4_hlp5dg.jpg",
	},
	{
		id: 13,
		recordist: "Ricardo",
		date: "22/10/2025",
		time: "23:35:00",
		lat: 64.55629475,
		lon: -138.5183446,
		temperature: "-35°C",
		conditions: "Clear",
		tags: "Field Recording",
		audioFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",
		pictureFilePath:
			"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055291/Yukon_River_3_xoonfg.jpg",
	},
];

export default datadummy;
