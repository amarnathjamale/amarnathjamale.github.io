/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Leapp in place upgrade of RHEL Servers",
    authors:
      "Tools: Ansible, Linux, Satellite, HTML",
    conferences:
      "Tags: Ansible, LEAPP, Automated Reporting",
    researchYr: 2023,
    image: "assets/images/Automations/Leapp-Satellite-Ansible-HTML.jpg",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Report Generation and Uploading to SharePoint:<br>   - Purpose: The automation task involves generating a comprehensive report that identifies potential issues or incompatibilities with the target RHEL version. The report includes details such as software dependencies, unsupported packages, deprecated features, and other relevant information.<br>   - Details: The automation playbook collects the necessary data from the RHEL servers, analyzes it, and generates the report. The report is then automatically uploaded to a SharePoint platform or similar collaboration tool for easy access and reference by the relevant stakeholders.<br><br>2. Remediation based on Report Findings and Uploading the Remediation Report:<br>   - Purpose: This stage involves addressing the issues identified in the report generated during the first stage. The automation playbook performs multiple remediation tasks to resolve the identified issues and ensure compatibility with the target RHEL version.<br>   - Details: The playbook applies predefined remediation actions such as updating packages, modifying configurations, replacing deprecated features, or resolving software dependencies. After performing the remediation tasks, a detailed report outlining the actions taken is generated and uploaded to the SharePoint platform for documentation purposes.<br><br>3. OS Readiness Validation and Performing the LEAPP:<br>   - Purpose: This stage ensures that the RHEL servers are ready for the upgrade process. It involves validating the operating system's readiness, performing any additional pre-upgrade tasks, and initiating the LEAPP (Linux Environment Adaptive Preupgrade Processor) process.<br>   - Details: The automation playbook verifies prerequisites, such as disk space availability, sufficient memory, and network connectivity. It performs system checks, backups if necessary, and executes the LEAPP tool to handle the in-place upgrade process. The playbook monitors the upgrade progress and provides relevant notifications or alerts.<br><br>4. Closure Tasks, Rehardening, and Ensuring Compatibility:<br>   - Purpose: The final stage focuses on completing the upgrade process and ensuring that the upgraded RHEL servers comply with client specifications. It includes closure tasks such as rehardening the servers, applying security configurations, and verifying compatibility with specific client requirements.<br>   - Details: The automation playbook performs the necessary closure tasks, including reconfiguring security settings, applying client-specific configurations, and conducting compatibility tests. It generates a closure report documenting the actions taken and the successful completion of the upgrade process.<br><br>Benefits:<br>1. Efficiency and Time Savings: The Leapp in-place upgrade automation streamlines the upgrade process, reducing manual effort and saving time. The automation performs tasks that would otherwise be time-consuming if done manually, such as generating reports, identifying issues, and applying remediation actions.<br>2. Improved Reliability and Consistency: By automating the workflow, the upgrade process becomes more reliable and consistent. The automation playbook follows predefined steps and executes tasks consistently, minimizing the chances of human error.<br>3. Compliance and Compatibility: The automation ensures that the upgraded RHEL servers comply with client specifications and requirements. It performs validation checks, applies necessary configurations, and verifies compatibility, reducing the risk of post-upgrade issues or conflicts.<br><br>Considerations:<br>1. Testing and Validation: It is crucial to thoroughly test the automation workflow in a controlled environment before applying it to production servers. This ensures the reliability and accuracy of the automation process.<br>2. Documentation and Reporting: Proper documentation of each stage, including reports and remediation actions, is essential for future reference and auditing purposes.<br>3. Monitoring and Error Handling: Implement monitoring mechanisms to track the progress of the automation tasks and set up appropriate notifications or alerts to handle any errors or failures during the upgrade process.",
    },
    abstract:
      "The Leapp in-place upgrade automation for RHEL servers is a comprehensive workflow that facilitates the seamless upgrading of RHEL servers to newer versions. This automation encompasses four distinct stages: report generation, remediation, validation, and closure. Through this automation, the process of upgrading RHEL servers becomes more efficient, reducing manual effort and ensuring compatibility with client specifications.",
  },
  {
    title: "Satellite Configuration as a Code",
    authors:
      "Tools: Ansible, Satellite",
    conferences:
      "Tags: CaaC, Satellite, Ansible",
    researchYr: 2023,
    image: "assets/images/Automations/Satellite_Ansible.jpg",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Configuration Extraction:<br>   - Purpose: The automation task involves extracting the existing configurations of the Red Hat Satellite, including users, groups, roles, products, content credentials, repositories, subscriptions, activation keys, content views, composite content views, content view filters, host groups, locations, compute profiles, and other relevant components.<br>   - Details: The automation playbook interacts with the Satellite's API or CLI to retrieve the configurations and their associated settings. It organizes and structures the extracted data into a readable and manageable format, ready for conversion into code.<br><br>2. Configuration Conversion into Code:<br>   - Purpose: This stage focuses on converting the extracted configurations into code format, enabling a standardized and version-controlled representation of the Satellite's configurations.<br>   - Details: The automation playbook transforms the extracted configurations into code, using JSON output received by Satellite API. It generates code files that capture the desired state of the Satellite's configurations, including the relationships between different components. The code is stored in a version control system for easy management and tracking of changes.<br><br>3. Configuration Deployment and Restoration:<br>   - Purpose: This stage allows for the deployment of configurations from code onto the Satellite, ensuring consistency and reproducibility. It also facilitates the recovery and restoration of the Satellite to its previous state, if necessary.<br>   - Details: The automation playbook applies the code files to configure the Satellite, by using the Satellite's API based Ansible Module. It ensures that the configurations are set up according to the code, enabling standardization and simplification. Additionally, in the event of a Satellite failure or the need to revert to a previous state, the automation playbook can restore the configurations using the code as a reference.<br><br>Benefits:<br>1. Standardization and Consistency: The Satellite Configuration as Code automation enables organizations to define configurations in a standardized, code-based format. This ensures consistent deployment of configurations across multiple Satellite instances or environments.<br>2. Simplified Configuration Management: By converting configurations into code, managing and tracking changes becomes more streamlined. Organizations can use version control systems to track modifications, compare different versions, and roll back changes when needed.<br>3. Reproducibility and Recovery: The code-based configurations provide a reliable way to reproduce the Satellite's configurations in case of failures, disaster recovery scenarios, or when setting up new instances. It simplifies the process of restoring the Satellite to a known and desired state.<br><br>Considerations:<br>1. Security and Access Control: Ensure that appropriate access controls and security measures are in place to protect the code files containing sensitive information about the Satellite's configurations.<br>2. Testing and Validation: Thoroughly test the automation workflow and the code-based configurations in a non-production environment to verify their correctness and compatibility.<br>3. Documentation and Versioning: Maintain comprehensive documentation of the code files, including any dependencies or specific instructions for deployment. Use version control systems to track changes and manage different versions of the configurations.",
    },
    abstract:
      "The Satellite Configuration as Code automation is a comprehensive solution that converts various aspects of the Red Hat Satellite configuration into code format. This automation covers multiple components, including users, groups, roles, products, content credentials, repositories, subscriptions, activation keys, content views, composite content views, content view filters, host groups, locations, compute profiles, and more. By converting these configurations into code, organizations can achieve standardization, simplification, and reproducibility in deploying configurations on the Satellite. Furthermore, this automation enables easy recovery and restoration of the Satellite to its previous state.",
  },
  {
    title: "Ansible Automation Platform Configuration as a Code",
    authors:
      "Tools: Ansible",
    conferences:
      "Tags: CaaC, Ansible",
    researchYr: 2023,
    image: "assets/images/experience-page/Red-Hat-AAP.ico",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Configuration Extraction:<br>   - Purpose: The automation task involves extracting the existing configurations of the Ansible Automation Platform, including credentials, execution environments, groups, instances, instance groups, inventories, inventory sources, job templates, notification templates, organizations, projects, roles, schedules, settings, subscriptions, teams, users, workflow job templates, and other relevant components.<br>   - Details: The automation playbook interacts with the Ansible Automation Platform's API based Ansible Module to retrieve the configurations and their associated settings. It organizes and structures the extracted data into a readable and manageable format, ready for conversion into code.<br><br>2. Configuration Conversion into Code:<br>   - Purpose: This stage focuses on converting the extracted configurations into code format, enabling a standardized and version-controlled representation of the Ansible Automation Platform's configurations.<br>   - Details: The automation playbook transforms the extracted configurations into code, typically using a format such as YAML or JSON. It generates code files that capture the desired state of the platform's configurations, including the relationships between different components. The code can be stored in a version control system for easy management, collaboration, and tracking of changes.<br><br>3. Configuration Deployment and Restoration:<br>   - Purpose: This stage allows for the deployment of configurations from code onto the Ansible Automation Platform, ensuring consistency and reproducibility. It also facilitates the recovery and restoration of the platform to its previous state, if necessary.<br>   - Details: The automation playbook applies the code files to configure the Ansible Automation Platform, either by using the platform's API based Ansible Module. It ensures that the configurations are set up according to the code, enabling standardization and simplification. In case of platform failures, disaster recovery scenarios, or the need to revert to a previous state, the automation playbook can restore the configurations using the code as a reference.<br><br>Benefits:<br>1. Standardization and Consistency: The Ansible Automation Platform Configuration as Code automation enables organizations to define configurations in a standardized, code-based format. This ensures consistent deployment of configurations across multiple instances or environments of the Ansible Automation Platform.<br>2. Simplified Configuration Management: By converting configurations into code, managing and tracking changes becomes more streamlined. Organizations can leverage version control systems to track modifications, compare different versions, and roll back changes when needed.<br>3. Reproducibility and Recovery: The code-based configurations provide a reliable way to reproduce the Ansible Automation Platform's configurations in case of failures, disaster recovery scenarios, or when setting up new instances. It simplifies the process of restoring the platform to a known and desired state.<br><br>Considerations:<br>1. Security and Access Control: Ensure that appropriate access controls and security measures are in place to protect the code files containing sensitive information about the platform's configurations.<br>2. Testing and Validation: Thoroughly test the automation workflow and the code-based configurations in a non-production environment to verify their correctness and compatibility.<br>3. Documentation and Versioning: Maintain comprehensive documentation of the code files, including any dependencies or specific instructions for deployment. Use version control systems to track changes and manage different versions of the configurations.",
    },
    abstract:
      "The Ansible Automation Platform Configuration as Code automation provides a comprehensive solution for converting the configurations of the Ansible Automation Platform into code format. This automation covers various aspects of the platform, including credentials, execution environments, groups, instances, instance groups, inventories, inventory sources, job templates, notification templates, organizations, projects, roles, schedules, settings, subscriptions, teams, users, workflow job templates, and more. By converting these configurations into code, organizations can achieve standardization, version control, and reproducibility in deploying configurations on the Ansible Automation Platform. Additionally, this automation facilitates easy recovery and restoration of the platform to its previous state.",
  },
  {
    title: "Fully automated SOSReport Upload",
    authors:
      "Tools: Ansible, Linux",
    conferences:
      "Tags: Ansible",
    researchYr: 2022,
    image: "assets/images/experience-page/Red-Hat-AAP.ico",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. SOSReport Generation:<br>   - Purpose: The automation task involves generating SOSReports, which provide a comprehensive snapshot of the system's configuration and diagnostic information for troubleshooting purposes.<br>   - Details: The automation playbook utilizes a customized Ansible execution image to execute commands and generate the SOSReport within the target system. The execution image includes the necessary tools and dependencies required for SOSReport generation.<br><br>2. Transfer SOSReport to Execution Image:<br>   - Purpose: This stage enables the transfer of the generated SOSReport from the target system to the customized Ansible execution image.<br>   - Details: The automation playbook establishes a secure transfer mechanism to securely transfer the SOSReport from the target system to the execution image. This ensures the report is readily available for further processing and uploading.<br><br>3. SOSReport Upload to Red Hat Support Portal:<br>   - Purpose: This stage facilitates the upload of the SOSReport to the Red Hat support portal using APIs, enabling seamless communication with the support team.<br>   - Details: The automation playbook utilizes the Red Hat support portal's APIs to initiate the upload process. It securely authenticates with the portal, prepares the SOSReport for upload, and transmits the report to the support portal. The script includes error handling and notification mechanisms to ensure the upload process completes successfully.<br><br>Benefits:<br>1. Automated SOSReport Generation: The automation streamlines the process of generating SOSReports, eliminating the need for manual intervention or execution of complex commands.<br>2. Disconnected System Support: The automation provides a solution for systems that are disconnected or non-internet-exposed, enabling them to generate and share SOSReports with the Red Hat support team.<br>3. Seamless Support Communication: By automating the SOSReport upload process, the automation ensures a smooth and efficient communication channel between the system administrators and the Red Hat support team, allowing for faster troubleshooting and issue resolution.<br><br>Considerations:<br>1. Security and Authentication: Ensure that the automation playbook and transfer mechanisms prioritize security measures to protect sensitive information within the SOSReport during transfer and uploading.<br>2. Error Handling and Notifications: Implement robust error handling mechanisms within the automation playbook to handle any unexpected scenarios during SOSReport generation, transfer, or upload. Set up appropriate notifications to alert stakeholders in case of upload failures or errors.<br>3. Compliance and Consent: Ensure compliance with relevant data protection regulations and obtain appropriate consent for collecting and transmitting diagnostic information in the SOSReport.",
    },
    abstract:
      "The Fully Automated SOSReport Upload automation provides a comprehensive solution for generating and uploading SOSReports to the Red Hat support portal. This automation leverages a customized Ansible execution image to generate the SOSReport and facilitates the transfer of the report to the execution image for uploading to the support portal using APIs. This automation is particularly useful for systems that are disconnected or non-internet-exposed, allowing them to generate and share SOSReports for troubleshooting and support purposes.",
  },
  {
    title: "Daily RedHat Support Cases Report",
    authors:
      "Tools: Ansible, Support Portal, Automated Reporting",
    conferences:
      "Tags: Ansible",
    researchYr: 2022,
    image: "assets/images/experience-page/Red-Hat-AAP.ico",
    citation: {
      vancouver:
        "Automation Task:<br>The automation task involves generating a daily report that consolidates all Red Hat support cases encountered within the organization. The task includes collecting information such as case IDs, descriptions, priority levels, assigned engineers, timestamps, and any other relevant details associated with each support case. This information is gathered from the Red Hat support portal using API.<br><br>Process Overview:<br><br>    Data Collection: The automation playbook collects the necessary data by querying the Red Hat support portal.<br>    Report Generation: The collected data is processed and formatted into a readable HTML report. The automation playbook applies any required filters, sorting, or data transformations to present the information in a concise and meaningful manner.<br>    Email Notification: Once the report is generated, the automation playbook automatically sends an email to the operations team containing the report.<br><br>Benefits:<br><br>    Time and Resource Savings: By automating the process of generating and sending the Red Hat support cases report, valuable time and resources are saved. This frees up the operations team from manually collecting and collating data, allowing them to focus on more critical tasks and responsibilities.<br>    Timely Updates: The daily reports ensure that the operations team remains up-to-date with the latest support cases, enabling them to promptly address any critical issues or prioritize tasks accordingly.<br>    Improved Visibility and Analysis: The consolidated reports provide a comprehensive overview of support cases, allowing the operations team to gain insights into trends, patterns, and areas that require attention. This information can be used to optimize processes, identify recurring issues, or plan future resource allocations effectively.<br><br>Considerations:<br><br>    Data Privacy and Security: Ensure that the automation process adheres to data privacy regulations and security protocols to protect sensitive information within the reports.<br>    Error Handling and Notifications: Implement appropriate error handling mechanisms within the automation playbook to handle any unexpected scenarios during data collection or report generation. Additionally, set up notifications to alert the relevant stakeholders if any issues arise with the automation task.",
    },
    abstract:
      "The automation task involves generating a daily report that consolidates all Red Hat support cases encountered within the organization. The task includes collecting information such as case IDs, descriptions, priority levels, assigned engineers, timestamps, and any other relevant details associated with each support case. This information is gathered from the Red Hat support portal using API.",
  },
  {
    title: "RedHat System Hardening as per CIS Guidelines",
    authors:
      "Tools: Ansible, CIS2 Fremework",
    conferences:
      "Tags: OS Hardening, IaaC, Automated Reporting, Standardization",
    researchYr: 2022,
    image: "assets/images/Automations/CIS_Ansible_RedHat.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. CIS Benchmark Deployment and Dynamic Rule Updates:<br>   - Purpose: The automation task involves deploying the CIS benchmark on Red Hat systems to implement the recommended security configurations. It also supports dynamic updates of the benchmark rules without requiring internet connectivity.<br>   - Details: The automation playbook deploys the CIS benchmark on Red Hat systems, configuring security settings based on the benchmark's recommendations. It fetches the latest CIS rule updates from a Red Hat repository ensuring up-to-date security configurations without relying on internet connectivity.<br><br>2. Periodic Scanning and Reporting:<br>   - Purpose: This stage focuses on periodically scanning the environment and generating reports that highlight missing CIS rules.<br>   - Details: The automation playbook performs periodic scans on the Red Hat systems to assess compliance with the CIS benchmark rules. It compares the current configuration against the expected benchmarks and generates detailed reports identifying missing rules or configurations. The reports can be customized to suit client requirements and security policies.<br><br>3. Dynamic Playbook Generation and Rule Application:<br>   - Purpose: This stage generates dynamic playbooks based on the missing CIS rules identified in the reports and applies those rules to the Red Hat systems.<br>   - Details: The automation playbook analyzes the reports to identify missing CIS rules and generates dynamic Ansible playbooks. These playbooks include tasks to apply the missing rules to the systems. The dynamic playbooks ensure flexibility and adaptability to changes in CIS benchmarks and allow clients to selectively apply approved rules, ignore rejected rules, and define specific exceptions or customizations.<br><br>Benefits:<br>1. Automated CIS Benchmark Deployment: The automation streamlines the process of deploying the CIS benchmark on Red Hat systems, ensuring consistent and standardized security configurations.<br>2. Dynamic Rule Updates: The automation supports the dynamic update of CIS benchmark rules, keeping security configurations up to date without internet connectivity.<br>3. Periodic Scanning and Reporting: The automation enables regular scanning of systems for compliance with CIS benchmarks, providing detailed reports that highlight missing rules and configurations.<br>4. Flexible Rule Application: The dynamic playbook generation allows clients to apply approved CIS rules, ignore rejected rules, and define exceptions or customizations as per their security policies.<br><br>Considerations:<br>1. Security and Access Control: Ensure appropriate access controls are in place to protect the automation playbooks, CIS benchmark rules, and reports, as they contain sensitive security information.<br>2. Validation and Testing: Thoroughly validate and test the automation workflow, including rule updates, scanning, reporting, and rule application, to ensure accuracy and reliability.<br>3. Compliance and Exceptions: Ensure compliance with relevant regulations and consider the need for exceptions or customizations based on specific organizational requirements.",
    },
    abstract:
      "The Red Hat System Hardening as per CIS Guidelines automation focuses on implementing OS hardening based on CIS Benchmarks. This automation ensures adherence to security best practices by deploying the CIS benchmark with the latest rules, even in environments without internet connectivity. It supports the application of specific Common Configuration Enumeration (CCE) rules and generates dynamic playbooks to apply missing rules on servers. The automation provides periodic reports highlighting missing CIS rules, allowing clients to apply approved rules, ignore rejected rules, and specify exceptions. This comprehensive solution streamlines and standardizes the OS hardening process, ensuring a secure platform through regular scanning, reporting, and rule application.",
  },
  {
    title: "Fully Automated and Customized Dynatrace Installation",
    authors:
      "Tools: Ansible, Azure, Dynatrace, RHEL",
    conferences:
      "Tags: Application Deployment, IaaC",
    researchYr: 2020,
    image: "assets/images/Automations/DT_Ansible_Azure.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Parameter Fetching:<br>   - Purpose: The automation fetches parameters required for Dynatrace installation from Azure Tags and Satellite Environments.<br>   - Details: The automation playbook retrieves necessary parameters, such as deployment options, environment configurations, security settings, and other relevant information, from Azure Tags and Satellite Environments. This ensures customization of the Dynatrace installation based on the specific requirements of the environment.<br><br>2. Dynatrace Installation:<br>   - Purpose: This stage focuses on deploying Dynatrace monitoring with zero human intervention.<br>   - Details: The automation playbook utilizes the retrieved parameters to automate the installation of Dynatrace. It creates a separate filesystem to isolate Dynatrace components and ensure efficient resource utilization. The playbook deploys Dynatrace OneAgent according to the specified configuration options.<br><br>3. Agent and Custom Module Deployment:<br>   - Purpose: This stage enhances the Dynatrace monitoring capabilities by deploying agent and custom client-approved modules and scripts.<br>   - Details: The automation playbook deploys agent modules to enable monitoring of specific applications and technologies within the environment. It also deploys custom client-approved modules and scripts to extend Dynatrace's monitoring capabilities and support application-specific monitoring requirements. These deployments are tailored to the specific needs of the environment and applications.<br><br>Benefits:<br>1. Zero Human Intervention: The automation eliminates the need for manual intervention, enabling a fully automated Dynatrace installation process.<br>2. Customization and Parameter Fetching: By fetching parameters from Azure Tags and Satellite Environments, the deployment ensures customization of Dynatrace installation to suit the specific requirements of the environment.<br>3. Separate Filesystem for Dynatrace: The creation of a separate filesystem enhances resource management and isolation for Dynatrace components.<br>4. Enhanced Monitoring Capabilities: The deployment includes the deployment of agent modules and custom client-approved modules and scripts, enhancing Dynatrace's monitoring capabilities to support specific applications and monitoring requirements.<br><br>Considerations:<br>1. Security and Access Control: Ensure appropriate security measures and access controls are in place to protect the retrieved parameters, Dynatrace components, and any sensitive information during the deployment.<br>2. Testing and Validation: Thoroughly test the automation workflow, including parameter fetching, installation, and module deployment, in a controlled environment to ensure accuracy, reliability, and compatibility with the target environment.<br>3. Documentation and Configuration Management: Maintain comprehensive documentation of the deployment process, including the retrieved parameters, installation configurations, and deployed modules. Implement configuration management practices to track changes and updates made to the Dynatrace deployment.",
    },
    abstract:
      "The Fully Automated and Customized Dynatrace Installation deployment provides a comprehensive solution for deploying Dynatrace monitoring with zero human intervention. This deployment leverages parameters fetched from Azure Tags and Satellite Environments to customize the installation process. It creates a separate filesystem for Dynatrace and incorporates agent and custom client-approved modules and scripts to enhance application monitoring capabilities. By automating the deployment, this solution streamlines the setup of Dynatrace monitoring, ensuring a customized and efficient monitoring environment.",
  },

  {
    title:
      "Dynamic and Fully Automated RHEL OS patching",
    authors: "Tools: Ansible, Satellite, ServiceNow, Insights",
    conferences:
      "Tags: Compliance Management, OS Patching, IaaC",
    researchYr: 2019,
    image: "assets/images/Automations/Patching_ansible_satellite_snow.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Content Views Promotion and Publication:<br>   - Purpose: The automation task involves promoting and publishing Content Views on Red Hat Satellite using Ansible Automation Platform.<br>   - Details: The automation playbook utilizes Ansible Automation Platform to promote and publish customized Content Views on Red Hat Satellite. It ensures the availability of up-to-date patches and configurations for deployment across the infrastructure.<br><br>2. Change Request Creation and Scheduling:<br>   - Purpose: This stage focuses on creating and scheduling change requests on ServiceNow to manage the patching process.<br>   - Details: The automation playbook interacts with ServiceNow's API to create change requests for OS patching. It populates the requests with relevant information, such as affected systems, patch details, scheduled downtime, and approvals. The change requests are then scheduled to align with maintenance windows or other defined timelines.<br><br>3. Patching Notification and Communication:<br>   - Purpose: This stage facilitates the notification and communication process throughout the patching cycle.<br>   - Details: The automation playbook generates patching notification emails and sends them to the necessary recipients, including stakeholders, system administrators, and application owners. The emails include information on the upcoming patching schedule, expected downtime, and any specific instructions or actions required from recipients.<br><br>4. Application Service Management:<br>   - Purpose: This stage manages application services during the patching process, ensuring minimal impact and downtime.<br>   - Details: The automation playbook includes logic to stop or failover application services to passive nodes or alternative systems before applying the patches. This ensures service availability and minimizes disruptions during the patching window.<br><br>5. Day 0 Errata Patching and Customization:<br>   - Purpose: This stage focuses on the prompt patching of day 0 erratas and supports custom patching requirements.<br>   - Details: The automation playbook monitors for day 0 erratas and applies the necessary patches promptly. It also provides customization options to address specific patching requirements or exceptions, allowing organizations to adapt the patching process to their unique environments.<br><br>Benefits:<br>1. Fully Automated Patching: The automation streamlines the RHEL OS patching process, reducing manual effort and ensuring consistent and timely patch deployments.<br>2. Integration with ServiceNow and Red Hat Satellite: The automation seamlessly integrates with ServiceNow and Red Hat Satellite, providing end-to-end visibility and management of the patching process.<br>3. Minimized Downtime: The segregated server groups and application service management capabilities minimize downtime and ensure high availability during the patching process.<br>4. Prompt Day 0 Errata Patching: The automation supports the prompt patching of day 0 erratas, reducing vulnerability and maintaining security across the platform.<br><br>Considerations:<br>1. Testing and Validation: Thoroughly test the automation workflow, including Content Views promotion, change request creation, application service management, and patching customization, to ensure accuracy, reliability, and compatibility with the infrastructure.<br>2. Security and Access Control: Implement appropriate security measures and access controls to protect sensitive information, such as change requests, patching notifications, and application service management.<br>3. Documentation and Reporting: Maintain comprehensive documentation of the automation process, including configurations, patching schedules, customization options, and reporting mechanisms for auditing and future reference.",
    },
    abstract:
      "The Dynamic and Fully Automated RHEL OS Patching automation provides a comprehensive solution for automating and customizing the patching process of RHEL operating systems. This automation seamlessly integrates with ServiceNow, Red Hat Satellite, and Ansible Automation Platform to facilitate efficient and timely patching. It promotes and publishes Content Views on Red Hat Satellite, creates and schedules change requests on ServiceNow, sends patching notification emails, stops or failovers application services to passive nodes, and supports patching day 0 erratas within a day across the platform. This automation minimizes downtime by implementing segregated server groups and provides a highly efficient and streamlined patching process.",
  },

  {
    title:
      "Autosys Autamated Installation",
    authors:
      "Tools: Ansible, Autosys, Satellite",
    conferences:
      "Tags: Application Deployment, IaaC, Automated Reporting",
    researchYr: 2021,
    image: "assets/images/Automations/Autosys_Ansible_Satellite.png",
    citation: {
      vancouver:
        "The automation utilizes the Satellite to fetch the latest installation setups and deploy it on the targeted hosts. It dynamically customizes the installation based on the host and environment. This also generates a dynamically customized report of installation to necessary recepients.",
    },
    abstract:
      "An Automation for Autosys Deployment ulitizing Satellite and Ansible.",
  },
  {
    title: "CyberArk PSMP Installation",
    authors: "Tools: Ansible, CyberArk, Satellite, Azure DevOps",
    conferences:
      "Tags: Application Deployment, IaaC",
    researchYr: 2022,
    image: "assets/images/Automations/CyberArk_Ansible_Azure_Satellite.png",
    citation: {
      vancouver:
        "The automation targets towards fully deploying of Server using Azure Pipeline and deploy the CyberArk PSMP application at the build time. The automation also configures PSMP application. The automation supports dynamic upgradation of application and redeploying of the whole PSMP infrastructure on the fly.",
    },
    abstract:
      "Dynamic installation of the CyberArk PSMP application along with infrastrure deployment.",
  },

  {
    title: "CyberArk PTA Installation",
    authors: "Tools: Ansible, CyberArk, Satellite, Azure DevOps",
    conferences:
      "Tags: Application Deployment, IaaC",
    researchYr: 2022,
    image: "assets/images/Automations/CyberArk_Ansible_Azure_Satellite.png",
    citation: {
      vancouver:
        "The automation targets towards fully deploying of Server using Azure Pipeline and deploy the CyberArk PTA application at the build time. The automation also configures PTA application. The automation supports dynamic upgradation of application and redeploying of the whole CyberArk PTA infrastructure on the fly.",
    },
    abstract:
      "Dynamic installation of the CyberArk PTA application along with infrastrure deployment.",
  },

  {
    title:
      "Weekly Patching and Compliance Report",
    authors: "Tools: Ansible, Satellite, HTML5",
    conferences:
      "Tags: Automated Reporting, Compliance Management",
    researchYr: 2021,
    image: "assets/images/Automations/Linux_Patching_report.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Missing Packages Count:<br>   - Purpose: The automation task involves generating a count of missing packages from each server, providing visibility into servers that have not undergone patching activities.<br>   - Details: The automation playbook retrieves information from Red Hat Satellite and compares the installed packages on each server against the latest available packages. It generates a count of missing packages for each server, highlighting the servers that require attention in terms of patching.<br><br>2. Non-reporting Servers:<br>   - Purpose: This stage identifies servers that are not reporting to Red Hat Satellite, allowing the operations team to address any potential connectivity or configuration issues.<br>   - Details: The automation playbook queries the Red Hat Satellite using Ansible Module to identify servers that have not reported their status or received updates. It provides a list of non-reporting servers, enabling the operations team to investigate and resolve the reporting issues.<br><br>3. Missing Erratas:<br>   - Purpose: This stage identifies the erratas that are missing from each server, ensuring compliance with the latest patches and security updates.<br>   - Details: The automation playbook compares the available erratas from Red Hat Satellite against the installed erratas on each server. It identifies the missing erratas and generates a comprehensive list, allowing the operations team to take necessary actions to address the gaps in compliance.<br><br>4. Report Publication:<br>   - Purpose: This stage publishes the generated reports as secure webpages, providing the operations team with convenient access to review the patching and compliance information.<br>   - Details: The automation playbook converts the generated reports into HTML format and securely publishes them as webpages. Access controls and authentication mechanisms can be implemented to ensure that only authorized team members can view the reports.<br><br>Benefits:<br>1. Visibility into Patching Status: The automation provides visibility into the patching status of servers by reporting the count of missing packages, helping the operations team prioritize and address patching activities.<br>2. Identification of Non-reporting Servers: The automation identifies servers that are not reporting to Red Hat Satellite, allowing the operations team to address potential connectivity or configuration issues promptly.<br>3. Compliance with Erratas: The automation ensures compliance with the latest patches and security updates by identifying the missing erratas from each server.<br>4. Convenient and Secure Reporting: The reports generated by the automation are published as secure webpages, enabling the operations team to securely access and review the patching and compliance information.<br><br>Considerations:<br>1. Security and Access Control: Implement appropriate security measures and access controls to protect the generated reports, ensuring that only authorized team members can view the information.<br>2. Regular Reporting Schedule: Set up a regular schedule for the automation to generate and publish the weekly reports, ensuring consistent and timely reporting for the operations team.<br>3. Report Customization: Customize the reports to include additional relevant information, such as server details, severity levels, or specific compliance metrics, to meet the specific requirements of the operations team.",
    },
    abstract:
      "The Weekly Patching and Compliance Report automation provides a comprehensive solution for generating weekly reports that highlight missing packages, non-reporting servers, and erratas from Red Hat Satellite. This automation offers visibility to the operations team regarding servers that have not undergone patching activities. It also provides details on servers that are not reporting to Satellite and identifies the erratas that are missing from each server. The generated reports are published as secure webpages, allowing the team to conveniently access and review the information.",
  },
  {
    title:
      "Monthly Capacity Report for Solaris Environment",
    authors:
      "Tools: Ansible, Solaris, HTML5",
    conferences:
      "Tags: Automated Reporting, Capacity Management",
    researchYr: 2021,
    image: "assets/images/Automations/Solaris_capacity_report.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Capacity Data Collection:<br>   - Purpose: The automation task involves collecting capacity data from the Solaris environment, including information about the Physical Domains, Global Zones, and Local Zones.<br>   - Details: The automation playbook interacts with Solaris systems using Ansible Automation Platform to gather capacity-related data. It collects information such as CPU usage, memory utilization, disk usage, and other relevant metrics from the Physical Domains, Global Zones, and Local Zones.<br><br>2. Capacity Distribution Analysis:<br>   - Purpose: This stage focuses on analyzing the capacity distribution across the Solaris environment, providing insights into the utilization levels of the different domains and zones.<br>   - Details: The automation playbook processes the collected capacity data to determine the utilization levels of the Physical Domains, Global Zones, and Local Zones. It calculates the distribution of resources and provides an overview of capacity utilization, highlighting areas of concern or potential optimization opportunities.<br><br>3. Monthly Utilization Overview:<br>   - Purpose: This stage generates a monthly utilization overview based on the capacity data collected, providing a comprehensive snapshot of capacity utilization in the Solaris environment.<br>   - Details: The automation playbook generates a summary report and webpage that presents the capacity utilization metrics in an organized and visually appealing manner.<br><br>4. Publication of Monthly Report:<br>   - Purpose: This stage involves publishing the generated monthly utilization overview as a webpage, making it accessible to stakeholders for review and analysis.<br>   - Details: The automation playbook converts the monthly utilization overview into a webpage format, which can be securely published on an internal server or shared with authorized stakeholders. Access controls and authentication mechanisms has been implemented to ensure that only authorized individuals can view the report.<br><br>Benefits:<br>1. Simplified Capacity Management: The automation streamlines the capacity management process in Solaris environments, providing insights into capacity distribution and utilization levels.<br>2. Informed Decision-Making: The monthly utilization overview report enables stakeholders to make informed decisions regarding capacity optimization, resource allocation, and infrastructure planning.<br>3. Timely Reporting: The automation generates monthly reports, providing up-to-date information on capacity utilization and enabling proactive monitoring and action.<br>4. Convenient Visualization: The utilization overview report presents capacity data in a visually appealing manner, using graphs, charts, and tables to facilitate easy understanding and analysis.<br><br>Considerations:<br>1. Data Collection and Security: Implement appropriate security measures and access controls to protect the collected capacity data and ensure compliance with data protection regulations.<br>2. Report Customization: Customize the monthly utilization overview report to include specific metrics, visualizations, or details that are relevant to the stakeholders and align with their capacity management requirements.<br>3. Regular Reporting Schedule: Establish a regular schedule for the automation to generate and publish the monthly utilization reports, ensuring consistency and timeliness in reporting.",
    },
    abstract:
      "The Monthly Capacity Report for Solaris Environment using Ansible Automation Platform provides a solution to simplify capacity management in Solaris environments. This automation offers insights into the capacity distribution, from the Physical Domain to its assigned Global Zones and the underlying Local Zones. It generates a monthly utilization overview and publishes it as a webpage, providing a convenient way to monitor and analyze capacity utilization. By automating the capacity reporting process, this solution streamlines capacity management and facilitates informed decision-making.",
  },
  {
    title:
      "Daily Solaris Hardware Status report",
    authors:
      "Tools: Ansible, Solaris, HTML5",
    conferences:
      "Tags: Automated Reporting, Monitoring",
    researchYr: 2021,
    image: "assets/images/Automations/Solaris_capacity_report.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Component Status Retrieval:<br>   - Purpose: The automation task involves fetching the status of each component in a physical Solaris server using ipmitool tool.<br>   - Details: The automation playbook interacts with the server's hardware using ipmitool to retrieve the status of components such as CPUs, memory modules, disks, fans, power supplies, and other relevant hardware components. It collects information about the health, temperature, voltage, and other metrics associated with each component.<br><br>2. Daily Hardware Status Report Generation:<br>   - Purpose: This stage focuses on generating a daily report that highlights the status of all components in the Solaris server.<br>   - Details: The automation playbook processes the retrieved component status data and generates a comprehensive daily report. The report includes details of each component's status, such as whether it is functioning properly or has encountered any issues or failures. It also provides metrics and additional information relevant to the hardware status.<br><br>3. Separation and Notification of Failed Components:<br>   - Purpose: This stage separates the failed components from the overall hardware status report and sends notifications to the respective teams for corrective actions.<br>   - Details: The automation playbook analyzes the hardware status report and identifies any failed components. It separates the failed components and sends notifications, such as email alerts, to the respective teams responsible for hardware maintenance or troubleshooting. This enables timely corrective actions and issue resolution.<br><br>4. Publication of Daily Report:<br>   - Purpose: This stage involves publishing the daily hardware status report as a webpage for convenient viewing by the respective teams.<br>   - Details: The automation playbook converts the generated daily report into a webpage format. It can be securely published on an internal server or shared with authorized individuals or teams. Access controls and authentication mechanisms can be implemented to ensure that only authorized personnel can view the report.<br><br>Benefits:<br>1. Enhanced Visibility into Hardware Status: The automation provides daily insights into the status of components in Solaris servers, allowing teams to proactively address potential hardware issues.<br>2. Timely Notifications for Corrective Actions: By separating and notifying the teams about failed components, the automation enables swift corrective actions, minimizing downtime and maintaining server reliability.<br>3. Convenient Reporting and Viewing: The daily hardware status report is generated and published as a webpage, providing an easily accessible and convenient format for teams to review the status and take necessary actions.<br>4. Potential Real-time Monitoring with Ansible Rulebook: Future updates may include an Ansible rulebook for real-time monitoring of hardware failure status, enabling immediate notifications and automated response actions.<br><br>Considerations:<br>1. Security and Access Control: Implement appropriate security measures and access controls to protect the retrieved hardware status data and the published reports, ensuring compliance with data protection regulations.<br>2. Regular Reporting Schedule: Set up a regular schedule for the automation to generate and publish the daily hardware status reports, ensuring consistent and timely reporting for the respective teams.<br>3. Continuous Improvement: Consider incorporating additional features and updates, such as real-time monitoring and automated response actions, to further enhance hardware status reporting and maintenance processes.",
    },
    abstract:
      "The Daily Solaris Hardware Status report automation provides a solution for fetching and reporting the status of each component in a physical Solaris server using ipmitool. This automation generates a daily report highlighting the status of all components and separates any failed components for corrective actions. The report is sent via email to the respective teams, and it is also published as a webpage for convenient viewing. Future updates may include an Ansible rulebook for real-time failure status monitoring. This automation enhances visibility into the hardware status of SunOS servers, enabling teams to take proactive corrective actions.",
  },
  {
    title:
      "Server Handover Report for Linux Environment",
    authors:
      "Tools: Ansible, CIS, ServiceNow, Azure, HTML5",
    conferences:
      "Tags: Automated Reporting, IaaC, Compliance Management, Standardization",
    researchYr: 2021,
    image: "assets/images/Automations/Handover_report.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Environment Expectation Validation:<br>   The automation playbook verifies various aspects, such as Azure tags, fields in ServiceNow, CIS OS hardening status, and client-defined security and performance expectations. It ensures that the deployment aligns with the expected standards and identifies any deviations or missing activities.<br><br>2. Server Status Webpage Generation:<br>   The automation playbook generates a comprehensive report, including information about the server's configuration, compliance status, security settings, performance metrics, and any deviations from the expected standards. The report is formatted as a webpage for easy viewing and analysis.<br><br>3. Deployment of Server Handover Report:<br>   The automation playbook ensures the secure deployment of the generated server handover report webpage, making it accessible to the relevant stakeholders. Access controls and authentication mechanisms can be implemented to ensure that only authorized individuals or teams can access the report.<br><br>Benefits:<br>1. Delta Identification: The automation highlights the delta between the customer's standard expectations and the actual deployment, enabling stakeholders to identify any deviations or missing activities.<br>2. Standardization and Consistency: By identifying flows and missing activities, the automation helps ensure that deployments adhere to standardized practices throughout the platform, promoting consistency and reliability.<br>3. Efficient Handover Process: The server handover report facilitates a smooth transition to the production environment by providing comprehensive status information and enabling stakeholders to address any identified gaps or discrepancies.<br>4. Compliance Validation: The automation validates the CIS OS hardening status and other security-related aspects, ensuring that the deployment meets the expected security and compliance requirements.<br><br>Considerations:<br>1. Data Security: Implement appropriate security measures and access controls to protect sensitive information within the server handover report and ensure compliance with data protection regulations.<br>2. Collaboration and Communication: Ensure effective communication and collaboration between relevant stakeholders to address identified gaps and discrepancies and ensure a successful handover process.<br>3. Continuous Improvement: Regularly update and refine the automation workflow to accommodate changing standards, expectations, and deployment requirements.",
    },
    abstract:
      "The Server Handover Report for Linux Environment automation provides a solution for generating a comprehensive report that highlights the delta between a customer's standard expectations for the environment and the actual deployment. This automation generates and deploys a webpage containing server status information once the application deployment is ready to transition to the production environment. The automation assists in identifying any deviations or missing activities to ensure that deployments adhere to standardized and consistent practices throughout the platform. It validates tags in Azure, fields in ServiceNow, CIS OS hardening status, and the client's security and performance expectations regarding the platform. This automation facilitates a smooth and efficient handover process, enabling stakeholders to address any gaps or discrepancies before transitioning to production.",
  },
  {
    title:
      "Automated access provisioning for Linux Environment",
    authors:
      "Tools: Ansible, RedHat IDM, Azure",
    conferences:
      "Tags: Access Provisioning, IaaC, Standardization",
    researchYr: 2021,
    image: "assets/images/Automations/IDM_Ansible_Azure.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Platform Tagging and Criteria Evaluation:<br>The automation playbook examines the tags associated with the server to identify the deployment platform (Azure or Satellite). Based on the criteria set for access configuration, the automation determines whether to create a new set of rules or add the server to existing ones.<br><br>2. User Group and Host Group Creation:<br>The automation playbook dynamically generates user groups and host groups based on deployment criteria. These groups are structured to align with the access requirements of the application team and provide a standardized way to manage access permissions.<br><br>3. Host-Based Access Policies and Sudo Policy Rules Configuration:<br>The automation playbook generates host-based access policies that define the access permissions of user groups to specific host groups. It also creates sudo policy rules to control elevated privileges for the application team. These configurations are tailored to the needs of each server and application, ensuring secure and appropriate access.<br><br>4. Access Provisioning and Streamlining Deployment:<br>The automation playbook automatically applies the configured access policies and rules to each deployed server. This eliminates the need for manual access provisioning and ensures that the correct access permissions are granted to the application team without delays.<br><br>Benefits:<br>1. Standardized Access Configuration: The automation establishes a standardized approach to access configuration, ensuring consistency and security across the deployment.<br>2. Reduced Manual Intervention: By automating access provisioning, the automation reduces the need for manual configuration, saving time and minimizing human error.<br>3. Streamlined Deployment Process: Access provisioning during server deployment is streamlined, accelerating the onboarding process for the application team.<br>4. Improved Security: The access structure configuration ensures that access permissions are tailored to each server and aligned with the application team's needs, enhancing security.<br><br>Considerations:<br>1. Tagging and Criteria Definition: Define clear tagging conventions and criteria for access configuration based on the deployment platform and specific needs of the application team.<br>2. Testing and Validation: Thoroughly test the automation workflow, including user group, host group, access policy, and sudo policy rule creation, to ensure accuracy and reliability.<br>3. Access Auditing and Monitoring: Implement access auditing and monitoring mechanisms to regularly review and verify access permissions, ensuring compliance with security policies.",
    },
    abstract:
      "The Access Structure Configuration automation provides a standardized and automated approach for configuring access permissions during server deployment. The automation utilizes Azure tags or Satellite tags, depending on the deployment platform, to create user groups, host groups, host-based access policies, and sudo policy rules for the application team. The automation dynamically determines whether to create a new set of rules or add the host to existing ones based on deployment criteria. By automating access provisioning, this solution ensures consistency, security, and efficiency in managing access permissions, streamlining the deployment process, and reducing manual intervention.",
  },
  {
    title:
      "Precheck and Postchecks for any activity on Linux Environment",
    authors:
      "Tools: Ansible",
    conferences:
      "Tags: Operations",
    researchYr: 2021,
    image: "assets/images/Automations/Prechecks_Automation.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. Precheck Configuration Collection:<br>   The automation playbook retrieves various configuration details, such as network configurations (route details, VLAN details, IP, MAC IDs), OS configurations from /etc directory, cluster configurations, hardware details, and more. It collects this information from the target Linux machines and stores it in a central location for future reference and comparison.<br><br>2. Precheck Status Report Generation:<br>   The automation playbook analyzes the collected configuration details and generates a comprehensive status report. The report includes information about the network configurations, OS configurations, cluster configurations, hardware details, and any other relevant configurations. It provides an overview of the server's configuration and serves as a baseline for comparison during postchecks.<br><br>3. Activity Execution and Postcheck Configuration Collection:<br>   The automation playbook performs the scheduled activity, such as application deployment, system update, or configuration change. Once the activity is completed, it collects the post-activity configuration details from the target Linux machines, capturing any changes made during the activity.<br><br>4. Postcheck Validation and Status Report Generation:<br>   The automation playbook compares the post-activity configuration details with the precheck configuration and validates whether the server's configuration remains consistent or if any deviations have occurred. It generates a status report highlighting any discrepancies or changes made during the activity.<br><br>Benefits:<br>1. Enhanced Efficiency and Accuracy: The automation streamlines the precheck and postcheck processes, reducing manual effort and minimizing the risk of human error.<br>2. Configuration Integrity Validation: By collecting and comparing the precheck and postcheck configurations, the automation ensures the integrity and consistency of the server's configurations during scheduled activities.<br>3. Time-saving Approach: The automation saves time for the operations team by providing an efficient and automated method to perform precheck and postcheck activities.<br>4. Baseline for Comparison: The precheck and postcheck status reports serve as baselines for future activities, enabling easy comparison and identification of configuration changes.<br><br>Considerations:<br>1. Configuration Storage and Access Control: Implement appropriate security measures and access controls to protect the collected configuration details and ensure compliance with data protection regulations.<br>2. Validation and Error Handling: Thoroughly validate and test the automation workflow, including configuration collection, comparison, and report generation, to ensure accuracy and reliability. Handle any errors or exceptions effectively during the process.<br>3. Documentation and Reporting: Maintain comprehensive documentation of the automation process, including configuration collection methods, report formats, and any customizations or specific considerations for the Linux environment.",
    },
    abstract:
      "The Precheck and Postchecks automation for any activity on a Linux Environment provides a solution for generating status reports of the configurations of Linux machines before and after performing scheduled activities. This automation collects and stores the configuration details, including network configurations, OS configurations, cluster configurations, hardware details, and more, into a central location. It also facilitates the validation of these configurations post-activity, ensuring the integrity of the server and providing a time-saving approach for the operations team. By automating precheck and postcheck processes, this solution enhances efficiency, reduces human error, and simplifies the validation of server configurations.",
  },
  {
    title:
      "Decommission Automation for Linux Environment",
    authors:
      "Tools: Ansible, Satellite, RedHat IDM, Azure",
    conferences:
      "Tags: IaaC, Standardization",
    researchYr: 2021,
    image: "assets/images/Automations/Decommission_Automation.png",
    citation: {
      vancouver:
        "Automation Workflow:<br>1. ServiceNow Request Processing:<br>The Event Driven Automation rulebook monitors the ServiceNow queue for decommissioning requests. Once a request is detected, it captures relevant information, such as the server name, location, and reason for decommissioning, to initiate the process.<br><br>2. Operation Engineer Approval:<br>The automation playbook notifies the designated Operation Engineer about the decommissioning request and waits for their approval. This step ensures that the decommissioning process is controlled and authorized.<br><br>3. Infrastructure Tools Decommissioning:<br>Upon receiving approval from the Operation Engineer, the automation playbook initiates the decommissioning process for the server. It interacts with the relevant infrastructure tools to remove the server from their configurations, effectively decommissioning it.<br><br>4. Capacity Released Details Report Generation:<br>The automation playbook calculates and compiles details about the released capacity, including CPU, memory, storage, and any other relevant resources. It generates a report in the form of a webpage for easy access and reference.<br><br>5. Publication and Email Notification:<br>The automation playbook publishes the generated report as a webpage on an internal server on designated location accessible to authorized personnel. It also sends an email notification containing the report to the relevant stakeholders for reference and documentation purposes.<br><br>Benefits:<br>1. Efficient Server Decommissioning: The automation streamlines the server decommissioning process, ensuring prompt and controlled removal from infrastructure tools.<br>2. Controlled Authorization: The automation requires approval from the designated Operation Engineer, ensuring that the decommissioning process is authorized and supervised.<br>3. Effective Capacity Release: The automation generates a capacity released details report, providing transparent documentation of the resources reclaimed from decommissioned servers.<br>4. Enhanced Resource Management: By automating decommissioning, the automation supports effective resource management, optimizing server utilization.<br><br>Considerations:<br>1. Authorization and Access Control: Implement appropriate access controls to ensure that only authorized personnel can trigger and approve server decommissioning requests.<br>2. Error Handling and Reporting: Include robust error handling mechanisms to address any issues that may arise during the decommissioning process and ensure comprehensive reporting for troubleshooting and improvement.",
    },
    abstract:
      "The Server Decommissioning Automation streamlines the process of decommissioning a server from infrastructure tools such as Satellite, RedHat IDM, and Azure upon receiving a ServiceNow request in the Operational Team's queue. The automation is triggered when the ServiceNow request reaches the queue, and it awaits approval from the Operation Engineer before proceeding with decommissioning. Additionally, the automation generates a capacity released details report as a webpage, which is published and sent via email for reference. By automating the decommissioning process, this solution ensures efficient and controlled server removal, releases capacity effectively, and provides transparent documentation for reference.",
  },
  {
    title:
      "Disaster recovery Activities Automations",
    authors:
      "Tools: Ansible",
    conferences:
      "Tags: Operations, Disaster Recovery",
    researchYr: 2021,
    image: "assets/images/experience-page/Red-Hat-AAP.ico",
    citation: {
      vancouver:
        "The automation targets towards the system configurations that are required to change before migrations to disaster recovery. These changes help save time in the disaster recovery drills as well as the actual scenarios.",
    },
    abstract:
      "This automation assists with the disaster recovery activity to save time and help get the production up and running in less time.",
  },
  {
    title: "LVM Configuaration for the Linux Servers",
    authors:
      "Tools: Ansible, Linux",
    conferences:
      "Tags: Ansible, LVM",
    researchYr: 2023,
    image: "assets/images/experience-page/Red-Hat-AAP.ico",
    citation: {
      vancouver:
        "LVM configuration for any Linux servers is vital for its optimal performace. This automation creates a standardized way to manage the LVM.",
    },
    abstract:
      "Creates and Manages LVM configuration for newly deployed servers",
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
      citation,
      abstract,
    },
    index
    ) =>
      {
        const elementNumber = index + 1; // Calculate the element number
        const absbox = `absPopup${elementNumber}`; // Generate the absbox value
        const citebox = `popup${elementNumber}`; // Generate the citebox value
        
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
      });
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
