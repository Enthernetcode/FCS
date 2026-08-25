// Full Cell Sufficiency / Enthernet entity and search metadata.
(() => {
  const canonicalUrl = 'https://fcs.enthernet.com/';
  const title = 'Full Cell Sufficiency (FCS) | Renuel Roberts · Enthernet';
  const description = 'Full Cell Sufficiency (FCS) is a conceptual research framework by Renuel Roberts / Enthernet exploring cellular communication, synchronization, repair, resource sufficiency and biological guardrails.';
  const enthernet = 'https://enthernet.com/';
  const blog = 'https://blog.enthernet.com/';
  const github = 'https://github.com/Enthernetcode';
  const linkedin = 'https://www.linkedin.com/in/renuel-roberts-st-enthernet-code-6571a7241';
  const coreShield = 'https://core-shield.enthernetservice.com';
  const pinchAI = 'https://pinchai.enthernetservice.com';

  document.title = title;
  function meta(attr, key, value) {
    let node = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!node) {
      node = document.createElement('meta');
      node.setAttribute(attr, key);
      document.head.appendChild(node);
    }
    node.setAttribute('content', value);
  }
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
  meta('name','description',description);
  meta('name','robots','index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
  meta('property','og:type','website');
  meta('property','og:site_name','Full Cell Sufficiency · Enthernet');
  meta('property','og:title',title);
  meta('property','og:description',description);
  meta('property','og:url',canonicalUrl);
  meta('name','twitter:card','summary_large_image');
  meta('name','twitter:title',title);
  meta('name','twitter:description',description);

  const graph = {
    '@context':'https://schema.org',
    '@graph':[
      {
        '@type':'WebSite',
        '@id':`${canonicalUrl}#website`,
        url:canonicalUrl,
        name:'Full Cell Sufficiency',
        alternateName:['FCS','Full Cell Sufficiency Research'],
        description,
        creator:{'@id':`${enthernet}#renuel-roberts`},
        publisher:{'@id':`${enthernet}#organization`},
        isPartOf:{'@id':`${enthernet}#website`},
        inLanguage:'en'
      },
      {
        '@type':'ResearchProject',
        '@id':`${canonicalUrl}#research-project`,
        name:'Full Cell Sufficiency',
        alternateName:'FCS',
        url:canonicalUrl,
        description,
        founder:{'@id':`${enthernet}#renuel-roberts`},
        parentOrganization:{'@id':`${enthernet}#organization`},
        keywords:['wound healing','cell signaling','mitosis','tissue remodeling','resource sufficiency','controlled regeneration','UCCSL']
      },
      {
        '@type':'Person',
        '@id':`${enthernet}#renuel-roberts`,
        name:'Renuel Roberts',
        alternateName:['Enthernet Code','Renuel Roberts ST Enthernet Code'],
        url:enthernet,
        sameAs:[linkedin,github,blog]
      },
      {
        '@type':'Organization',
        '@id':`${enthernet}#organization`,
        name:'Enthernet',
        alternateName:'Enthernet Code',
        url:enthernet,
        founder:{'@id':`${enthernet}#renuel-roberts`},
        sameAs:[github,linkedin,blog,canonicalUrl,coreShield,pinchAI]
      }
    ]
  };
  let script = document.getElementById('enthernet-fcs-entity-graph');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'enthernet-fcs-entity-graph';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(graph);

  const footer = document.querySelector('footer .wrap');
  if (footer && !document.getElementById('enthernet-network-links')) {
    const network = document.createElement('p');
    network.id = 'enthernet-network-links';
    network.innerHTML = `<a href="${enthernet}">Enthernet</a> · <a href="${blog}">Engineering Blog</a> · <a href="${coreShield}">Core-Shield Cyber Labs</a> · <a href="${pinchAI}">Pinch AI</a> · <a href="${github}">GitHub</a>`;
    footer.appendChild(network);
  }
})();
