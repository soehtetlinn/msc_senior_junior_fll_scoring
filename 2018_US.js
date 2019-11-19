{
    "title": "MSC Junior/Senior",
    "missions": [{
            "title": "Assemble the Water Treatment model by (Max 60)",
            "description": "Mission 1",
            "objectives": [{
                        "id": "push_subj_to_tank1",
                        "title": "Push the chlorinator or the filter to the tank",
                        "type": "yesno"
                    },
                    {
                        "id": "push_subj_to_tank2",
                        "title": "Push the filter an chlorinator to the tank",
                        "type": "yesno"
                    },
                    {
                        "id": "cover_tank1",
                        "title": "Cover the tank",
                        "type": "yesno"
                    },
                    {
                        "id": "cover_tank2",
                        "title": "Cover the storage tank",
                        "type": "yesno"
                    },
                    {
                        "id": "special_bonus",
                        "title": "BONUS- ALL COMPLETE",
                        "type": "yesno"
                    }
                ],
            "score": [function(push_subj_to_tank1, push_subj_to_tank2, cover_tank1, cover_tank2, special_bonus) {
                if (push_subj_to_tank1 == 'yes' ) {
                    return 10
                }
                if (push_subj_to_tank1 == 'no' ) {
                    return 0
                }
                if (push_subj_to_tank2 == 'yes' ) {
                    return 10
                }
                if (push_subj_to_tank2 == 'no' ) {
                    return 0
                }
                if (cover_tank1 == 'yes' ) {
                    return 10
                }
                if (cover_tank2 == 'no' ) {
                    return 0
                }
                if (special_bonus == 'yes' ) {
                    return 20
                }
                if (special_bonus == 'no' ) {
                    return 0
                }
            }]
        },
        {
            "title": "Raise the Water Tank to the Tower platform (Max 20)",
            "description": "Mission 2",
            "objectives": [{
                "id": "partly",
                "title": "Partly in the Tower platform",
                "type": "yesno"
                },
                {
                "id": "completely",
                "title": "Completely in the Tower platform",
                "type": "yesno"
                }
            ],
            "score": [function(partly, completely) {
                if (partly == 'no' && completely == 'no') {
                    return 0
                }
                if (partly == 'no' && completely == 'yes') {
                    return 20
                }
                if (partly == 'yes' && completely == 'no') {
                    return 10
                }
                if (partly == 'yes' && completely == 'yes') {
                    return new Error ('Cannot yes to partly since yes to completely')
                }
            }]
        },
        {
            "title": "Move the Water Well away from the toilet (Max 10)",
            "description": "Mission 3",
            "objectives": [{
                    "id": "yellow_south",
                    "title": "In Yellow Area or south of Yellow Area",
                    "type": "yesno"
                },
                {
                    "id": "green_south",
                    "title": "In Green Area or south of Green Area",
                    "type": "yesno"
                    },
            ],
            "score": [function(yellow_south , green_south) {    //need to confirm this score
                if (yellow_south == 'yes' && green_south == 'no') {
                    return 5
                }
                if (yellow_south == 'no' && green_south == 'yes') {
                    return new Error ('You cannot be reach to green before yellow')
                }
                if (green_south == 'yes' && yellow_south == 'yes'){
                    return 10
                }
                if (green_south == 'no' && yellow_south == 'yes'){
                    return 5
                }
            }]
        },
        {
            "title": "Turn off by turning the Faucet/Tap handle to the Red Handle position (Max 20)",
            "description": "Mission 4",
            "objectives": [{
                "id": "well_handle",
                // "title": "Only if other points are assigned.",
                "type": "yesno"
                }],
            "score": [function(well_handle) {
                if (well_handle == 'yes') {
                    return 20
                }
                if (well_handle == 'no') {
                    return 0
                }
            }]
        },
        {
            "title": "Deliver Water to the Yellow Zone next to water basin (Max 40)",
            "description": "Mission 5",
            "objectives": [{
                "id": "car_completely",
                "title": "All wheels in yellow line and touching the mat with water tank on it",
                "type": "yesno"
            },
            {
                "id": "car_partially",
                "title": "Touching yellow line and all wheels touching the mat with water tank on it (Partially)",
                "type": "yesno"
            },
            {
                "id": "only_tank_and_car_partially",
                "title": "Only water tank reach inside yellow line",
                "type": "yesno"
            }
        ],
            "score": [function(car_completely, car_partially, only_tank_and_car_partially) {
                if (car_completely === 'yes' && car_partially == 'no' && only_tank_and_car_partially == 'no') {
                    return 40
                }
                if (car_completely === 'yes' && car_partially == 'yes' && only_tank_and_car_partially == 'no') {
                    return new Error ('What do you know ? car is already completly reach its destination completely')
                }
                if (car_completely === 'yes' && car_partially == 'yes' && only_tank_and_car_partially == 'yes') {
                    return new Error ('What do you know ? car is already completly reach its destination completely')
                }
                if (car_completely === 'no' && car_partially == 'no' && only_tank_and_car_partially == 'no') {
                    return 0
                }
                if (car_completely === 'no' && car_partially == 'no' && only_tank_and_car_partially == 'yes') {
                    return 20
                }
                if (car_completely === 'no' && car_partially == 'yes' && only_tank_and_car_partially == 'yes') {
                    return new Error ('What do you know ? car is already completly reach its destination partially')
                }
                if (car_completely === 'no' && car_partially == 'yes' && only_tank_and_car_partially == 'no') {
                    return 30
                }
                if (car_completely === 'yes' && car_partially == 'no' && only_tank_and_car_partially == 'yes') {
                    return new Error ('What do you know ? car is already completly reach its destination completely')
                }

            }]
        },
        {
            "title": "Deliver water bottles to houses (inside yellow line) (Max 45)",
            "description": "Mission 6",
            "objectives": [{
                    "id": "bottle1",
                    "title": "Deliver water bottles to houses ( inside yellow line )",
                    "options": [
                        {
                            "value": "3",
                            "title": "3"
                        },
                        {
                            "value": "2",
                            "title": "2"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "0",
                            "title": "0"
                        }],
                    "type": "enum"
                },
                {
                    "id": "bottle2",
                    "title": "Deliver inside the house additional ",
                    "options": [
                        {
                            "value": "3",
                            "title": "3"
                        },
                        {
                            "value": "2",
                            "title": "2"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "0",
                            "title": "0"
                        }],
                    "type": "enum"
                },
                // {
                //     "id": "bottle_penalty",
                //     "title": "Deliver unclean water bottle?",
                //     "options": [
                //         {
                //             "value": "3",
                //             "title": "3"
                //         },
                //         {
                //             "value": "2",
                //             "title": "2"
                //         },
                //         {
                //             "value": "1",
                //             "title": "1"
                //         },
                //         {
                //             "value": "0",
                //             "title": "0"
                //         }],
                //     "type": "enum"
                // },
            ],
            "score": [function(bottle1, bottle2, bottle_penalty) {
                // if (bottle_penalty == '0') {
                //     return 0
                // }
                // if (bottle_penalty == '1') {
                //     return -10
                // }
                // if (bottle_penalty == '2') {
                //     return -20
                // }
                // if (bottle_penalty == '3') {
                //     return -30
                // }
                if (bottle1 == '0' && bottle2 == '0') {
                    return 0
                }
                if (bottle1 == '0' && bottle2 == '1') {
                    return new Error ('You cannot add additional score since basic score is 0')
                }
                if (bottle1 == '0' && bottle2 == '2') {
                    return new Error ('You cannot add additional score since basic score is 0')
                }
                if (bottle1 == '0' && bottle2 == '3') {
                    return new Error ('You cannot add additional score since basic score is 0')
                }
                if (bottle1 == '1' && bottle2 == '0') {
                    return 10
                }
                if (bottle1 == '1' && bottle2 == '1') {
                    return 15
                }
                if (bottle1 == '1' && bottle2 == '2') {
                    return new Error ('You cannot add additional scores since basic score is 1')
                }
                if (bottle1 == '1' && bottle2 == '3') {
                    return new Error ('You cannot add additional scores since basic score is 1')
                }
                if (bottle1 == '2' && bottle2 == '0') {
                    return 20
                }
                if (bottle1 == '2' && bottle2 == '1') {
                    return 25
                }
                if (bottle1 == '2' && bottle2 == '2') {
                    return 30
                }
                if (bottle1 == '2' && bottle2 == '3') {
                    return new Error ('You cannot add additional scores since basic score is 1')
                }
                if (bottle1 == '3' && bottle2 == '0') {
                    return 30
                }
                if (bottle1 == '3' && bottle2 == '1') {
                    return 35
                }
                if (bottle1 == '3' && bottle2 == '2') {
                    return 40
                }
                if (bottle1 == '3' && bottle2 == '3') {
                    return 45
                }       
            }]
        },
        {
            "title": "Plant the trees inside yellow area next to the Water Basin (Max 30)",
            "description": "Mission 7",
            "objectives": [{
                "id": "tree_up",
                "title": "Tree in upright position",
                "options": [
                    {
                        "value": "3",
                        "title": "3"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "0",
                        "title": "0"
                    }],
                "type": "enum"
            },
            {
                "id": "tree_not_up",
                "title": "Tree in Not-upright position",
                "options": [
                    {
                        "value": "3",
                        "title": "3"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "0",
                        "title": "0"
                    }],
                "type": "enum"
            }
        ],
            "score": [function(tree_up, tree_not_up) {
                if (tree_up == '0' && tree_not_up == '0') {
                    return 0
                }
                if (tree_up == '0' && tree_not_up == '1') {
                    return 5
                }
                if (tree_up == '0' && tree_not_up == '2') {
                    return 10
                }
                if (tree_up == '0' && tree_not_up == '3') {
                    return 15
                }
                if (tree_up == '1' && tree_not_up == '0') {
                    return 10
                }
                if (tree_up == '1' && tree_not_up == '1') {
                    return 15
                }
                if (tree_up == '1' && tree_not_up == '2') {
                    return 20
                }
                if (tree_up == '1' && tree_not_up == '3') {
                    return new Error ('Given trees are only 3 pieces!!')
                }
                if (tree_up == '2' && tree_not_up == '0') {
                    return 20
                }
                if (tree_up == '2' && tree_not_up == '1') {
                    return 25
                }
                if (tree_up == '2' && tree_not_up == '2') {
                    return new Error ('Given trees are only 3 pieces!!')
                }
                if (tree_up == '2' && tree_not_up == '3') {
                    return new Error ('Given trees are only 3 pieces!!')
                }
                if (tree_up == '3' && tree_not_up == '0') {
                    return 30
                }
                if (tree_up == '3' && tree_not_up == '1') {
                    return new Error ('Given trees are only 3 pieces!!')
                }
                if (tree_up == '3' && tree_not_up == '2') {
                    return new Error ('Given trees are only 3 pieces!!')
                }
                if (tree_up == '3' && tree_not_up == '3') {
                    return new Error ('Given trees are only 3 pieces!!')
                }
            }]
        },
        {
            "title": "Clean debris from the Water/Rain Collector Basin (Max 20)",
            "description": "Mission 8 (Water/Rain Collector Basin should be upright position at the end of the game)",
            "objectives": [{
                "id": "clean_debris",
                // "title": "",
                "options": [
                    {
                        "value": "5",
                        "title": "5"
                    },
                    {
                        "value": "4",
                        "title": "4"
                    },
                    {
                        "value": "3",
                        "title": "3"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "0",
                        "title": "0"
                    }],
                "type": "enum"
            },
            ],
            "score": [function(clean_debris) {
                if (clean_debris == '0') {
                    return 0
                }
                if (clean_debris == '1') {
                    return 4
                }
                if (clean_debris == '2') {
                    return 8
                }
                if (clean_debris == '3') {
                    return 12
                }
                if (clean_debris == '4') {
                    return 16
                }
                if (clean_debris == '5') {
                    return 20
                }
            }]
        },
        {
            "title": "Complex Penalties",
            "description": "This is about complex penalties",
            "objectives": [
            {
                "id": "water_bottle_penalties",
                "title": "Deliver unclean water bottle?",
                "type": "yesno"
            },
            {
                "id": "water_truck_penalties",
                "title": "Not all wheels touching the mat or at the base not attempted to move",
                "type": "yesno"
            },
            {
                "id": "obstacle_penalties",
                "title": "Obstacles cannot move penalties : ",
                "options": [
                    {
                        "value": "3",
                        "title": "3"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "0",
                        "title": "0"
                    }],
                "type": "enum"
            },
            {
                "id": "interruption_penalties",
                "title": "Interruption Penalty : during the Match",
                "options": [
                    {
                        "value": "6",
                        "title": "6"
                    },
                    {
                        "value": "5",
                        "title": "5"
                    },
                    {
                        "value": "4",
                        "title": "4"
                    },
                    {
                        "value": "3",
                        "title": "3"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "0",
                        "title": "0"
                    }],
                "type": "enum"
            },
            {
                "id": "junk_penalties",
                "title": "Junk Penalty : Caused immediately",
                "options": [
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "0",
                        "title": "0"
                    }],
                "type": "enum"
            }
        ],
            "score": [function(obstacle_penalties, bottle_penalty, water_truck_penalties, interruption_penalties, junk_penalties) {
//yes case
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 10
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '0' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 20
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '1' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 25
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '2' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 30
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 35
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '1' && junk_penalties == '0') {
                    return 40
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '1' && junk_penalties == '1') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '0' && junk_penalties == '1') {
                    return 40
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '0' && junk_penalties == '2') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '1' && junk_penalties == '2') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '2' && junk_penalties == '0') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '2' && junk_penalties == '1') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '2' && junk_penalties == '2') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '3' && junk_penalties == '0') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '3' && junk_penalties == '1') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '3' && junk_penalties == '2') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '4' && junk_penalties == '0') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '4' && junk_penalties == '1') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '4' && junk_penalties == '2') {
                    return new Error ('Beware ! Maximum Score is 40 !!')
                }


                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '1' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 5
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '2' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 10
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '3' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 15
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'no' && obstacle_penalties == '3' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 15
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 10
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'no' && obstacle_penalties == '1' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 15
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'no' && obstacle_penalties == '2' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 20
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'no' && obstacle_penalties == '3' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 25
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'yes' && obstacle_penalties == '0' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 10
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'yes' && obstacle_penalties == '1' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 15
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'yes' && obstacle_penalties == '2' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 20
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 25
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '0' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 20
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '1' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 25
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '2' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 30
                }
                if ( water_bottle_penalties == 'yes' && water_truck_penalties == 'yes' && obstacle_penalties == '3' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 35
                }

