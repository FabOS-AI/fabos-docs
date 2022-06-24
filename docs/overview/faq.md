---
permalink: /docs/overview/faq/
---

# FAQ

<style>
details {
    display: flex;
    
    border-radius: 5px;
    overflow: hidden;
    background: rgba(0, 0, 0, .05);
    border-left: 10px solid rgb(0, 160, 227);
    padding:10px;
    
}
summary {
  font-weight: bold;
}
</style>

<details>
  <summary>What is FabOS?</summary>

  The project FabOS aims to develop an open, distributed, real-time capable and secure operating system for production. The operating system should not be understood in the sense of a PC operating systems or comparable dedicated operating systems, but as a system of orchestrated components and services for the operation of a networked factory consisting of cyber-physical production systems, which together form the factory as a cyber-physical production system.
  <ul>
    <li>FabOS is a platform for end-to-end virtualization that represents a representation of all operating resources and infrastructure in the factory through virtual representations (cf. Digital Twin).</li>
    <li>FabOS enables unified management of the ecosystem through unified resource descriptions.</li>
    <li>FabOS is an enabler for AI-supported applications by merging operational technologies (OT) and information technology (IT), supported by AI.</li>
  </ul>

  Virtualization should be understood in two ways:
  <ol>
   <li>virtual representations of all necessary assets (objects that have value for the company) are to be represented by means of administration shells, in order to facilitate a unified description.</li>
   <li>FabOS uses the virtualization of functions and assemblies of OT components following IT examples in order to improve the flexibility and changeability of the system.</li>
  </ol>

  As an open, distributed, real-time capable and secure operating system for production in an industry 4.0 Smart Factory, FabOS should form the basis for a powerful ecosystem for AI applications.

  The focus is on a modular approach with well-defined interfaces, analogous to a microkernel architecture. For example, the modular approach enables various "South-Bound" interfaces, e.g. to sensors or H/W components. The modular approach makes FabOS a domain-specific enabler for artificial intelligence (AI) and machine learning (ML) for the Smart Factory. FabOS builds on well-founded preliminary work of the project partners and uses it as a catalyst to directly address the requirements for the efficient development, provision and use of AI applications in production.

  FabOS is based on the results and preliminary work of the project partners, especially the projects BaSys 4.0 (Changeable Production, Integration of the Administration Shell), IC4F (Industrial Communication for Factories) and Virtual Fort Knox (Cloud Platform with Edge Capability).

</details>
<br/>
<details>
  <summary>What does open, distributed, real-time capable and secure mean in the FabOS context?</summary>

  <b>Open</b></br>
  FabOS is based on an open architecture with open interfaces. Components integrated in FabOS should be open source, but can also be represented with proprietary technology. But at least they have to be exchangeable by their compatible open interfaces.

  <b>Distributed</b></br>
  Modern and future IT architectures, systems and infrastructure consist of modular components that are often distributed logically and spatially. FabOS primarily targets this open and flexible architecture, but also offers solutions to integrate existing systems and resources.

  <b>Real-time Capable</b></br>
  FabOS integrates technologies that both improve the real time applicability of existing applications and enable and guarantee the hard real time capability and determinism of real time systems in a modern and flexible infrastructure.

  <b>Secure</b></br>
  FabOS provides appropriate safety mechanisms and precautions at all levels, which always correspond to the state of the art due to the modular character of FabOS and thus keep the statistical safety and the operational safety of the applications at the technically highest possible level.

</details>
<br/>
<details>
  <summary>Which interfaces does FabOS support?</summary>

   FabOS supports the common industrial communication standards. Due to the openness of the system and the modular concept, the possibility of integrating additional or new interface standards is guaranteed.

</details>
<br/>
<details>
  <summary>What is the added value of FabOS to existing solutions?</summary>

  For the first time, FabOS offers an integrated view of OT and IT, i.e. the resources and the IT infrastructure as an overall system, in order to meet the additional requirements of data-driven technologies such as ML or AI-supported applications. In addition, FabOS is not a closed system from a single supplier, but an open system that offers simple expandability.

</details>
<br/>
<details>
  <summary>Is FabOS a central system or does FabOS run on every single component?</summary>

  FabOS is logically a central system, which consists of distributed components. Resources and infrastructure components can be easily integrated via open interfaces and integrated into FabOS.

