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
            <h3>Good Day Eliud Njogu</h3>
          {/* <h4>My Accounts</h4> */}
          <div className={styles.selector}>
          <select className={styles.select} name="accounts" id="accounts">
            <option value="kshs" className={styles.options}>
              Kenya Shillings Account
            </option>
            <option value="usd">US Dollar Account</option>
            <option value="gbp">British Pound Account</option>
            <option value="euro">Euro Account</option>
          </select>
          <Image
                  src="/assets/images/icon-down.svg"
                  alt="billpayment"
                  width={30}
                  height={30}
                  className="imagelogo"
                />
          </div>
          <div className={styles.cards}>
            <div className="top_images">
              <div>
                <Image
                  src="/assets/images/vic_white.svg"
                  alt="billpayment"
                  width={83}
                  height={36}
                  className="imagelogo"
                />
              </div>
              <div>
                <Image
                  src="/assets/images/chip.svg"
                  alt="billpayment"
                  width={83}
                  height={36}
                  className="imagelogo"
                />
              </div>
            </div>
            <div className={styles.bottomimages}>sdfsgsd fsdfsgsdg</div>
          </div>
          <div className={styles.balance}>
            <div className={styles.topa}>
              <p>Available Balance</p>
            </div>
            <div className={styles.actual}>
              <h4>USD 40,000.00</h4>
              <Image
                src="/assets/images/macho.svg"
                alt="billpayment"
                width={27}
                height={18}
                className="imagelogo"
              />
            </div>
          </div>
          <div className={styles.pending}>
            <div className={styles.topa}>
              <p>Available Balance</p>
            </div>
            <div className={styles.actual}>
              <h4>USD 40,000.00</h4>
              <Image
                src="/assets/images/macho.svg"
                alt="billpayment"
                width={27}
                height={18}
                className="imagelogo"
              />
            </div>
          </div>
          <div className={styles.balance}>
            <div className={styles.topa}>
              <p>Available Balance</p>
            </div>
            <div className={styles.actual}>
              <h4>USD 40,000.00</h4>
              <Image
                src="/assets/images/macho.svg"
                alt="billpayment"
                width={27}
                height={18}
                className="imagelogo"
              />
            </div>
          </div>
        </div>
        {/* account details */}
        <div className={styles.accountdetails}>
          {/* <div className={styles.greetings}>
            <h3>Good Day Eliud Njogu</h3>
            <h4>Last Login: 10-05-2024 10:40</h4>
          </div> */}
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
                <th className={styles.th}>Date</th>
                <th className={styles.th}>Description</th>
                <th className={styles.th}>status</th>
                <th className={styles.th}>Amount</th>
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

      <section className={styles.divisionstwo} style={imageStyle}>
        <div className={styles.cont}>
          <p>
            The mobile banking service is available on Smart Phones and Tablets
            using iOS, Android and Windows mobile operating systems.. The
            E-banking platform can be accessed using Internet Explorer, Google
            Chrome, Mozilla Firefox, Safari and Opera browsers.
          </p>
          <div className={styles.store}>
            <Image
              src="/assets/images/apple-store.png"
              alt="billpayment"
              width={151}
              height={50}
              className="imagelogo"
            />
            <Image
              src="/assets/images/google-store.png"
              alt="billpayment"
              width={170}
              height={50}
              className="imagelogo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
