The Speculation Rules API is designed to improve performance for future navigations. It targets document URLs rather than specific resource files, and so makes sense for multi-page applications (MPAs) rather than single-page applications (SPAs).

You can read about it on the MDN [here](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API).

```bash
npm i speculation-rules
```

## Use in Next JS or React JS
This component uses the two props i.e

| Props  | type | default values |
| ------------- | ------------- | ------------- | 
| prerenderRules  | array  | ```[{where: {and: [{ href_matches: "/*" },{ not: { selector_matches: ".no-prerender" } },],},},] ```
| prefetchRules | array  |  ``` [] ```



##### Case:1  Prerender Speculation on all the href's in the page
For pages directory : use in _app.js
For App Directory : use in the root layout.js

```jsx
import Speculationrules from "speculation-rules";

<Speculationrules />
```
This is the default Speculations configuration.
```json
{
    prerender: [{
      where: {
        and: [{
          href_matches: "/*"
        }, {
          not: {
            selector_matches: ".no-prerender"
          }
        }]
      }
    }],
    prefetch: []
  }
```

##### Case:2  Custom Speculation Rules
for custom rules

```json
<Speculationrules 
    prerenderRules={[
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "href_matches": "/*\\?*(^|&)add-to-cart=*" } },
            { "not": { "selector_matches": ".no-prerender" } },
            { "not": { "selector_matches": "[rel~=nofollow]" } }
          ]
        }
      }
    ]} 
    prefetchRules={[
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]}   
/>
```


