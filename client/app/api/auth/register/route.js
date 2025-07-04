import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import users from "@/app/data/Users.json";

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (!token) {
      return NextResponse.json(
        { isLoggedIn: false, user: null },
        { status: 401 }
      );
    }

    // Simulasi ambil email dari token
    const tokenValue = token.value;
    const email = tokenValue.split("-")[1]; // Contoh: token-kangaroo@mail.com-123456

    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json(
        { isLoggedIn: false, user: null },
        { status: 401 }
      );
    }

    return NextResponse.json({
      isLoggedIn: true,
      user: {
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.error("ME CHECK ERROR:", err);
    return NextResponse.json(
      { isLoggedIn: false, user: null },
      { status: 500 }
    );
  }
}
