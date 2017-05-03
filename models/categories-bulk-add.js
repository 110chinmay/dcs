db.categories.remove({})
db.categories.insertMany( [
{'cat_id': 1, 'title': "Mobiles", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 11, 'title': "Mobile Phones", 'description': '', 'parent': 1, 'status': 1},
{'cat_id': 12, 'title': "Tablets", 'description': '', 'parent': 1, 'status': 1},
{'cat_id': 13, 'title': "Accessories", 'description': '', 'parent': 1, 'status': 1},

{'cat_id': 2, 'title': "Electronics & Appliances", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 21, 'title': "Computers & Laptops", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 22, 'title': "TVs, Video - Audio", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 23, 'title': "Hard Disks, Printers & Monitors", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 24, 'title': "ACs", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 25, 'title': "Washing Machines", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 26, 'title': "Fridges", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 27, 'title': "Computer Accessories", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 28, 'title': "Cameras & Lenses", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 29, 'title': "Kitchen & Other Appliances", 'description': '', 'parent': 2, 'status': 1},
{'cat_id': 30, 'title': "Games & Entertainment", 'description': '', 'parent': 2, 'status': 1},

{'cat_id': 3, 'title': "Cars", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 31, 'title': "Cars", 'description': '', 'parent': 3, 'status': 1},
{'cat_id': 32, 'title': "Commercial Vehicles", 'description': '', 'parent': 3, 'status': 1},
{'cat_id': 33, 'title': "Other Vehicles", 'description': '', 'parent': 3, 'status': 1},
{'cat_id': 34, 'title': "Spare Parts", 'description': '', 'parent': 3, 'status': 1},

{'cat_id': 4, 'title': "Bikes", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 41, 'title': "Motorcycles", 'description': '', 'parent': 4, 'status': 1},
{'cat_id': 42, 'title': "Scooters", 'description': '', 'parent': 4, 'status': 1},
{'cat_id': 43, 'title': "Bicycles", 'description': '', 'parent': 4, 'status': 1},
{'cat_id': 44, 'title': "Spare Parts", 'description': '', 'parent': 4, 'status': 1},

{'cat_id': 5, 'title': "Furniture", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 51, 'title': "Sofa & Dining", 'description': '', 'parent': 5, 'status': 1},
{'cat_id': 52, 'title': "Beds & Wardrobes", 'description': '', 'parent': 5, 'status': 1},
{'cat_id': 53, 'title': "Home Decor & Garden", 'description': '', 'parent': 5, 'status': 1},
{'cat_id': 54, 'title': "Other Household Items", 'description': '', 'parent': 5, 'status': 1},
{'cat_id': 55, 'title': "Kids Furniture", 'description': '', 'parent': 5, 'status': 1},

{'cat_id': 6, 'title': "Books, Sports & Hobbies", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 61, 'title': "Books", 'description': '', 'parent': 6, 'status': 1},
{'cat_id': 62, 'title': "Musical Instruments", 'description': '', 'parent': 6, 'status': 1},
{'cat_id': 63, 'title': "Sports Equipment", 'description': '', 'parent': 6, 'status': 1},
{'cat_id': 64, 'title': "Gym & Fitness", 'description': '', 'parent': 6, 'status': 1},
{'cat_id': 65, 'title': "Other Hobbies", 'description': '', 'parent': 6, 'status': 1},

{'cat_id': 7, 'title': "Fashion", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 71, 'title': "Men", 'description': '', 'parent': 7, 'status': 1},
{'cat_id': 72, 'title': "Women", 'description': '', 'parent': 7, 'status': 1},
{'cat_id': 73, 'title': "Kids", 'description': '', 'parent': 7, 'status': 1},

{'cat_id': 8, 'title': "Pets", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 81, 'title': "Fishes & Aquarium", 'description': '', 'parent': 8, 'status': 1},
{'cat_id': 82, 'title': "Dogs", 'description': '', 'parent': 8, 'status': 1},
{'cat_id': 83, 'title': "Other Pets", 'description': '', 'parent': 8, 'status': 1},
{'cat_id': 84, 'title': "Pet Food & Accessories", 'description': '', 'parent': 8, 'status': 1},

{'cat_id': 9, 'title': "Real Estate", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 91, 'title': "Rent", 'description': '', 'parent': 9, 'status': 1},
{'cat_id': 92, 'title': "Sale", 'description': '', 'parent': 9, 'status': 1},

{'cat_id': 10, 'title': "Jobs & Services", 'description': '', 'parent': null, 'status': 1},
{'cat_id': 101, 'title': "Jobs", 'description': '', 'parent': 10, 'status': 1},
{'cat_id': 101, 'title': "Services", 'description': '', 'parent': 10, 'status': 1}
] )