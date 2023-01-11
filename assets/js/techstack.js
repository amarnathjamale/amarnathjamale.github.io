AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);



// OperatingSystems Cards

const OperatingSystems = document.querySelector(".OperatingSystems");
const OperatingSystemscards = [

      {
        langName: "Linux" ,   
        langDesc: "My Love for Linux OS keeps on growing as I use it everyday for various purposes like WSL, Containers, Developments and many more. Arch Linux is one of my favourite distro.",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      
      {
        langName: "Red Hat" ,   
        langDesc: "I have been working on RHEL systems from RHEL6 to 9 since my first day of my Job. Pacemaker, Veritas, XFS filesystmes are some of my daily utilized features of RHEL.",  
        langImage: "assets/images/Arsenal/Red-Hat.svg",
      },
      
      {
        langName: "Windows" ,   
        langDesc: "No caption needed here.",  
        langImage: "assets/images/Arsenal/windows.ico",
      },
      
      {
        langName: "Oracle Solaris" ,   
        langDesc: "I have been supporting Solaris 10 and 11 as part of Unix Platform Engineer career. SunOS cluster, ZFS Filesystems, Branded and non branded Zones and other Solaris aspects I had worked on.",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      
      {
        langName: "Fedora" ,   
        langDesc: "This is my daily driver OS. Being upstream of RHEL and official support of RedHat, stable and improved development of the Fedora is reason I always recommend it to my friends.",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
      },
      
      {
        langName: "Ubuntu" ,   
        langDesc: "This is my old daily driver. I still use it daily as a part of WSL development setup.",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      },
      
      {
        langName: "Android" ,   
        langDesc: "I have rooted my Andorid device for modding and customizing with custom OS based AOSP, CAF and LOS. NetHunter, Magisk and Lucky Patcher are my favourite addons for my Android.",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },

];

const displayOSCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayOSCards);


// Arsenals Section

// Cloud Arsenals
const cloudarsenal = document.querySelector(".cloudarsenal");
const cloudarsenalcards = [
      {
        langName: "Azure" ,   
        langDesc: "As a part of Azure DevOps Engineer, I have been managing Azure portal to support almost all of its components. Certifications: AZ-900, AZ-104, AZ-204, AZ-400",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      
      {
        langName: "Amazon Web Services" ,   
        langDesc: "Amazon Web Services has some of personal and coorporate projects that I have worked on.",  
        langImage: "https://cdn.jsdelivr.net/gh/amarnathjamale/starter-workflows/icons/aws.svg",
      },

      {
        langName: "Google Cloud" ,   
        langDesc: "I have got my hands on Google Cloud while working on some of the hackathons.",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
];

const showCloudCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
document.addEventListener("DOMContentLoaded", showCloudCards);


// RedHat Arsenals
const RedHatarsenal = document.querySelector(".RedHatarsenal");
const RedHatarsenalcards = [
      {
        langName: "Red Hat Ansible Automation Platform" ,   
        langDesc: "I have been managing the RedHat Ansible Automation Platform of 1000+ servers with 80+ projects containing 300+ Automation Roles and templates.",  
        langImage: "assets/images/Arsenal/Red-Hat-AAP.ico",
      },

      {
        langName: "Red Hat OpenShift" ,   
        langDesc: "I have recently started managing and developing the Red Hat OpenShift Platform. I have couple of sandbox projects on Openshift where I have deployed and managed from the entire applications",  
        langImage: "https://cdn.jsdelivr.net/gh/amarnathjamale/starter-workflows/icons/openshift.svg",
      },

      {
        langName: "Red Hat Enterprise Linux" ,   
        langDesc: "I have been deploying and managing RHEL6 to RHEL9 servers for 4 Years now. I have many automations projects targeting RHEL machines to make them IaC deployments standarized.",  
        langImage: "assets/images/Arsenal/Red-Hat-Linux.png",
      },
      
      {
        langName: "Red Hat Satellite" ,   
        langDesc: "I have managed Red Hat Satellite platform with 1000+ servers for repository and package managements. I have also managed the IaC codes for Satellite deployments via Kickstarter templates.",  
        langImage: "assets/images/Arsenal/Red-Hat-Satellite.png",
      },
      
      {
        langName: "Red Hat Identity Management" ,   
        langDesc: "User mangement, Access management, DNS management and Automated access configurations with Ansible are some of the things I have worked on with IDM.",  
        langImage: "assets/images/Arsenal/Red-Hat-IDM.png",
      },
      
      {
        langName: "Red Hat Insights" ,   
        langDesc: "I have been utilizing the RedHat console and Insights for managing the overview of Infrastrure for Vulnerability management.",  
        langImage: "assets/images/Arsenal/Red-Hat-Insights.png",
      },

];

const showRedHatCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
document.addEventListener("DOMContentLoaded", showRedHatCards);


// Language Arsenals
const Languagearsenal = document.querySelector(".Languagearsenal");
const Languagearsenalcards = [ 
      {
        langName: "Python" ,   
        langDesc: "Python",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      
      {
        langName: "YAML" ,   
        langDesc: "YAML",  
        langImage: "https://upload.wikimedia.org/wikipedia/commons/6/63/YAML_logo_in_SVG_format.svg",
      },
      
      {
        langName: "Bash" ,   
        langDesc: "Bash",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
      
      {
        langName: "Markdown" ,   
        langDesc: "Markdown",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
      },
      
      {
        langName: "HTML5" ,   
        langDesc: "HTML5",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      
      {
        langName: "CSS3" ,   
        langDesc: "CSS3",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      
      {
        langName: "Perl" ,   
        langDesc: "Perl",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg",
      },

];

const showLanguageCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
document.addEventListener("DOMContentLoaded", showLanguageCards);


// DevOps Arsenals
const DevOpsarsenal = document.querySelector(".DevOpsarsenal");
const DevOpsarsenalcards = [
      {
        langName: "Ansible" ,   
        langDesc: "Ansible",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      },
      
      {
        langName: "Azure DevOps" ,   
        langDesc: "Azure DevOps",  
        langImage: "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-DevOps.svg",
      },
      
      {
        langName: "Kubernetes" ,   
        langDesc: "Kubernetes",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      
      {
        langName: "Docker" ,   
        langDesc: "Docker",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      
      {
        langName: "Podman" ,   
        langDesc: "Podman",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg",
      },
      
      {
        langName: "Jenkins" ,   
        langDesc: "Jenkins",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      
      {
        langName: "Terraform" ,   
        langDesc: "Terraform",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      
      {
        langName: "k3s" ,   
        langDesc: "k3s",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/k3s/k3s-original.svg",
      },

];

const showDevOpsCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
document.addEventListener("DOMContentLoaded", showDevOpsCards);

// Operational Arsenals
const Operationalarsenal = document.querySelector(".Operationalarsenal");
const Operationalarsenalcards = [
      {
        langName: "Jira" ,   
        langDesc: "Jira",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      },
      
      {
        langName: "Confluence" ,   
        langDesc: "Confluence",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
      },
      
      {
        langName: "BitBucket" ,   
        langDesc: "BitBucket",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
      },
      {
        langName: "Azure Repos" ,   
        langDesc: "Azure Repos",  
        langImage: "assets/images/Arsenal/repos.ico",
      },
      
      {
        langName: "Azure Pipelines" ,   
        langDesc: "Azure Pipelines",  
        langImage: "assets/images/Arsenal/pipelines.ico",
      },
      
      {
        langName: "Azure Functions" ,   
        langDesc: "Azure Functions",  
        langImage: "assets/images/Arsenal/function.ico",
      },
      
      {
        langName: "Azure Boards" ,   
        langDesc: "Azure Boards",  
        langImage: "assets/images/Arsenal/boards.ico",
      },
      
      {
        langName: "Azure TestPlans" ,   
        langDesc: "Azure TestPlans",  
        langImage: "assets/images/Arsenal/testplans.ico",
      },
      
      {
        langName: "Azure Artifacts" ,   
        langDesc: "Azure Artifacts",  
        langImage: "assets/images/Arsenal/artifacts.ico",
      },
      {
        langName: "Git" ,   
        langDesc: "Git",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      
      {
        langName: "GitLab" ,   
        langDesc: "GitLab",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      },
      
      {
        langName: "GitHub" ,   
        langDesc: "GitHub",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        langName: "Visual Studio" ,   
        langDesc: "Visual Studio",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      },
      
      {
        langName: "Visual Studio Code" ,   
        langDesc: "Visual Studio Code",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      
      {
        langName: "Vim" ,   
        langDesc: "Vim",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
      },
            
      {
        langName: "Terminal" ,   
        langDesc: "Terminal",  
        langImage: "assets/images/Arsenal/terminal.ico",
      },
      
      {
        langName: "Jupyter" ,   
        langDesc: "Jupyter",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      
      {
        langName: "Tensorflow" ,   
        langDesc: "Tensorflow",  
        langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      
      {
        langName: "Microsoft Power Apps" ,   
        langDesc: "Microsoft Power Apps",  
        langImage: "assets/images/Arsenal/powerapps.ico",
      },
      
      {
        langName: "Microsoft Power Automate" ,   
        langDesc: "Microsoft Power Automate",  
        langImage: "assets/images/Arsenal/automate.ico",
      },

];

const showOperationalCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
document.addEventListener("DOMContentLoaded", showOperationalCards);
