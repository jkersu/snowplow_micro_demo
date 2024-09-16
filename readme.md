<h1> How to setup </h1>
1. Spin up Micro

```
docker run -p 9090:9090 \
  --mount type=bind,source=$(pwd)/schemas,destination=/config/iglu-client-embedded/schemas \
  snowplow/snowplow-micro:2.1.2
```

2. Put it behind a ngrok reverse-proxy
```
ngrok http http://localhost:9090
```

3. Update app.js file to use new ngrok endpoint given from Step 2 instead of the current value:
```
snowplow('newTracker', 'sp', 'https://f0a5-104-151-7-162.ngrok-free.app', {
```

4. Run the app:
```
python3 app.py                                                            
```

5. Can view local site at `http://localhost:5000/`



<h1>Running Micro with Snowbridge:</h1>

```
docker run --name micro -p 9090:9090 \
 -e MICRO_IGLU_REGISTRY_URL=<<your endpoint>> \
 -e MICRO_IGLU_API_KEY=<<your key>> \
 --mount type=bind,source=$(pwd)/<<path to your local enrichments folder>>,destination=/config/enrichments \
 snowplow/snowplow-micro:2.1.2 --output-tsv \
-Dorg.slf4j.simpleLogger.log.EventLog=off | docker run --name snowbridge -i \
 --mount type=bind,source=$(pwd)/<<your local snowbridge folder>>/config.hcl,target=/tmp/config.hcl \
 snowplow/snowbridge:2.4.1
 ```

Note: Can use https://webhook.site/ as a testing destination for Snowbridge




