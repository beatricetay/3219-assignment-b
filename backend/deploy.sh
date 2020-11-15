printf '%s\n' "$KEYFILE" > "$TRAVIS_BUILD_DIR/google_credentials"
serverless deploy
