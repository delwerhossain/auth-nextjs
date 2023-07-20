const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    const res = NextResponse.json({
      message: "Logout successfully",
      success: true,
    });
    res.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return res;
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
};
