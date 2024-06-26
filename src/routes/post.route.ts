import express, { Router } from "express";

import { getAll,create,deletePost,updatePost,saveInSavedPosts,fetchPublishedPosts,getSingle,searchUserPosts, getSavedPosts, deleteSavedPosts, checkIfSaved, fetchDrafts, publishPost, fetchS3url } from "../controller/post.controller";
import { authenticateJwt } from "../middleware/auth";

const router: Router = express.Router();

router.get('/',getAll)
router.post('/',authenticateJwt ,create)
router.get('/s3-url',fetchS3url)
router.patch('/:id',authenticateJwt,updatePost)
router.delete('/:_id',authenticateJwt,deletePost)
router.patch('/publish/:id',authenticateJwt,publishPost)
router.get('/savedPosts/:userId',authenticateJwt,getSavedPosts)
router.post('/savedPosts',authenticateJwt,saveInSavedPosts)
router.delete('/savedPosts/:userId/:postId',authenticateJwt,deleteSavedPosts)
router.get('/savedPosts/check/:postId/:userId',authenticateJwt,checkIfSaved)
router.get('/search/:username',searchUserPosts)
router.get('/published/:username',fetchPublishedPosts)
router.get('/drafts/:username',fetchDrafts)
router.get('/single/:id',getSingle)


export default router   