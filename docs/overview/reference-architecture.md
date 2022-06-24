---
permalink: /docs/overview/reference-architecture
---

# Reference Architecture

The FabOS reference architecture consists of four functional layers:
![FabOS Reference Architecture](/img/figures/fabos-reference-architecture.png)

## Infrastructure
The infrastructure layer comprises the distributed infrastructure in an enterprise, everything from cloud to deep edge, which is managed or used via FabOS. These parts of the in-frastructure are managed as hardware nodes by FabOS and can be, e.g., sensors, machines, devices, network devices, servers, etc. Hardware nodes refer to pure hardware and a software stack coupled to it for using this hardware. This software stack may provide a pure interface to connect the hardware node or a runtime environment in order to execute additional software. An interface can be, for example, an OPC UA server or a RESTful HTTP API. A runtime environment can be, for example, an operating system, a VM hypervisor, or a container runtime environment. Hardware nodes provide OT and/or ICT capabilities that are managed and used by the platform service layer.

## Platform Services
The platform service layer focuses on the basic operation, control, and management of FabOS services and compo-nents along their life cycle.

## Base Services
The base service layer provides common functionality that can be used by and supports multiple application services.

## Application Services
The application service layer comprises the end user ser-vices, which are used to drive or support specific use cases and provide thematic functionality for production.