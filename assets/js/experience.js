AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Azure DevOps Engineer",
    cardImage: "assets/images/experience-page/TCS_Azure_DevOps.png",
    place: "Tata Consultancy Services Ltd.",
    time: "(May, 2020 - Present)",
    desp: "<li>Designed and implemented multiple Azure pipelines for continuous integration and continuous deployment of various applications.</li> <li>Leveraged Biceps to streamline pipeline deployments.</li> <li>Successfully migrated on-premises workloads to Azure and standardized them through the use of pipelines.</li> <li>Provided expert-level Azure administrator support for cloud-based workloads.</li>",
  },
  {
    title: "Ansible Developer",
    cardImage: "assets/images/experience-page/TCS_Ansible_Developer.png",
    place: "Tata Consultancy Services Ltd.",
    time: "(Dec, 2019 - Present)",
    desp: "<li>Created multiple playbooks to automate infrastructure workloads.</li> <li>Automated multiple application deployments and configurations utilizing scripting and configuration management tools.</li> <li>Implemented Infrastructure as Code (IaC) for OS deployments with customizations, CIS hardening, and deployment of default applications and configurations.</li> <li>Generated detailed reports for compliance and security, patching, application deployments, and other operational tasks.</li> ",
  },
  {
    title: "Unix/Linux Platform Engineer",
    cardImage: "assets/images/experience-page/TCS_Unix_Platform_Engineer.png",
    place: "Tata Consultancy Services Ltd.",
    time: "(Feb, 2019 - Present)",
    desp: "<li>Bash Automations Scripts for Daily operational works.</li><li>Access management by OpenLDAP & RedHat IDM standardized using multiple scripts created and use cases documented which upon shared with L1 resources distributed the workload based on skill level.</li> <li> Worked on many filesystems’ creation/extension, PCS, VCS & Sun Cluster configurations tasks as a part of regular Unix operation tasks.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// OperatingSystems Cards

const OperatingSystems = document.querySelector(".OperatingSystems");
const OperatingSystemscards = [

      {
        title: "Linux" ,   
        description: "I have a strong passion for the Linux operating system and use it daily for various tasks such as Windows Subsystem for Linux, containers, and development. I use Arch BTW.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      
      {
        title: "Red Hat" ,   
        description: "As a UNIX platform engineer, I have been working with Red Hat Enterprise Linux systems from version 6 to 9. I regularly use features such as Pacemaker, Veritas, and XFS file systems.",  
        cardImage: "assets/images/Arsenal/Red-Hat.svg",
      },
      
      {
        title: "Windows" ,   
        description: "I am also familiar with Windows Server, including server roles and features, active directory, and group policy management. I have experience working with PowerShell for automation and scripting tasks.",  
        cardImage: "assets/images/Arsenal/windows.ico",
      },
      
      {
        title: "Oracle Solaris" ,   
        description: "I have also supported Solaris 10 and 11 in my career. I have experience with SunOS clusters, ZFS file systems, branded and non-branded zones, and other aspects of Solaris.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      
      {
        title: "Fedora" ,   
        description: "I currently use Fedora as my daily driver operating system. Its stable and improved development, as well as official support from Red Hat, is why I often recommend it to others.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
      },
      
      {
        title: "Ubuntu" ,   
        description: "I previously used Ubuntu as my daily driver, and still use it regularly as part of my Windows Subsystem for Linux development setup.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      },
      
      {
        title: "Android" ,   
        description: "As an avid Android user, I have rooted my device to customize it with custom operating systems based on AOSP, CAF, and LOS. Some of my favorite add-ons include NetHunter, Magisk, and Lucky Patcher.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },

];

const showCards = () => {
  let output = "";
  OperatingSystemscards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  OperatingSystems.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Arsenals Section

// Cloud Arsenals
const cloudarsenal = document.querySelector(".cloudarsenal");
const cloudarsenalcards = [
      {
        title: "Azure" ,   
        description: "As an Azure DevOps Engineer, I am experienced in managing the Azure portal and its various components. I am certified in AZ-900, AZ-104, AZ-204, and AZ-400.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      
      {
        title: "Amazon Web Services" ,   
        description: "I have experience working with Amazon Web Services on both personal and professional projects.",  
        cardImage: "https://cdn.jsdelivr.net/gh/amarnathjamale/starter-workflows/icons/aws.svg",
      },

      {
        title: "Google Cloud" ,   
        description: "I have also had the opportunity to work with Google Cloud through participation in hackathons.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
];

const showCloudCards = () => {
  let output = "";
  cloudarsenalcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  cloudarsenal.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCloudCards);


// RedHat Arsenals
const RedHatarsenal = document.querySelector(".RedHatarsenal");
const RedHatarsenalcards = [
      {
        title: "Red Hat Ansible Automation Platform" ,   
        description: "I have been managing the Red Hat Ansible Automation Platform for over 1000 servers, with 80+ projects containing 300+ automation roles and templates.",  
        cardImage: "assets/images/Arsenal/Red-Hat-AAP.ico",
      },

      {
        title: "Red Hat OpenShift" ,   
        description: "I have recently started managing and developing the Red Hat OpenShift Platform. I have several sandbox projects on OpenShift where I have deployed and managed entire applications.",  
        cardImage: "https://cdn.jsdelivr.net/gh/amarnathjamale/starter-workflows/icons/openshift.svg",
      },

      {
        title: "Red Hat Enterprise Linux" ,   
        description: "I have been deploying and managing RHEL6 to RHEL9 servers for 4 Years now. I have many automations projects targeting RHEL machines to make them IaC deployments standarized.",  
        cardImage: "assets/images/Arsenal/Red-Hat-Linux.png",
      },
      
      {
        title: "Red Hat Satellite" ,   
        description: "I have managed the Red Hat Satellite platform for over 1000 servers for repository and package management. I have also managed IaC codes for Satellite deployments using Kickstart templates.",  
        cardImage: "assets/images/Arsenal/Red-Hat-Satellite.png",
      },
      
      {
        title: "Red Hat Identity Management" ,   
        description: "User mangement, Access management, DNS management and Automated access configurations with Ansible are some of the things I have worked on with IDM.",  
        cardImage: "assets/images/Arsenal/Red-Hat-IDM.png",
      },
      
      {
        title: "Red Hat Insights" ,   
        description: "I have been utilizing the Red Hat console and Insights for managing the overview of Infrastrure for Vulnerability management.",  
        cardImage: "assets/images/Arsenal/Red-Hat-Insights.png",
      },

];

const showRedHatCards = () => {
  let output = "";
  RedHatarsenalcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  RedHatarsenal.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showRedHatCards);


// Language Arsenals
const Languagearsenal = document.querySelector(".Languagearsenal");
const Languagearsenalcards = [ 
      {
        title: "Python" ,   
        description: "I worked with many python scripts. Developed the python scripts to create the Ansible custom collections and automated multiple scripts.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      
      {
        title: "YAML" ,   
        description: "I have been writing in YAML for various platforms such as Ansible, Azure DevOps, Travis, Jenkins, Docker, Kubernetes, Chef, and more for the past 4 years.",
        cardImage: "https://upload.wikimedia.org/wikipedia/commons/6/63/YAML_logo_in_SVG_format.svg",
      },
      
      {
        title: "Bash" ,   
        description: "My bash automations includes reporting, housekeeping, applications start/stop and daily operational tasks which are usually coupled with cronjos and Ansible schedules.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
      
      {
        title: "HTML5" ,   
        description: "I prefer HTML5 to configure custom reports from Ansible. I use Jinja2 templating combined with HTML5 and CSS3 to create a customized reports. Also this website is developed in HTML5, Javascript and CSS3",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      
      {
        title: "CSS3" ,   
        description: "A HTML5 is incomplete without CSS3. Hence CSS3 comes bundled with HTML5.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      
      {
        title: "Javascript" ,   
        description: "I have developed this website using Javascript and jQuery Library.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },      

      {
        title: "jQuery" ,   
        description: "I have developed this website using Javascript and jQuery Library.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      },      
      
      {
        title: "ReactJS" ,   
        description: "I have couple of projects that utilizes ReactJS Library.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      
      {
        title: "Markdown" ,   
        description: "README.md are the reasons why I learnt markdown. I always have a README.md for my projects.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
      },
      
      {
        title: "Perl" ,   
        description: "I have developed multiple Oracle LDAP tasks scripts in perl for easier daily Unix Operations. The scripts includes User management, Host managements, Sudo access management, etc",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg",
      },

];

const showLanguageCards = () => {
  let output = "";
  Languagearsenalcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  Languagearsenal.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showLanguageCards);


// DevOps Arsenals
const DevOpsarsenal = document.querySelector(".DevOpsarsenal");
const DevOpsarsenalcards = [
      {
        title: "Ansible" ,   
        description: "Managed 1000+ servers with 80+ projects containing 300+ automation roles and templates and. I am also working on PoC for Event Driven Ansible.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      },
      
      {
        title: "Azure DevOps" ,   
        description: "As an Azure DevOps Engineer, I have been managing the Azure portal to support almost all of its components. I am certified in AZ-900, AZ-104, AZ-204, and AZ-400.",  
        cardImage: "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-DevOps.svg",
      },
      
      {
        title: "Kubernetes" ,   
        description: "I have experience working with Kubernetes tools such as kubectl, kubeadm and Helm. I have experience troubleshooting and debugging Kubernetes clusters.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      
      {
        title: "Docker" ,   
        description: "Worked with Docker, both as a container runtime and as a platform for building and deploying containerized applications. 2023 goal is to upload more projects to docker hub.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      
      {
        title: "Podman" ,   
        description: "As a Red Hat user, I am biased towards Podman for my container needs. I have experience creating custom Podman images and managing Podman containers.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg",
      },
      
      {
        title: "Jenkins" ,   
        description: "I have experience creating and configuring Jenkins jobs and pipelines. I have experience integrating Jenkins with other tools such as Ansible and Kubernetes.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      
      {
        title: "Terraform" ,   
        description: "I have experience creating and managing Terraform modules and state files. I have experience integrating Terraform with other tools such as Ansible and Kubernetes.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      
];

const showDevOpsCards = () => {
  let output = "";
  DevOpsarsenalcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  DevOpsarsenal.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showDevOpsCards);

// Operational Arsenals
const Operationalarsenal = document.querySelector(".Operationalarsenal");
const Operationalarsenalcards = [
      {
        title: "Jira" ,   
        description: "I use Jira for project management and tracking tasks, bugs, and issues. I have been utilizing Jira for 4 years now.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      },
      {
        title: "Confluence" ,   
        description: "Confluence is my go-to for documentation and collaboration. I use it to create and share documents, diagrams, and knowledge bases with my team.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
      },
      
      {
        title: "BitBucket" ,   
        description: "I use BitBucket for version control and code management for couple of coorporate projects.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
      },

      {
        title: "ServiceNow" ,   
        description: "I have experience using ServiceNow for IT service management and IT operations. I have created couple of Kanban Dashboards for better management and visibility of the team's progress.",  
        cardImage: "assets/images/Arsenal/ServiceNow.svg",
      },
      {
        title: "Azure Repos" ,   
        description: "I have used Azure Repos for developing and managing Azure Pipelines.",  
        cardImage: "assets/images/Arsenal/repos.ico",
      },
      
      {
        title: "Azure Pipelines" ,   
        description: "I have developed many Azure Pipelines for automating deployments of infrastructure and application.",  
        cardImage: "assets/images/Arsenal/pipelines.ico",
      },
      {
        title: "Git" ,   
        description: "Who doesn't know git. I have experience with Git flow and creating custom scripts for automating Git tasks.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      
      {
        title: "GitHub" ,   
        description: "GitHub is where I code most of my personal projects. I have experience with GitHub flow and creating custom pipelines for continuous integration and delivery. This website is also hosted on GitHub.",
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },

      {
        title: "Visual Studio Code" ,   
        description: "Visual Studio Code is my preferred code editor. I have a customized development setup with Ansible, Azure, HTML, BASH and many more extensions.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      
      {
        title: "Vim" ,   
        description: "I know how to exit out of Vim. I also have a NeoVim setup with customized extension for Ansible Developments.",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
      },

      {
        title: "Jupyter" ,   
        description: "I used Jupyter to develop python programmes and used it develop some of ML models using Pandas, Numpy and Tensorflow",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      
      {
        title: "Microsoft Power Automate" ,   
        description: "I use Power Automate to automate tasks and workflows like scheduling focusing modes on the fly, managing to-do list to increase my productivity.", 
        cardImage: "assets/images/Arsenal/automate.ico",
      },

];

const showOperationalCards = () => {
  let output = "";
  Operationalarsenalcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  Operationalarsenal.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showOperationalCards);
