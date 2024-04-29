import express from 'express'

import { postComment,getComment,deleteComment,editComment} from '../controllers/comments.js'
const router= express.Router()
import auth from '../middleware/auth.js'

router.post('/post',auth,postComment)
router.get('/get',getComment)
router.delete('/delete/:id',auth,deleteComment)
router.patch('/edit/:id',auth,editComment)

export default router