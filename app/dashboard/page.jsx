"use client";

import { SignIn, SignedIn, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../dashboard/page.scss'
import {
    Menubar,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { MenubarMenu } from '@radix-ui/react-menubar';
import { useState } from 'react';

export default function Dashboard() {
  const { signOut } = useAuth();
  const router = useRouter();

  const [isOn, setIsOn] = useState(false);

  const turnOn = () => {
    setIsOn(!isOn);
  };

  return (
   <>
    <>
    <div className="toggle-theme">
      <p>Theme</p>
      <div className={`board ${isOn ? 'dark-theme' : ''}`}>
        <div className={`capsule ${isOn ? 'on' : ''}`} id="capsule" onClick={turnOn}>
          <div className={`ball ${isOn ? 'switched-on' : ''}`} id="ball">
            <div className={`red-dot ${isOn ? 'green-dot' : ''}`} id="red-dot" />
          </div>
        </div>
      </div>
    </div>
  {/* THE WHOLE DASHBOARD */}
  <main>
    {/* THE TOP NAVIGATING SECTION */}
    <section className="db-header">
      {/* LEFT HEADER */}
      <div className="db-header-left">
        <div className="teams" />
        <nav className="menu">
          <div className="nav-item">Overview</div>
          <div className="nav-item">Customers</div>
          <div className="nav-item">Products</div>
          <div className="nav-item">Settings</div>
          <div className="nav-item" onClick={() => signOut()}>Logout</div>
          <div className="nav-item" onClick={() => router.push("/")}>Home</div>
        </nav>
      </div>
      {/* RIGHT HEADER */}
      <div className="db-header-right">
        <input className="search" placeholder="Search..." />
        <div className="profile">
          <img
            src="https://myintthukhanadi.online/PortalAdministration/img/profile-photos/5.png"
            alt=""
          />
        </div>
      </div>
    </section>
    {/* THE BODY OF THE DASHBOARD */}
    <section className="db-main">
      {/* TITLE DATE DOWNLOAD TABS-NAVIGATION */}
      <section className="db-main-top">
        <div className="db-main-top-1">
          <h1>Dashboard</h1>
          <div className="db-main-top-1-right">
            <div className="calendar">
              <span className="material-symbols-outlined">
                {" "}
                calendar_month{" "}
              </span>
              <input type="date" className="date" />
            </div>
            <button className="download">Download</button>
          </div>
        </div>
        <nav className="tabs">
          <div className="tabs-item active">Overview</div>
          <div className="tabs-item">Analytics</div>
          <div className="tabs-item">Reports</div>
          <div className="tabs-item">Notifications</div>
        </nav>
      </section>
      {/* THE FOUR MAIN CARDS */}
      <section className="db-main-cards-section">
        <div className="db-main-card">
          <div className="card-top">
            <h4>Total Revenue</h4>
            <span className="material-symbols-outlined"> attach_money </span>
          </div>
          <div className="card-figure">$45,231.45</div>
          <p className="comparison">
            <span className="difference">+20.4%</span> from last month
          </p>
        </div>
        <div className="db-main-card">
          <div className="card-top">
            <h4>Subscriptions</h4>
            <span className="material-symbols-outlined"> group </span>
          </div>
          <div className="card-figure">+2350</div>
          <p className="comparison">
            <span className="difference">+180.1%</span> from last month
          </p>
        </div>
        <div className="db-main-card">
          <div className="card-top">
            <h4>Sales</h4>
            <span className="material-symbols-outlined"> toolbar </span>
          </div>
          <div className="card-figure">+12,234</div>
          <p className="comparison">
            <span className="difference">+19%</span> from last month
          </p>
        </div>
        <div className="db-main-card">
          <div className="card-top">
            <h4>Active Now</h4>
            <span className="material-symbols-outlined"> vital_signs </span>
          </div>
          <div className="card-figure">+573</div>
          <p className="comparison">
            <span className="difference">+201</span> since last hour
          </p>
        </div>
      </section>
      {/* MAIN DASHBOARD AREA */}
      <section className="main-area">
        {/* OVERVIEW BOX */}
        <div className="overview">
          <h3>Overview</h3>
          <div className="annual-graph-container">
            <div className="annual-graph-0">
              <p className="overview-scale">$6000</p>
              <p className="overview-scale">$4500</p>
              <p className="overview-scale">$3000</p>
              <p className="overview-scale">$1500</p>
              <p className="overview-scale">$0</p>
              <p className="overview-scale" />
            </div>
            <div className="annual-graph">
              <p className="months">Jan</p>
              <div className="full" id="full" style={{ height: "38%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Jan</p>
              <div className="full" id="full" style={{ height: "20%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Feb</p>
              <div className="full" id="full" style={{ height: "71%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Mar</p>
              <div className="full" id="full" style={{ height: "60%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Apr</p>
              <div className="full" id="full" style={{ height: "43%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Jun</p>
              <div className="full" id="full" style={{ height: "14%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Jul</p>
              <div className="full" id="full" style={{ height: "51%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Aug</p>
              <div className="full" id="full" style={{ height: "63%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Sep</p>
              <div className="full" id="full" style={{ height: "87%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Oct</p>
              <div className="full" id="full" style={{ height: "75%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Nov</p>
              <div className="full" id="full" style={{ height: "27%" }} />
            </div>
            <div className="annual-graph">
              <p className="months">Dec</p>
              <div className="full" id="full" style={{ height: "36%" }} />
            </div>
          </div>
        </div>
        {/* RECENT SALES BOX */}
        <div className="recent-sales">
          <h3>Recent Sales</h3>
          <p>You have made 265 sales this month.</p>
          {/* INDIVIDUAL SALES */}
          <div className="client-sales">
            <div className="data">
              <img
                src="https://myintthukhanadi.online/PortalAdministration/img/profile-photos/5.png"
                alt=""
              />
              <div className="personal-data">
                <div className="names">Olivia Johnson</div>
                <div className="email">oliviajohnson23456@gmail.bg</div>
              </div>
            </div>
            <div className="sales-money">+$1,999.00</div>
          </div>
          <div className="client-sales">
            <div className="data">
              <img
                src="https://myintthukhanadi.online/PortalAdministration/img/profile-photos/5.png"
                alt=""
              />
              <div className="personal-data">
                <div className="names">Raipf Kirkpatrick</div>
                <div className="email">oliviajohnson23456@gmail.bg</div>
              </div>
            </div>
            <div className="sales-money">+$1,849.00</div>
          </div>
          <div className="client-sales">
            <div className="data">
              <img
                src="https://myintthukhanadi.online/PortalAdministration/img/profile-photos/5.png"
                alt=""
              />
              <div className="personal-data">
                <div className="names">Chris Tompson</div>
                <div className="email">oliviajohnson23456@gmail.bg</div>
              </div>
            </div>
            <div className="sales-money">+$189.00</div>
          </div>
          <div className="client-sales">
            <div className="data">
              <img
                src="https://myintthukhanadi.online/PortalAdministration/img/profile-photos/5.png"
                alt=""
              />
              <div className="personal-data">
                <div className="names">Johnny Peterson</div>
                <div className="email">oliviajohnson23456@gmail.bg</div>
              </div>
            </div>
            <div className="sales-money">+$329.00</div>
          </div>
          <div className="client-sales">
            <div className="data">
              <img
                src="https://myintthukhanadi.online/PortalAdministration/img/profile-photos/5.png"
                alt=""
              />
              <div className="personal-data">
                <div className="names">Maria James</div>
                <div className="email">oliviajohnson23456@gmail.bg</div>
              </div>
            </div>
            <div className="sales-money">+$849.00</div>
          </div>
        </div>
      </section>
    </section>
  </main>
</>

   </>

  );
}