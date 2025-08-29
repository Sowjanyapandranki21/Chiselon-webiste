import React from "react";
import "./ClientsView.css"; // Import styles

import BBSSLLogo from "../Assests/bbss.png";
import ACSLogo from "../Assests/ACG.png";
import RPWebAppsLogo from "../Assests/rpwebapps.png";
import ExwynLogo from "../Assests/Exwyn.png";

const ClientsView = () => {
  const clientsList = [
    { name: "AppOrchid", logo: "https://cdn.prod.website-files.com/6308b9e1771b56be92fe7491/637b3fe87b64e734fde7115c_apporchid.png" },
    { name: "Reveal Data", logo: "https://cdn.us.document360.io/logo/3e21d801-ca9f-4c51-93db-9cbd32741f3d/6d8c0747514548729b40b75d0ae1663d-REVEAL%20LOGO%20-%20PLUM(3).png" },
    { name: "IntraEdge", logo: "https://apn-portal.my.salesforce.com/servlet/servlet.ImageServer?id=0150h000003PpPNAA0&oid=00DE0000000c48tMAA" },
    { name: "MSG Global", logo: "https://cdn.prod.website-files.com/66d99b32659e99e445502f8b/67f505a157031b248f841da9_Msg%20global.png" },
    { name: "BBSSL", logo: BBSSLLogo },
    { name: "Ability Commerce", logo: "https://static.crozdesk.com/web_app_library/providers/logos/000/003/205/box/ability-ccs-oms-1669205711-logo.png?1669205711" },
    { name: "American Consulting Services", logo: ACSLogo },
    { name: "Exwin", logo: "https://cpl.thalesgroup.com/sites/default/files/content/partners/logo/2023-11/Credopay%20logo.png" },
    { name: "Valor PayTech", logo: "https://valorpaytech.com/wp-content/uploads/2024/03/Valor-Paytech-New-logo-600x.png" },
    { name: "Transtrac Technologies", logo: "https://bro-group.com/wp-content/uploads/2024/05/transtrac.png" },
    { name: "RP WebApps", logo: RPWebAppsLogo },
    { name: "Exwyn", logo: ExwynLogo },
  ];

  return (
    <section className="clients-view">
      <div className="container">
        <h2 className="section-title">Our Esteemed Clients</h2>
        <p>{clientsList.map(client => client.name).join(", ")}</p>
        
        <div className="logos-container">
          {clientsList.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsView;
