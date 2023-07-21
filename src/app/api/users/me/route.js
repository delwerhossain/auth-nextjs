const { connect } = require("@/dbConfig/dbConfig");
const { getDataFromToken } = require("@/helper/getDataFromToken");
const { User } = require("@/models/userModel");
const { NextResponse } = require("next/server");

connect();

export const GET = async (request) => {
  try {
    const userID = await getDataFromToken(request);
    const user = await User.findOne({ _id: userID }).select("-password");
    return NextResponse.json({
      message: "User Found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 400,
      }
    );
  }
};
