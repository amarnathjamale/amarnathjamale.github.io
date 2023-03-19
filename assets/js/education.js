AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Google India Challenge Scholarship: Front-End Web Dev",
    cardImage: "assets/images/education-page/Udacity_logo.svg",
    moocLink:
      "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011",
  },
  {
    title: "Linux System Engineer: Bash Shell Scripting for Automation",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/linux-system-engineer-bash-shell-scripting-for-automation",
  },
  {
    title: "Azure Administration Essential Training",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/azure-administration-essential-training-2019",
  },
  {
    title: "Developing CI/CD Solutions with Azure DevOps",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops",
  },
  {
    title: "Azure Active Directory: Basics",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/azure-active-directory-basics",
  },
  {
    title: "Ansible Essential Training",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/ansible-essential-training-2018",
  },
  {
    title: "Azure Administration: Monitor and Back Up Azure Resources",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/azure-administration-monitor-and-back-up-azure-resources",
  },
  {
    title: "Programming Foundations: Fundamentals",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/programming-foundations-fundamentals-3",
  },
  {
    title: "Getting Started with Python",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/paths/getting-started-with-python",
  },
  {
    title: "Learning Python",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink:
      "https://www.linkedin.com/learning/learning-python-14393370",
  },
  {
    title: "Building a Web Application on Microsoft Azure",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure",
  },
  {
    title: "Getting Started as an Azure Developer",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/paths/getting-started-as-an-azure-developer",
  },
  {
    title: "Getting Started with Microsoft Azure Administration",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink:
      "https://www.linkedin.com/learning/paths/getting-started-with-microsoft-azure-administration",
  },
  {
    title: "Microsoft Azure: Security Concepts",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/microsoft-azure-security-concepts-8637760",
  },
  {
    title: "Azure for DevOps: Continuous Integration",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink:
      "https://www.linkedin.com/learning/azure-for-devops-continuous-integration",
  },  {
    title: "Azure Administration: Implement and Manage Storage",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink: "https://www.linkedin.com/learning/azure-administration-implement-and-manage-storage",
  },
  {
    title: "Cloud Architecture: Design Decisions",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink:
      "https://www.linkedin.com/learning/cloud-architecture-design-decisions-2018",
  },  
  {
    title: "Learning Amazon Web Services (AWS) for Developers",
    cardImage: "assets/images/education-page/linkedin-learning.svg",
    moocLink:
      "https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers-2020",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
