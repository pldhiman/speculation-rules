import React from 'react';

const Speculationrules = ({ prerenderRules, prefetchRules }) => {
    let json = JSON.stringify({
      prerender: prerenderRules || [
        {
          where: {
            and: [
              { href_matches: "/*" },
              { not: { selector_matches: ".no-prerender" } },
            ],
          },
        },
      ],
      prefetch: prefetchRules || [],
    });
  
    return (
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{ __html: json }}
      />
    );
  };
  
  export default Speculationrules;