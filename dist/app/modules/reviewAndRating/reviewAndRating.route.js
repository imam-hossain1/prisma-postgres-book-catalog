"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewAndRatingRoutes = void 0;
const express_1 = require("express");
const reviewAndRating_controller_1 = require("./reviewAndRating.controller");
const router = (0, express_1.Router)();
router.post('/create-reviewAndRating', reviewAndRating_controller_1.reviewAndRatingController.createReviewAndRating);
router.get('/', reviewAndRating_controller_1.reviewAndRatingController.getAllReviewAndRatings);
router.get('/:id', reviewAndRating_controller_1.reviewAndRatingController.getSingleReviewAndRating);
router.patch('/:id', reviewAndRating_controller_1.reviewAndRatingController.updateReviewAndRating);
router.delete('/:id', reviewAndRating_controller_1.reviewAndRatingController.deleteReviewAndRating);
exports.reviewAndRatingRoutes = router;