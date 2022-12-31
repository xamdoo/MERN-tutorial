const express = require('express')
const router = express.Router()
const { getGoals, 
        setGoals, 
        updateGoal, 
        deleteGoal 
    } = require('../Controllers/goalController')

// to clean the code a lil more we could chain the methods that has same route
// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router