//no case
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '0' && junk_penalties == '0') {
                    return 0
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '1' && junk_penalties == '0') {
                    return 5
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '2' && junk_penalties == '0') {
                    return 10
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '3' && junk_penalties == '0') {
                    return 15
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '4' && junk_penalties == '0') {
                    return 20
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '5' && junk_penalties == '0') {
                    return 25
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '6' && junk_penalties == '0') {
                    return 30
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '6' && junk_penalties == '1') {
                    return 35
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '6' && junk_penalties == '2') {
                    return 40
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '1' && junk_penalties == '1') {
                    return 10
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '1' && junk_penalties == '2') {
                    return 15
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '2' && junk_penalties == '1') {
                    return 15
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '2' && junk_penalties == '2') {
                    return 20
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '3' && junk_penalties == '1') {
                    return 20
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '3' && junk_penalties == '2') {
                    return 25
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '4' && junk_penalties == '1') {
                    return 25
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '4' && junk_penalties == '2') {
                    return 30
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '5' && junk_penalties == '1') {
                    return 30
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '5' && junk_penalties == '2') {
                    return 35
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '6' && junk_penalties == '1') {
                    return 35
                }
                if ( water_bottle_penalties == 'no' && water_truck_penalties == 'no' && obstacle_penalties == '0' && interruption_penalties == '6' && junk_penalties == '2') {
                    return 40
                }  
            }]
        }
        ],
        
    "strings": {
        "yes": "Yes",
        "no": "No",
        "M01-name": "M01 Pipe Removal",
        "M01-desc": "Move the Broken Pipe so it is completely in Base.",
        "M01-scoring": "Broken Pipe is completely in Base",
        "M02-name": "M02 Flow",
        "M02-desc": "Move a Big Water (one time maximum) to the other team’s field *only by turning the Pump System’s valve(s).",
        "M02-scoring": "Big Water is on other team's Field (only by turning Pump System's valves(s))",
        "M03-name": "M03 Pump Addition",
        "M03-desc": "Move the Pump Addition so it has contact with the mat and that contact is completely in the Pump Addition target.",
        "M03-scoring": "Pump Addition has contact with the mat completely inside the target area",
        "M04-name": "M04 Rain",
        "M04-desc": "Make at least one Rain come out of the Rain Cloud.",
        "M04-scoring": "At least one Rain is out of the Rain Cloud",
        "penalties-name": "Penalties",
        "penalties-desc": "Penalties given",
        "penalties-scoring": "Number of Penalty discs in the white triangle area"
    }
}
 
 

