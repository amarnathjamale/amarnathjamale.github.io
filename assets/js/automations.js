/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Fully Automated and Customized Dynatrace Installation",
    authors:
      "Tools: Ansible, Azure, Dynatrace, RHEL",
    conferences:
      "Tags: Application Deployment, IaaC",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/Automations/DT_Ansible_Azure.png",
    citation: {
      vancouver:
        "This deployment focused on zero human interventions. The parameters required for Dynatrace installation are fetched from the Azure Tags and Satellite Environments. The Deployments also creates a seperate Filesystem for Dynatrace. It also features the Agent and Custom client approved modules and scripts deployments to enhance the Dynatrace monitoring to support application monitoring.",
    },
    abstract:
      "A Fully Automated Dynatrace Installation using Ansible And Azure Tags as a part of build deployments.",
    absbox: "absPopup1",
  },

  {
    title: "RedHat System Hardening as per CIS Guidelines",
    authors:
      "Tools: Ansible, CIS2 Fremework",
    conferences:
      "Tags: OS Hardening, IaaC, Automated Reporting, Standardization",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/Automations/CIS_Ansible_RedHat.png",
    citation: {
      vancouver:
        "The automation focuses on implementing the OS hardening with CIS Benchmarks. The automation also supports the applying specific CCE on the fly. The automation deploys the CIS benchmark with latest rules fetched dynamically without internet. It also provides a periodic reports from all servers and highlights the missing the CIS Rules and generates a dynamic playbook for deploying those rules on servers. It also gives client an option to apply only approved CIS Rules, ignore rejected Rules and allow specific exceptions.",
    },
    abstract:
      "This automation makes hardening the OS smooth and standardized with periodic scanning of environment, reporting and applying of missing CIS Rules giving client the most secure platform.",
    absbox: "absPopup2",
  },

  {
    title:
      "Dynamic and Fully Automated RHEL OS patching",
    authors: "Tools: Ansible, Satellite, ServiceNow, Insights",
    conferences:
      "Tags: Compliance Management, OS Patching, IaaC",
    researchYr: 2019,
    citebox: "popup3",
    image: "assets/images/Automations/Patching_ansible_satellite_snow.png",
    citation: {
      vancouver:
        "This automation targets a fully automated, highly customized and timely scheduled OS Patching that integrates with ServiceNow, Satellite and Ansible. The automation promotes and publishes the Content Views on RedHat Satellite using Ansible Automation Platform. It also creates and schedules the change request on ServiceNow and sends Patching Notification mail to all necessary recepients. It also stops or failover the application services to passive nodes. It also features patching of day 0 erratas within a day across platform.",
    },
    abstract:
      "An Automated patching Automation with featuring ServiceNow, RedHat Satellite and Ansible Automation Platform with support to custom errata patching and segregated groups of servers to minimize the downtime.",
    absbox: "absPopup3",
  },

  {
    title:
      "Autosys Autamated Installation",
    authors:
      "Tools: Ansible, Autosys, Satellite",
    conferences:
      "Tags: Application Deployment, IaaC, Automated Reporting",
    researchYr: 2021,
    citebox: "popup4",
    image: "assets/images/Automations/Autosys_Ansible_Satellite.png",
    citation: {
      vancouver:
        "The automation utilizes the Satellite to fetch the latest installation setups and deploy it on the targeted hosts. It dynamically customizes the installation based on the host and environment. This also generates a dynamically customized report of installation to necessary recepients.",
    },
    abstract:
      "An Automation for Autosys Deployment ulitizing Satellite and Ansible.",
    absbox: "absPopup4",
  },

  {
    title: "CyberArk PSM for SSH Installation",
    authors: "Tools: Ansible, CyberArk, Satellite, Azure DevOps",
    conferences:
      "Tags: Application Deployment, IaaC",
    researchYr: 2022,
    citebox: "popup5",
    image: "assets/images/Automations/CyberArk_Ansible_Azure_Satellite.png",
    citation: {
      vancouver:
        "The automation targets towards fully deploying of Server using Azure Pipeline and deploy the CyberArk PSMP application at the build time. The automation also configures PSMP application. The automation supports dynamic upgradation of application and redeploying of the whole PSMP infrastructure on the fly.",
    },
    abstract:
      "Dynamic installation of the CyberArk PSMP application along with infrastrure deployment.",
    absbox: "absPopup5",
  },

  {
    title: "CyberArk PTA Installation",
    authors: "Tools: Ansible, CyberArk, Satellite, Azure DevOps",
    conferences:
      "Tags: Application Deployment, IaaC",
    researchYr: 2022,
    citebox: "popup6",
    image: "assets/images/Automations/CyberArk_Ansible_Azure_Satellite.png",
    citation: {
      vancouver:
        "The automation targets towards fully deploying of Server using Azure Pipeline and deploy the CyberArk PTA application at the build time. The automation also configures PTA application. The automation supports dynamic upgradation of application and redeploying of the whole CyberArk PTA infrastructure on the fly.",
    },
    abstract:
      "Dynamic installation of the CyberArk PTA application along with infrastrure deployment.",
    absbox: "absPopup6",
  },

  {
    title:
      "Weekly Patching and Compliance Report",
    authors: "Tools: Ansible, Satellite, HTML5",
    conferences:
      "Tags: Automated Reporting, Compliance Management",
    researchYr: 2021,
    citebox: "popup7",
    image: "assets/images/Automations/Linux_Patching_report.png",
    citation: {
      vancouver:
        "This weekly automation shows the missing packages count from each server giving operation team visiblity on servers which missed the patching activity. It also provides the details of the servers which are not reporting to Satellite. The automation provides the information about the erratas that are missing from the server. The reports gets published as a webpage for team to securely view it.",
    },
    abstract:
      "The automation provides insights on the overall compliance status of the platform",
    absbox: "absPopup7",
  },
  {
    title:
      "Monthly Capacity Report for Solaris Environment",
    authors:
      "Tools: Ansible, Solaris, HTML5",
    conferences:
      "Tags: Automated Reporting, Capacity Management",
    researchYr: 2021,
    citebox: "popup8",
    image: "assets/images/Automations/Solaris_capacity_report.png",
    citation: {
      vancouver:
        "The capacity management in Solaris environment is a mess. This automation makes it easy to provide the insights at the capacity distribution from the Physical Domain to its assigned Global Zones and the underlying Local Zones. The automation generates and publishes a webpage for monthly utilization overview.",
    },
    abstract:
      "This ",
    absbox: "absPopup8",
  },
  {
    title:
      "Daily Solaris Hardware Status report",
    authors:
      "Tools: Ansible, Solaris, HTML5",
    conferences:
      "Tags: Automated Reporting, Monitoring",
    researchYr: 2021,
    citebox: "popup9",
    image: "assets/images/Automations/Solaris_capacity_report.png",
    citation: {
      vancouver:
        "The automation fetches the status of each of the components of the physical server using ipmitool. Generates the report of the all the components with their status and highlight and seperates the failed components sends mail for corrective actions. The daily report is also published as a webpage for respective teams to view. Future update includes Ansible rulebook for realtime failure status.",
    },
    abstract:
      "The automation provides a daily status report of SunOS hardwares and provides teams with an insights to take corrective actions.",
    absbox: "absPopup9",
  },
  {
    title:
      "Server Handover Report for Linux Environment",
    authors:
      "Tools: Ansible, CIS, ServiceNow, Azure, HTML5",
    conferences:
      "Tags: Automated Reporting, IaaC, Compliance Management, Standardization",
    researchYr: 2021,
    citebox: "popup10",
    image: "assets/images/Automations/Handover_report.png",
    citation: {
      vancouver:
        "The automation is provides a way into finding the delta between customers standard exepectation for the environment and the actual deployment. The autmation generates and deploys the a webpage of the server status once application deployment is ready to cutover to production environment. The automation helps in identifying the flows and missing activities so that the deployments are always standard and consistant through out platform. The automation validates tags in azure, all fields in the ServiceNow, CIS OS Hardening status, Client's security and performance expection regarding platform.",
    },
    abstract:
      "This automation generates the report of the server and validates the infrastrures intigrity before cut over to production.",
    absbox: "absPopup10",
  },
  {
    title:
      "Automated access provisioning for Linux Environment",
    authors:
      "Tools: Ansible, RedHat IDM, Azure",
    conferences:
      "Tags: Access Provisioning, IaaC, Standardization",
    researchYr: 2021,
    citebox: "popup11",
    image: "assets/images/Automations/IDM_Ansible_Azure.png",
    citation: {
      vancouver:
        "The automation uses Azure tags or Satellite tags depending on the deployment platform and creates User groups, Host groups, Host Based Access Policies and Sudo policies Rules as a standard set for the application team. The automation configures these Rules for each server deployed. Depending on the criteria of the deployment, the automation will either create a new set of the Rules or add the host to already existing ones. The automation gets rid of access provisioning. It also provides a standard way to assist with access provisioning.",
    },
    abstract:
      "The automation configures an access structure at the deployment of the server.",
    absbox: "absPopup12",
  },
  {
    title:
      "Precheck and Postchecks for any activity on Linux Environment",
    authors:
      "Tools: Ansible",
    conferences:
      "Tags: Operations",
    researchYr: 2021,
    citebox: "popup10",
    image: "assets/images/Automations/Prechecks_Automation.png",
    citation: {
      vancouver:
        "The automation generate a status report of the configurations of a Linux machine stores them into a central location. The configuraiton includes network configurations like route details, VLAN details, IP, Mac IDs, etc, multiple OS configurations from /etc and Cluster configuration, status, hardware details and many more. The automation also provides a way to validate these configuration post activity. This ensures the integrity of the server and provides an easy time saving way for the operation team to perform the scheduled activity.",
    },
    abstract:
      "The automation is used to create a configuration backup of the system prior to the activity and validates it post activity.",
    absbox: "absPopup10",
  },
  {
    title:
      "Decommission Automation for Linux Environment",
    authors:
      "Tools: Ansible, Satellite, RedHat IDM, Azure",
    conferences:
      "Tags: IaaC, Standardization",
    researchYr: 2021,
    citebox: "popup10",
    image: "assets/images/Automations/Decommission_Automation.png",
    citation: {
      vancouver:
        "The automation is targeted towards the decommissioning of the server from Infrastructure tools like Satellite, RedHat IDM, Azure. The automation is triggered upon ServiceNow request reaches the Operation Team's queue and awaits for the approval from the Operation Engineer. The automation also generates a capacity released details as webpage and publishes it also sends it over mail for referances.",
    },
    abstract:
      "This automation decommissions the server from the infrastrure tools upon ServiceNow requests reaches to operational queue.",
    absbox: "absPopup10",
  },
  {
    title:
      "Disaster recovery Activities Automations",
    authors:
      "Tools: Ansible",
    conferences:
      "Tags: Operations, Disaster Recovery",
    researchYr: 2021,
    citebox: "popup11",
    image: "assets/images/experience-page/Red-Hat-AAP.ico",
    citation: {
      vancouver:
        "The automation targets towards the system configurations that are required to change before migrations to disaster recovery. These changes help save time in the disaster recovery drills as well as the actual scenarios.",
    },
    abstract:
      "This automation assists with the disaster recovery activity to same time and help get the production up and running in less time.",
    absbox: "absPopup11",
  },
  {
    title: "Satellite Configuration as a Code",
    authors:
      "Tools: Ansible, Satellite",
    conferences:
      "Tags: CaaC, Satellite, Ansible",
    researchYr: 2023,
    citebox: "popup12",
    image: "assets/images/Automations/Satellite_Ansible.jpg",
    citation: {
      vancouver:
        "This automation converts the configurations of satellite into code. All aspects of the satellite like users, groups, roles, products, content credentials, repositories, subscriptions, activation keys, content views, composite content views, content view filters, host groups, locations, compute profiles, etc. This enables a standardized way to deploy configurations on the satellite and gives a way to recover and restore the satellite to its previous state.",
    },
    abstract:
      "A configuration as a code via Ansible playbook for the Satellite's all aspects.",
    absbox: "absPopup12",
  },
  {
    title: "Ansible Automation Platform Configuration as a Code",
    authors:
      "Tools: Ansible",
    conferences:
      "Tags: CaaC, Ansible",
    researchYr: 2023,
    citebox: "popup13",
    image: "assets/images/experience-page/Red-Hat-AAP.ico",
    citation: {
      vancouver:
        "This automation converts the configurations of Ansible Automation Platform into code. All aspects of the satellite like credential, execution environment, group, instance, instance group, inventory, inventory source, job template, notification template, organization, project, role, schedule, settings, subscriptions, team, user, workflow job template etc. This enables a standardized way to deploy configurations on the Ansible Automation Platform and gives a way to recover and restore the Ansible Automation Platform to its previous state.",
    },
    abstract:
      "A configuration as a code via Ansible playbook for the Ansible Automation Platform's all aspects.",
    absbox: "absPopup13",
  },
  {
    title: "LVM Configuaration for the Linux Servers",
    authors:
      "Tools: Ansible, Linux",
    conferences:
      "Tags: Ansible, LVM",
    researchYr: 2023,
    citebox: "popup14",
    image: "assets/images/experience-page/Red-Hat-AAP.ico",
    citation: {
      vancouver:
        "LVM configuration for any Linux servers is vital for its optimal performace. This automation creates a standardized way to manage the LVM.",
    },
    abstract:
      "Creates and Manages LVM configuration for newly deployed servers",
    absbox: "absPopup14",
  },
  {
    title: "Leapp in place upgrade of RHEL Servers",
    authors:
      "Tools: Ansible, Linux, Satellite, HTML",
    conferences:
      "Tags: Ansible, LVM",
    researchYr: 2023,
    citebox: "popup15",
    image: "assets/images/Automations/Leapp-Satellite-Ansible-HTML.jpg",
    citation: {
      vancouver:
        "The automation included a workflow of four stages:<br>1. Report generation and uploading to sharepoint.<br>2. Based on issues found in the report, performing multiple remediation tasks and uploading the remediation report to sharepoint.<br>3. Validation OS readiness and performing the LEAPP.<br>4. Performing the closure tasks including rehardening and making the OS compatible with client specifications.",
    },
    abstract:
      "Fully Automated RedHat Major version in place upgrade using Leapp Utility.",
    absbox: "absPopup15",
  },
  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            DISCRIPTION
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
