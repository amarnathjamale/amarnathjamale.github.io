AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Azure DevOps Engineer",
    cardImage: "assets/images/experience-page/Azure-Devops_TCS_DNB.png",
    place: "TCS-DNB Infrastrure Engineer",
    time: "(May, 2020 - Present)",
    desp: "<li>Developed multiple Azure Pipelines to have a CICD deployment for several applications.</li> <li>Utlized Biceps for pipeline deployments.</li> <li>Migrated multiple OnPrem workloads to Azure and standardized them via pipeline.</li> <li>Azure Administrator support for Cloud Workload.</li>",
  },
  {
    title: "Ansible Developer",
    cardImage: "assets/images/experience-page/Ansible_TCS_DNB.png",
    place: "TCS-DNB Infrastrure Engineer",
    time: "(Dec, 2019 - Present)",
    desp: "<li>Developed multiple playbooks to automate the Infrastrure workloads.</li><li>Automated serveral application deployments and configuration.</li><li>IaC for OS Deployments with OS customizations, CIS hardening and default applications deployments and configurations.</li> <li>Reports generations: for OS Compliances and security, Patching, application deployments and many more.</li>",
  },
  {
    title: "Unix/Linux Platform Engineer",
    cardImage: "assets/images/experience-page/Linux_TCS_DNB.png",
    place: "TCS-DNB Infrastrure Engineer",
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
        description: "Linux",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      
      {
        title: "Red Hat" ,   
        description: "Red Hat",  
        cardImage: "assets/images/Arsenal/Red-Hat.svg",
      },
      
      {
        title: "Windows" ,   
        description: "Windows",  
        cardImage: "assets/images/Arsenal/windows.ico",
      },
      
      {
        title: "Oracle Solaris" ,   
        description: "Oracle Solaris",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      
      {
        title: "Fedora" ,   
        description: "Fedora",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
      },
      
      {
        title: "Ubuntu" ,   
        description: "Ubuntu",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      },
      
      {
        title: "Android" ,   
        description: "Android",  
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
        description: "Azure",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      
      {
        title: "Amazon Web Services" ,   
        description: "Amazon Web Services",  
        cardImage: "https://cdn.jsdelivr.net/gh/amarnathjamale/starter-workflows/icons/aws.svg",
      },
      
      {
        title: "Google Cloud" ,   
        description: "Google Cloud",  
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
        description: "Red Hat Ansible Automation Platform",  
        cardImage: "assets/images/Arsenal/Red-Hat-AAP.ico",
      },
      
      {
        title: "Red Hat OpenShift" ,   
        description: "Red Hat OpenShift",  
        cardImage: "https://cdn.jsdelivr.net/gh/amarnathjamale/starter-workflows/icons/openshift.svg",
      },
      
      {
        title: "Red Hat Enterprise Linux" ,   
        description: "Red Hat Enterprise Linux",  
        cardImage: "assets/images/Arsenal/Red-Hat-Linux.png",
      },
      
      {
        title: "Red Hat Satellite" ,   
        description: "Red Hat Satellite",  
        cardImage: "assets/images/Arsenal/Red-Hat-Satellite.png",
      },
      
      {
        title: "Red Hat Identity Management" ,   
        description: "Red Hat Identity Management",  
        cardImage: "assets/images/Arsenal/Red-Hat-IDM.png",
      },
      
      {
        title: "Red Hat Insights" ,   
        description: "Red Hat Insights",  
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
        description: "Python",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      
      {
        title: "YAML" ,   
        description: "YAML",  
        cardImage: "https://upload.wikimedia.org/wikipedia/commons/6/63/YAML_logo_in_SVG_format.svg",
      },
      
      {
        title: "Bash" ,   
        description: "Bash",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
      
      {
        title: "Markdown" ,   
        description: "Markdown",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
      },
      
      {
        title: "HTML5" ,   
        description: "HTML5",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      
      {
        title: "CSS3" ,   
        description: "CSS3",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      
      {
        title: "Perl" ,   
        description: "Perl",  
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
        description: "Ansible",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      },
      
      {
        title: "Azure DevOps" ,   
        description: "Azure DevOps",  
        cardImage: "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-DevOps.svg",
      },
      
      {
        title: "Kubernetes" ,   
        description: "Kubernetes",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      
      {
        title: "Docker" ,   
        description: "Docker",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      
      {
        title: "Podman" ,   
        description: "Podman",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg",
      },
      
      {
        title: "Jenkins" ,   
        description: "Jenkins",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      
      {
        title: "Terraform" ,   
        description: "Terraform",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      
      {
        title: "k3s" ,   
        description: "k3s",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/k3s/k3s-original.svg",
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
        description: "Jira",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      },
      
      {
        title: "Confluence" ,   
        description: "Confluence",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
      },
      
      {
        title: "BitBucket" ,   
        description: "BitBucket",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
      },
      {
        title: "Azure Repos" ,   
        description: "Azure Repos",  
        cardImage: "assets/images/Arsenal/repos.ico",
      },
      
      {
        title: "Azure Pipelines" ,   
        description: "Azure Pipelines",  
        cardImage: "assets/images/Arsenal/pipelines.ico",
      },
      
      {
        title: "Azure Functions" ,   
        description: "Azure Functions",  
        cardImage: "assets/images/Arsenal/function.ico",
      },
      
      {
        title: "Azure Boards" ,   
        description: "Azure Boards",  
        cardImage: "assets/images/Arsenal/boards.ico",
      },
      
      {
        title: "Azure TestPlans" ,   
        description: "Azure TestPlans",  
        cardImage: "assets/images/Arsenal/testplans.ico",
      },
      
      {
        title: "Azure Artifacts" ,   
        description: "Azure Artifacts",  
        cardImage: "assets/images/Arsenal/artifacts.ico",
      },
      {
        title: "Git" ,   
        description: "Git",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      
      {
        title: "GitLab" ,   
        description: "GitLab",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      },
      
      {
        title: "GitHub" ,   
        description: "GitHub",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        title: "Visual Studio" ,   
        description: "Visual Studio",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      },
      
      {
        title: "Visual Studio Code" ,   
        description: "Visual Studio Code",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      
      {
        title: "Vim" ,   
        description: "Vim",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
      },
            
      {
        title: "Terminal" ,   
        description: "Terminal",  
        cardImage: "assets/images/Arsenal/terminal.ico",
      },
      
      {
        title: "Jupyter" ,   
        description: "Jupyter",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      
      {
        title: "Tensorflow" ,   
        description: "Tensorflow",  
        cardImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      
      {
        title: "Microsoft Power Apps" ,   
        description: "Microsoft Power Apps",  
        cardImage: "assets/images/Arsenal/powerapps.ico",
      },
      
      {
        title: "Microsoft Power Automate" ,   
        description: "Microsoft Power Automate",  
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

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
