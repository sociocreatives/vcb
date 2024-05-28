import React from "react";
import styles from "./dashboard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  //
  const imageStyle = {
    backgroundImage: 'url("/assets/images/background-login-min.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "12rem",
    width: "100%",
  };
  //
  return (
    <>
      <section className={styles.divisions}>
        <div className={styles.bankdetails}>
            
        </div>

        <div className={styles.accountdetails}>

          <div className={styles.shortcuts}>
            <div className={styles.iconcard}>
              <Image
                src="/assets/images/billpayment.svg"
                alt="billpayment"
                width={30}
                height={33}
                className="imagelogo"
              />
              <h3>Bill Payment</h3>
            </div>
            <div className={styles.iconcard}>
              <Image
                src="/assets/images/buyairtime.svg"
                alt="buyairtime"
                width={22.32}
                height={33}
                className="imagelogo"
              />
              <h3>Buy Airtime</h3>
            </div>
            <div className={styles.iconcard}>
              <Image
                src="/assets/images/mpesa.png"
                alt="mpesa"
                width={34.93}
                height={33}
                className="imagelogo"
              />
              <h3>MPESA</h3>
            </div>
            <div className={styles.iconcard}>
              <Image
                src="/assets/images/pesalink.svg"
                alt="billpayment"
                width={44.38}
                height={33}
                className="imagelogo"
              />
              <h3>PESALINK</h3>
            </div>
            <div className={styles.iconcard}>
              <Image
                src="/assets/images/beneficiary.svg"
                alt="billpayment"
                width={44.38}
                height={33}
                className="imagelogo"
              />
              <h3>Add Beneficiary</h3>
            </div>
            <div className={styles.iconcard}>
              <Image
                src="/assets/images/addaccount.svg"
                alt="billpayment"
                width={39}
                height={33}
                className="imagelogo"
              />
              <h3>Add Account</h3>
            </div>
          </div>

          {/* transactions */}
          <div className={styles.recents}>
            <h3>Recent Transactions | </h3>
            <h4>0010 0048 3290</h4>
          </div>
          {/* transactions */}
          <div className={styles.latest}>
            <table className={styles.table}>
              <tr className={styles.tr}>
                <th className={styles.th}><h4>Date</h4></th>
                <th className={styles.th}><h4>Description</h4></th>
                <th className={styles.th}><h4>Status</h4></th>
                <th className={styles.th}><h4>Amount</h4></th>
              </tr>
              <tr>
                <td className={styles.td}>10052024</td>
                <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
                <td className={styles.td}>Completed</td>
                <td className={styles.td}>10,000.00</td>
              </tr>
              <tr>
                <td className={styles.td}>10052024</td>
                <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
                <td className={styles.td}>Completed</td>
                <td className={styles.td}>10,000.00</td>
              </tr>
              <tr>
                <td className={styles.td}>10052024</td>
                <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
                <td className={styles.td}>Completed</td>
                <td className={styles.td}>10,000.00</td>
              </tr>
              <tr>
                <td className={styles.td}>10052024</td>
                <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
                <td className={styles.td}>Completed</td>
                <td className={styles.td}>10,000.00</td>
              </tr>
              <tr>
                <td className={styles.td}>10052024</td>
                <td className={styles.td}>MPESA to Account FREQY18764804Y3U</td>
                <td className={styles.td}>Completed</td>
                <td className={styles.td}>10,000.00</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
