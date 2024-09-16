// Load the Snowplow Javascript tacker - sp.js library
// Binds it to a Snowplow object
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
    p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
    };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
    n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","/static/js/sp.js","snowplow"));

// Initialise a new tracker - can have multiple per page.
// Specify CollectorURL
    snowplow('newTracker', 'sp', 'https://5fa5-104-151-7-162.ngrok-free.app', {
       appId: 'demo-flask-app',
       discoverRootDomain: true,
       cookieSameSite: 'Lax', // Recommended
       contexts: {
         webPage: true // Can be omitted > this adds an Automatic Page Entity
        }
    }
    );
    
    // OPTIONAL: Create a context entity for "User" and add it to global context
    let contextEntity = {
        schema: "iglu:com.example/user_entity/jsonschema/1-0-0",
        data: {
            userId: "abc"
        } 
    };

    snowplow('addGlobalContexts', [contextEntity]);

    // Enabling automatic page pings
    snowplow('enableActivityTracking', {
     minimumVisitLength: 30,
     heartbeatDelay: 10}); // Enabling page pings
    
    // Enabling automatic pageviews 
    snowplow('trackPageView');
