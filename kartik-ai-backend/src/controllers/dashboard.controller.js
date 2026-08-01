import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  getDashboardStatsService,
} from "../services/dashboard.service.js";

/*
=========================================
Get Dashboard Data
=========================================
*/
export const getDashboardStats = asyncHandler(
  async (req, res) => {
    const dashboard =
      await getDashboardStatsService();

    return res.status(200).json(
      new ApiResponse(
        200,
        dashboard,
        "Dashboard data fetched successfully"
      )
    );
  }
);