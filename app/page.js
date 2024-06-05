"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";
import {SignedIn, SignedOut, SignUp, useAuth} from "@clerk/nextjs";


export default function Home() {
    const {signOut} = useAuth();
    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/dashboard');
    };

    return (
        <>
            <>
                <div className="header">
                    <nav className="menu">
                        <div className="nav-item">
                            <a href="#">Universe Ecommerce Platform</a>
                        </div>
                    </nav>
                </div>
                <SignedOut>
        <div className="login">
          <form action="">
            <button className="submit" type="button" onClick={() => router.push("/dashboard")}>
              Login
            </button>
          </form>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="login">
          <form action="">
            <button className="submit" type="button" onClick={() => signOut()}>
              Logout
            </button>
            <button className="submit" type="button" onClick={() => router.push("/dashboard")}>
              Dashboard
            </button>
          </form>
        </div>
      </SignedIn>
                <p>
                    Don't have an account yet?
                    <span className="reg">Register</span>
                </p>
            </>

        </>
    );
}
