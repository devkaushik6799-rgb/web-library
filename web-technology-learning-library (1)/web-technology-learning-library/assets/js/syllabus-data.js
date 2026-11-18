/* ==========================================================================
   Syllabus Data Registry
   Authoritative metadata for all 5 units and 63 unique syllabus topics.
   ========================================================================== */

window.SYLLABUS_DATA = {
  units: [
    {
      id: 1,
      title: "Unit 1 – Internet Fundamentals and Web Architecture",
      shortTitle: "Internet Fundamentals & Web Architecture",
      duration: "7 Hours",
      page: "unit-1.html",
      description: "Evolution of the Internet, World Wide Web, HTML foundations, core application protocols (HTTP, SMTP, POP3, MIME, IMAP), DNS resolution, web browsers, and web servers."
    },
    {
      id: 2,
      title: "Unit 2 – HTML, CSS, JavaScript and XML",
      shortTitle: "HTML, CSS, JavaScript & XML",
      duration: "8 Hours",
      page: "unit-2.html",
      description: "Core HTML elements (lists, tables, images, forms, frames), CSS styling and layouts, Dynamic HTML with JavaScript, XML syntax, DTD, XML Schema, XSLT, and DOM/SAX parsers."
    },
    {
      id: 3,
      title: "Unit 3 – Web Services and Distributed Web Technologies",
      shortTitle: "Web Services & Distributed Tech",
      duration: "7 Hours",
      page: "unit-3.html",
      description: "Service-Oriented Architecture, UDDI, SOAP, WSDL, Web Service deployment, asynchronous programming with AJAX (XHR & Fetch), and CORBA distributed objects."
    },
    {
      id: 4,
      title: "Unit 4 – Web 2.0, Web 3.0 and Modern Web Technologies",
      shortTitle: "Web 2.0, Web 3.0 & Modern Web",
      duration: "7 Hours",
      page: "unit-4.html",
      description: "Interactive social web, blogs, wikis, RSS, Ruby on Rails, Open APIs, Semantic Web & RDF, search engines, recommender systems, blockchain benefits, edge computing, and dark mode."
    },
    {
      id: 5,
      title: "Unit 5 – Web 4.0 and Emerging Web Technologies",
      shortTitle: "Web 4.0 & Emerging Technologies",
      duration: "7 Hours",
      page: "unit-5.html",
      description: "AI-powered personalized web, Decentralized Web (DWeb), blockchain integration, IoT web dashboards, WebXR (AR/VR), Smart Web, adaptive interfaces, web automation, and 5G."
    }
  ],
  topics: [
    // UNIT 1 (11 topics)
    { id: "u1-history", unit: 1, title: "History of the Internet", desc: "ARPANET, TCP/IP standardization, NSFNET, and the global expansion of the Internet." },
    { id: "u1-www", unit: 1, title: "World Wide Web (WWW)", desc: "Tim Berners-Lee's hypertext information system, URLs, HTTP, and client-server web model." },
    { id: "u1-html", unit: 1, title: "HTML", desc: "HyperText Markup Language structure, elements, attributes, and semantic document markup." },
    { id: "u1-http", unit: 1, title: "Protocols – HTTP", desc: "Stateless request-response protocol, HTTP methods, status codes, headers, and HTTPS." },
    { id: "u1-smtp", unit: 1, title: "Protocols – SMTP", desc: "Simple Mail Transfer Protocol for outgoing email routing and server-to-server relay." },
    { id: "u1-pop3", unit: 1, title: "Protocols – POP3", desc: "Post Office Protocol v3 for downloading and managing email locally." },
    { id: "u1-mime", unit: 1, title: "MIME", desc: "Multipurpose Internet Mail Extensions for multimedia attachments and non-ASCII text." },
    { id: "u1-imap", unit: 1, title: "IMAP", desc: "Internet Message Access Protocol for synchronized multi-device email access and comparison with SMTP/POP3." },
    { id: "u1-dns", unit: 1, title: "Domain Name Server (DNS)", desc: "Hierarchical naming system and step-by-step domain-to-IP resolution process." },
    { id: "u1-browsers", unit: 1, title: "Web Browsers", desc: "Browser architecture, rendering engines, JavaScript engines, networking, and security." },
    { id: "u1-servers", unit: 1, title: "Web Servers", desc: "HTTP request processing, static vs dynamic serving, virtual hosts, Apache and Nginx." },

    // UNIT 2 (15 topics)
    { id: "u2-lists", unit: 2, title: "Lists", desc: "Ordered, unordered, and description lists in HTML with nesting and attributes." },
    { id: "u2-tables", unit: 2, title: "Tables", desc: "Structured tabular data using table, thead, tbody, tr, th, td, colspan, and rowspan." },
    { id: "u2-images", unit: 2, title: "Images", desc: "Embedding images with img, alt text, responsive picture elements, and image maps." },
    { id: "u2-forms", unit: 2, title: "Forms", desc: "Interactive user input with form, input types, labels, select, textarea, and validation." },
    { id: "u2-frames", unit: 2, title: "Frames", desc: "Legacy frameset concepts and modern secure iframe embedding with sandbox attributes." },
    { id: "u2-dhtml-js", unit: 2, title: "Dynamic HTML with JavaScript", desc: "Client-side interactivity using JavaScript event listeners, DOM updates, and validation." },
    { id: "u2-css", unit: 2, title: "CSS", desc: "Cascading Style Sheets, types, selectors, box model, Flexbox, and Grid layouts." },
    { id: "u2-dtd", unit: 2, title: "Document Type Definition (DTD)", desc: "XML fundamentals, syntax, and defining valid XML structure with internal/external DTD." },
    { id: "u2-dhtml", unit: 2, title: "Dynamic HTML", desc: "Synergy between HTML, CSS, JavaScript, and the DOM for interactive web pages." },
    { id: "u2-xml-schemas", unit: 2, title: "XML Schemes / XML Schemas", desc: "XSD data types, complex/simple types, namespaces, and comparison with DTD." },
    { id: "u2-object-models", unit: 2, title: "Object Models", desc: "In-memory object hierarchy representing HTML and XML documents as manipulable nodes." },
    { id: "u2-presenting-xml", unit: 2, title: "Presenting XML", desc: "Styling and transforming XML documents using CSS, XSLT, and XPath." },
    { id: "u2-xml-processors", unit: 2, title: "Using XML Processors", desc: "Validating and non-validating XML parsers, well-formedness, and processing workflows." },
    { id: "u2-dom", unit: 2, title: "DOM", desc: "Document Object Model tree-based API for reading and mutating XML/HTML structures." },
    { id: "u2-sax", unit: 2, title: "SAX", desc: "Simple API for XML event-driven streaming parser and comparison with DOM." },

    // UNIT 3 (9 topics)
    { id: "u3-intro", unit: 3, title: "Introduction to Web Services", desc: "Platform-independent, interoperable software services over standard web protocols." },
    { id: "u3-uddi", unit: 3, title: "UDDI", desc: "Universal Description, Discovery, and Integration registry for publishing and finding services." },
    { id: "u3-soap", unit: 3, title: "SOAP", desc: "XML-based messaging protocol with Envelope, Header, Body, and Fault elements." },
    { id: "u3-wsdl", unit: 3, title: "WSDL", desc: "Web Services Description Language XML contract defining operations, bindings, and endpoints." },
    { id: "u3-architecture", unit: 3, title: "Web Service Architecture", desc: "Service Provider, Service Requester, and Service Registry interaction model." },
    { id: "u3-developing", unit: 3, title: "Developing and Deploying Web Services", desc: "Contract-first vs code-first development, packaging, deployment, and testing." },
    { id: "u3-ajax-perf", unit: 3, title: "AJAX – Improving Web Page Performance Using AJAX", desc: "Asynchronous partial page updates reducing bandwidth and eliminating full reloads." },
    { id: "u3-ajax-prog", unit: 3, title: "Programming in AJAX", desc: "XMLHttpRequest states, Fetch API, async/await, and JSON data exchange." },
    { id: "u3-corba", unit: 3, title: "CORBA", desc: "Common Object Request Broker Architecture, ORB, IDL, stubs, skeletons, and IIOP." },

    // UNIT 4 (19 topics)
    { id: "u4-web2", unit: 4, title: "Web 2.0: Interactive and Social Web", desc: "Participatory web, user-generated content, and comparison of Web 1.0, 2.0, and 3.0." },
    { id: "u4-blogs", unit: 4, title: "Blogs", desc: "Weblogs, content management systems, permalinks, comments, and syndication." },
    { id: "u4-wikis", unit: 4, title: "Wikis", desc: "Collaborative knowledge bases with version control, wikitext, and peer editing." },
    { id: "u4-sns", unit: 4, title: "Social Networking Sites", desc: "Social graphs, news feeds, real-time messaging, and privacy architecture." },
    { id: "u4-tech-web2", unit: 4, title: "Technologies Behind Web 2.0", desc: "RIAs, RESTful JSON APIs, DOM scripting, and client-side interactivity." },
    { id: "u4-ajax", unit: 4, title: "AJAX", desc: "AJAX as the core enabler of responsive Web 2.0 applications." },
    { id: "u4-rss", unit: 4, title: "RSS", desc: "Really Simple Syndication XML feeds for automated content distribution." },
    { id: "u4-ror", unit: 4, title: "Ruby on Rails", desc: "MVC web framework built on Convention over Configuration and DRY principles." },
    { id: "u4-open-apis", unit: 4, title: "Open APIs", desc: "Publicly documented REST APIs, OAuth, rate limiting, and developer ecosystems." },
    { id: "u4-web3", unit: 4, title: "Web 3.0: Semantic Web", desc: "Machine-understandable data using ontologies, linked data, and SPARQL." },
    { id: "u4-widgets", unit: 4, title: "Widgets", desc: "Portable, embeddable UI components and micro-applications." },
    { id: "u4-mashups", unit: 4, title: "Mashups", desc: "Combining multiple Open APIs and data sources into unified web applications." },
    { id: "u4-rdf", unit: 4, title: "RDF", desc: "Resource Description Framework Subject-Predicate-Object triples and graphs." },
    { id: "u4-wbis", unit: 4, title: "Web-Based Information Systems", desc: "Multi-tier enterprise information systems delivered through web browsers." },
    { id: "u4-search-engines", unit: 4, title: "Search Engines", desc: "Web crawling, inverted indexing, ranking algorithms, and query serving." },
    { id: "u4-recommender", unit: 4, title: "Recommender Systems", desc: "Content-based filtering, collaborative filtering, and hybrid personalization." },
    { id: "u4-blockchain", unit: 4, title: "Benefits of Blockchain", desc: "Distributed ledgers, blocks, consensus, immutability, and decentralization benefits." },
    { id: "u4-edge", unit: 4, title: "Edge Computing", desc: "Low-latency computation near users compared with centralized cloud computing." },
    { id: "u4-dark-mode", unit: 4, title: "Dark Mode in Web Development", desc: "CSS custom properties, prefers-color-scheme media query, and accessible theming." },

    // UNIT 5 (9 topics)
    { id: "u5-web4", unit: 5, title: "Web 4.0: AI-Powered Web and Personalized Content", desc: "AI-driven personalization, intelligent assistants, and context-aware services." },
    { id: "u5-dweb", unit: 5, title: "Decentralized Web (DWeb) and Blockchain Integration", desc: "Peer-to-peer web protocols, IPFS content addressing, and decentralized identity." },
    { id: "u5-blockchain-int", unit: 5, title: "Blockchain Integration", desc: "Smart contracts, Web3 wallets, dApp frontends, and on-chain verification." },
    { id: "u5-iot", unit: 5, title: "Internet of Things (IoT) in Web Development", desc: "Sensors, MQTT/HTTP telemetry, WebSockets, and real-time web dashboards." },
    { id: "u5-ar-vr", unit: 5, title: "Augmented Reality (AR) and Virtual Reality (VR) in Web", desc: "WebXR Device API, WebGL immersive experiences, and AR vs VR comparison." },
    { id: "u5-smart-web", unit: 5, title: "Smart Web", desc: "Evolving convergence of semantic data, ambient IoT, and autonomous AI agents." },
    { id: "u5-adaptive", unit: 5, title: "Adaptive Interfaces", desc: "Responsive layouts, container queries, device awareness, and WCAG accessibility." },
    { id: "u5-automation", unit: 5, title: "Web Automation", desc: "Headless browsers, Playwright/Selenium testing, CI/CD, and workflow automation." },
    { id: "u5-5g", unit: 5, title: "Impact of 5G on Web Technologies", desc: "High bandwidth, ultra-low latency, massive IoT density, and rich web experiences." }
  ]
};
