printf '%s\n' "$google_credentials" > "$TRAVIS_BUILD_DIR/google_credentials.json"
serverless deploy
