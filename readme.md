
1. Spin up Micro

docker run -p 9090:9090 \
  --mount type=bind,source=$(pwd)/schemas,destination=/config/iglu-client-embedded/schemas \
  snowplow/snowplow-micro:2.1.2


2. Put it behind a ngrok reverse-proxy

ngrok http http://localhost:9090


3. Update app.js file to use new ngrok endpoint

4. Run the app:
- python3 app.py                                                            


5. View local site:
- http://localhost:5000/
