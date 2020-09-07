#!/bin/bash -e
# Simple deployment script for JackTrip Foundation's website
# Copyright (c) 2020 JackTrip Foundation.

if [ "$1" = "main" ]; then
    TARGET="www.jacktrip.org"
elif [ "$1" = "staging" ]; then
    TARGET="staging.jacktrip.org"
else
    echo "usage: deploy.sh main|staging"
    exit 1
fi

echo "Deploying from $1 to $TARGET"

# Adapted from https://stackoverflow.com/questions/38762590/how-to-install-google-cloud-sdk-on-travis?answertab=active#tab-top

gcloud version

# decrypt gcloud service account credentials and authenticate
openssl aes-256-cbc -K $encrypted_9f3b5599b056_key -iv $encrypted_9f3b5599b056_iv -in deploy/service-account.json.enc -out deploy/service-account.json -d
gcloud auth activate-service-account --key-file deploy/service-account.json

# configure gcloud
gcloud config set project jacktrip-website
gcloud config set compute/zone us-centra1

# prepare directory to deploy
rm -rf "deploy/$TARGET"
mkdir "deploy/$TARGET"
git archive --format=tar HEAD | (cd "deploy/$TARGET" && tar --exclude-from "../excludes" -xf -)

# rsync deploy directory to gcloud
gsutil -m rsync -d -c -r "deploy/$TARGET" "gs://$TARGET" 2>&1
