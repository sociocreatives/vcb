import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@/app/components/Box";

export default function home() {
  //
  const imageStyle = {
    backgroundImage: 'url("/assets/images/background-login-min.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  //
  return (
    <section className="mainlogin">
      <div className="left" style={imageStyle}>
        <p>
          The Ultimate <br />
          <span>Mobile Banking</span>
          <br />
          Experience.
        </p>
      </div>
      <div className="right">
        <Image
          src="/assets/images/vb_logo.png"
          alt="mr. kim logo"
          width={201}
          height={88}
          className="imagelogo"
        />
        <h3>Login</h3>
        <p className="intro">
          Sign in to continue. Your password is yours, do not share it with
          anyone.
        </p>
        <form >
          <input type="text" placeholder="User ID" required />
          <input type="password" placeholder="Password" required />
          <Link href="/dashboard" className="links"><button>LOGIN</button></Link>
          
        </form>
        <div className="forgot">
          <p>Forgot Password</p>
          <p>Don’t have an account? <span className="register">Register</span></p>
          
        </div>
        
      </div>
    </section>
  );
}
