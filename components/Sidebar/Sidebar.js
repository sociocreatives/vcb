import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar_wrapper">
      <div className="sidebar">
        <div className="logodetails">
          <Image
            src="/assets/images/vlogo.svg"
            alt="logo"
            width={60}
            height={60}
            className="small-logo"
          />
          <Image
            src="/assets/images/vb_logo.png"
            alt="logo"
            width={137}
            height={60}
            className="main-logo"
          />
        </div>
        <ul className="nav-links">
          <li>
            <Image
              src="/assets/images/dashboard_icon.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Image
              src="/assets/images/task_list.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <Link href="/dashboard">Task List</Link>
          </li>
          <li>
            <Image
              src="/assets/images/account.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <Link href="/dashboard">Account</Link>
          </li>
          <li>
            <Image
              src="/assets/images/transfer.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <Link href="/dashboard">Transfers</Link>
          </li>
          <li>
            <Image
              src="/assets/images/payments.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <Link href="/dashboard">Payments</Link>
          </li>
          <li>
            <Image
              src="/assets/images/services.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <Link href="/services">Services</Link>
          </li>

          <li>
            <Image
              src="/assets/images/trade.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <Link href="/dashboard">Trade</Link>
          </li>
        </ul>
        <div className="bottom-bar">
          <ul className="nav-links">
            <li>
              <Image
                src="/assets/images/logout.svg"
                alt="logo"
                width={30}
                height={30}
              />
              <Link href="/dashboard">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
