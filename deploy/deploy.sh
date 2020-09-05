#!/bin/bash

# Adapted from https://stackoverflow.com/questions/38762590/how-to-install-google-cloud-sdk-on-travis?answertab=active#tab-top

gcloud version

# decrypt gcloud service account credentials and authenticate
openssl aes-256-cbc -K $encrypted_9f3b5599b056_key -iv $encrypted_9f3b5599b056_iv -in deploy/service-account.json.enc -out deploy/service-account.json -d
gcloud auth activate-service-account --key-file deploy/service-account.json

# configure gcloud
gcloud config set project jacktrip-website
gcloud config set compute/zone us-centra1

# prepare directory to deploy
rm -rf deploy/www.jacktrip.org
mkdir deploy/www.jacktrip.org
git archive --format=tar HEAD | (cd deploy/www.jacktrip.org && tar --exclude-from "../excludes" -xf -)

# rsync deploy directory to gcloud
gsutil -m rsync -d -c -r deploy/www.jacktrip.org gs://www.jacktrip.org 2>&1
