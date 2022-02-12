
# This project is using PostgreSQL as the database

# Pre-requisite
    1. Populate .env.development and .env.test files with your parameters. Use the boilerplate in .env.example

1. # Accessing the documentation
    - Please go to ```[BASE_URL]/docs```
    - ```BASE_URL``` of the current setup is http://localhost:4000

2. # Run tests
    * Make sure to have .env.test file setup
    - Use the Dockerfile-tst to run the unit tests


3. # Arguments
    - Used Factory design pattern to send emails. This is the most scalable pattern as per the requirements
    - Used jasmine as testing framework as this is the most convenient in terms of spying
    - Used Typescript as opposed to Javascript for better intellisense and error catching
    - Used console logs as my logger for demo purposes. However, a better choice might be using third party services like LogDNA