</details>
<br/>
<details>
  <summary>What does the architecture of FabOS look like?</summary>

  FabOS relies on a net-like architecture of components based on the industry 4.0 model. However, individual components can also be organized hierarchically or horizontally within this network.

</details>
<br/>
<details>
  <summary>What does FabOS have to do with artificial intelligence?</summary>

  FabOS is an enabler for AI-based applications using AI. Currently there is a strong discrepancy in the area of the production environment with regard to the topic of data governance.
  Reliable AI applications depend on data of sufficient quality and quantity, which is not possible without sufficient data governance without considerable additional effort.
  In addition, different applications in production, which are to be used for specific application cases, also have different requirements on the architecture of the application and thus requirements on infrastructure and deployment: Where, for example, must a service be provided in order to be able to reliably perform its task deterministically or at least close to real time with the lowest possible latency or sufficient bandwidth? How much "edge portion" and how much "cloud portion" does an application need to work efficiently? Can an application be used at all in its intended form and how must the infrastructure be configured to do so?

</details>
<br/>
<details>
  <summary>What AI applications does FabOS offer?</summary>

  FabOS offers so-called FabOS basic services, which fulfill the most important recurring functions that AI applications use. Specialist AI services for specific applications are not a core component of FabOS, as FabOS aims to enable and accelerate the development and deployment of these applications so that the effort can be used for productive activities around AI-based applications.

</details>
<br/>
<details>
  <summary>What does FabOS do for AI Enablement??</summary>

  FabOS wants to enable greatly improved data governance through the consistent use of the management shell, i.e. ensuring data quality, data availability, data usability, data integrity and data security. 

  So-called AI patterns or blueprints should map the requirements of certain data-driven technologies and link these with the technical requirements of the application cases. 

  The encapsulation of complexity should improve usability by enabling different contextual and subject-specific views of the system.

  The aim is to simplify the combination of process and domain knowledge from production with the analytical skills of data science experts. In addition, the conversion of both OT and IT is supported by basic services provided.

</details>
<br/>
<details>
  <summary>Does FabOS offer a Digital Twin?</summary>

  FabOS is based on the information model of the industry 4.0 administration shell. This represents a virtual representation of an asset, which can be regarded as a digital twin depending on the application and level of detail.

</details>
<br/>
<details>
  <summary>Should FabOS replace an MES and other production IT systems?</summary>

  In principle, FabOS does not directly take over the task of production control. However, some FabOS components can perform functions similar to those found in the functional components of an MES. If FabOS is supplemented by further services that correspond functionally to further components of an MES, FabOS could also fulfil the task of an MES. However, this is not part of the project. The focus is on the connection of existing MES and further production IT systems.

</details>
<br/>
<details>
  <summary>Who implements FabOS?</summary>

  The project partners implement the core components of FabOS during the project period.

</details>
<br/>
<details>
  <summary>What are the applications?</summary>

  In the project phase FabOS has a focus on applications around "cognitive machine tools", "cognitive robots" and "cognitive production controls" and FabOS KI basic services. Basically FabOS has the goal to be an enabler for AI-based applications for any kind of application in production.

</details>
<br/>
<details>
  <summary>What requirements must my factory fulfill for the use of FabOS?</summary>

  In order to be able to use FabOS sensibly, it is necessary to network the machines and sensors. FabOS as a project itself does not have as its goal the creation of a further digitization possibility. However, the integration of the preliminary work, e.g. of BaSys 4.0, also allows so-called legacy devices to be integrated into the Smart Factory via ballasts and gateways.

</details>
<br/>
<details>
  <summary>How does FabOS differ from cloud providers?</summary>
  
  FabOS not only supports cloud-based services, but also explicitly focuses on machine-oriented pre-processing, i.e. edge computing. Because data can be processed directly on-premise, data sovereignty is always clearly secured. In addition, AI patterns are made available that enable the rapid deployment of AI applications.

</details>
<br/>
<details>
  <summary>FabOS does not treat the following contents or touches them only superficially:</summary>
  <ul>
   <li>Digitalization of old devices → Use of concepts from BaSys 4.0</li>
   <li>Provision of an AI toolbox → Simple integration of existing solutions</li>
   <li>Firmware for devices</li>
  </ul>

</details>
