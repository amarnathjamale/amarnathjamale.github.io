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
      "Tags: OS Hardening, IaaC, Automated Reporting",
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
    researchYr: 2020,
    citebox: "popup5",
    image: "assets/images/Automations/CyberArk_Ansible_Azure_Satellite.png",
    citation: {
      vancouver:
        "The automation targets towards fully deploying of Server using Azure Pipeline and deploy the CyberArk PSMP application at the build time. The automation also configures PSMP application. The automation supports dynamic upgradation of application and redeploying of the whole PSMP infrastructure on the fly.",
    },
    abstract:
      "Dynamic installation of the PSMP application along with infrastrure deployment.",
    absbox: "absPopup5",
  },

  {
    title: "Deep Unfolding Network for Image Super-Resolution",
    authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup6",
    image: "assets/images/research-page/deepNetwork.png",
    citation: {
      vancouver:
        "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 6",
    absbox: "absPopup6",
  },

  {
    title:
      "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
    authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup7",
    image: "assets/images/research-page/imageDecomposition.png",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },
  {
    title:
      "Forward and Backward Information Retention for Accurate Binary Neural Networks",
    authors:
      "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup8",
    image: "assets/images/research-page/neuralNetworks.jpg",
    citation: {
      vancouver:
        "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 8",
    absbox: "absPopup8",
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
